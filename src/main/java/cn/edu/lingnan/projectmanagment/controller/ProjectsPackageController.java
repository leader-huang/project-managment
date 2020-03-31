package cn.edu.lingnan.projectmanagment.controller;

import cn.edu.lingnan.projectmanagment.bean.Documents;
import cn.edu.lingnan.projectmanagment.bean.ProjectsPackage;
import cn.edu.lingnan.projectmanagment.bean.ProjectsPackageList;
import cn.edu.lingnan.projectmanagment.service.impl.ProjectsPackageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ProjectsPackageController {
    @Autowired
    private ProjectsPackageServiceImpl projectsPackageService;


    @GetMapping("/projectsPackages")
    @ResponseBody
    public List<ProjectsPackageList> getAllPackageByProjectIdAndPackageId(@RequestParam("projectId") Integer projectsId) {
        //通过projectsId查询项目的所有包
        List<ProjectsPackageList> list = projectsPackageService.getAllPackagesListByProjectId(projectsId);
        return list;
    }

    @PostMapping("/projectsPackage")
    public String addPackage(ProjectsPackage projectsPackage) {
        //创建projectsPackage对象
        System.out.println(projectsPackage);
        //处理包id
        Integer packageId = projectsPackageService.getPackageIdByProjectId(projectsPackage.getProjectId()).getPackageId() + 1;
        System.out.println("packageId:::" + packageId);
        projectsPackage.setPackageId(packageId);
        projectsPackageService.insert(projectsPackage);
        return "project/projectview";
    }

    @ResponseBody
    @GetMapping("/projectsPackage")
    public boolean checkPackageByProjectIdAndPackageName(ProjectsPackage projectsPackage){
        System.out.println(projectsPackage);
        if(projectsPackageService.getPackageByProjectIdAndPackageName(projectsPackage.getProjectId(), projectsPackage.getPackageName()) == null){
            return true;
        }else {
            return false;
        }
    }

    //插文件进入文件包表
    public boolean insertpackage(Documents documents, String packageName) {
        System.out.println("documents:::" + documents);
        System.out.println("packageName" + packageName);
        //先查找文件在文件包表是否存在
        if (projectsPackageService.getDocumentsNameByProjectIdAndPackageNameAndDocumentsName(documents.getProjectId(), packageName, documents.getName()) != null) {
            System.out.println("文件已存在，不要在插入文件包表");
            return false;
        } else {

            ApplicationContext ctx = new ClassPathXmlApplicationContext("application-context.xml");
            ProjectsPackage projectsPackage = ctx.getBean(ProjectsPackage.class);
            //设置项目id
            projectsPackage.setProjectId(documents.getProjectId());
            //设置包名
            projectsPackage.setPackageName(packageName);
            //设置文件名
            projectsPackage.setDocumentName(documents.getName());
            //设置创造者
            projectsPackage.setUserId(documents.getUserId());
            //查找包Id

            int packageId = projectsPackageService.getPackageByProjectIdAndPackageName(documents.getProjectId(), packageName).getPackageId();
            System.out.println("packageId:::" + packageId);
            //设置包id
            projectsPackage.setPackageId(packageId);
            return projectsPackageService.insert(projectsPackage);
        }
    }

    //修改文件包信息
    public boolean updateprojectsPackage(Documents documents, String packageName) {
        System.out.println("documents:::" + documents);
        System.out.println("packageName" + packageName);
        ApplicationContext ctx = new ClassPathXmlApplicationContext("application-context.xml");
        ProjectsPackage projectsPackage = ctx.getBean(ProjectsPackage.class);
        //先查找出原先记录
        projectsPackage = projectsPackageService.getDocumentsNameByProjectIdAndDocumentsName(documents.getProjectId(), documents.getName());
        //先查看包名是否存在
        if (projectsPackageService.getPackageByProjectIdAndPackageName(documents.getProjectId(), packageName) == null) {
            System.out.println("包不存在，不要在插入文件包表");
            return false;
        } else {
            //先查找这条记录
            //查找包id
            ProjectsPackage projectsPackage1 = ctx.getBean(ProjectsPackage.class);
            projectsPackage1 = projectsPackageService.getPackageByProjectIdAndPackageName(documents.getProjectId(), packageName);
            System.out.println("documents::" + projectsPackage1.getPackageId() + "________________________________________");
            Integer packageId = projectsPackage1.getPackageId();
            System.out.println(packageId);
            projectsPackage.setPackageId(packageId);
            projectsPackage.setPackageName(packageName);
            return projectsPackageService.update(projectsPackage);
        }
    }

}
