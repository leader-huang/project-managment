package cn.edu.lingnan.projectmanagment.mapper;

import cn.edu.lingnan.projectmanagment.bean.Projects;
import cn.edu.lingnan.projectmanagment.bean.ProjectsRecommendation;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ProjectMapper {
    /**
     * 查询一条项目信息
     * @return
     */
    Projects getById(Integer id);

    /**
     * 查询一条没有被注销项目信息
     * @return
     */
    Projects getByIdAndNoDel(Integer id);

    /**
     * 查询所有项目信息
     * @return
     */
    List<Projects> getProjectList();

    /**
     * 通过userId查询所有项目
     * @return
     */
    List<Projects> getProjectListByUserId(Integer userId);

    /**
     * 添加项目
     * @param project
     * @return
     */
    boolean addProject(Projects project);

    /**
     * 删除项目
     * @return
     */
    boolean deleteProject(Integer id);

    /**
     * 修改项目信息
     * @return
     */
    boolean editProject(Projects project);

    /**
     * 修改项目进度
     * @return
     */
    boolean updateSchedule(Projects project);

    /**
     * 还原项目
     * @return
     */
    boolean reductionProject(Integer id);

    /**
     * 查询所有已注销项目信息
     * @return
     */
    List<Projects> getDelProjectList();

    /**
     * 查找项目负责人
     * @param userId
     * @param projectId
     * @return
     */
    Projects getAdminByUserIdAndProjectId(Integer userId, Integer projectId);

    /**
     * 查找创建的项目
     * @param projectName
     * @param chargeUserId
     * @param projectCharacterization
     * @return
     */
    Projects getNewProjectByProject(String projectName, Integer chargeUserId, String projectCharacterization);

    /**
     * 查询所有项目主页信息
     * @return
     */
    List<ProjectsRecommendation> getProject(Integer pageNum, Integer pageSize);

    /**
     * 查询当前推荐商品信息
     * @return
     */
    List<ProjectsRecommendation> getRecommendedCommodities(Integer projectId);

    boolean updateProjectClickNumber(Integer projectId);

    /**
     * 获得今日点击量最多的项目信息。
     * @return
     */
    List<Projects> getTodayProject();

    /**
     * 获得本周点击量以及收藏人数最多的项目信息。
     * @return
     */
    List<Projects> getWeekProject();

    /**
     * 统计项目的记录数
     * @return
     */
    Integer countProjectsRecommendation();

    /**
     * 查询所有指定类型的项目
     * @return
     */
    List<ProjectsRecommendation> getProjectsByType(Integer pageNum, Integer pageSize,String type);

    /**
     * 统计指定类型的项目数
     * @return
     */
    Integer countProjectsNumberByType(String type);
}
