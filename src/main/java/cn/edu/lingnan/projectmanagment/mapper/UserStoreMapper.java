package cn.edu.lingnan.projectmanagment.mapper;

import cn.edu.lingnan.projectmanagment.bean.Projects;
import cn.edu.lingnan.projectmanagment.bean.UserStore;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserStoreMapper {
    /**
     * 查询一条项目信息
     * @return
     */
    UserStore getOneUserStore(@Param("userId")Integer userId, @Param("projectId")Integer projectId);

    /**
     * 添加收藏记录
     * @param userStore
     * @return
     */
    boolean addUserStore(UserStore userStore);

    /**
     * 删除收藏记录
     * @return
     */
    boolean deleteUserStore(@Param("userId")Integer userId, @Param("projectId")Integer projectId);

    /**
     * 还原收藏记录
     * @return
     */
    boolean reductionUserStore(@Param("userId")Integer userId, @Param("projectId")Integer projectId);

    /**
     * 查询项目被收藏数
     * @return
     */
    Integer countProjectBeStored(Integer id);

    /**
     * 查询收藏总人数
     * @return
     */
    Integer countUserByStored();

    /**
     * 查询第一条收藏记录
     * @return
     */
    List findTheFirstRecored();

    /**
     * 查询剩余收藏记录
     * @return
     */
    UserStore findTheSurplusRecored(int i);

}
