package com.magicalcoder.youyaboot.service.score.mapper;

import com.magicalcoder.youyaboot.core.service.ICommonMapper;
import com.magicalcoder.youyaboot.model.Score;
import org.apache.ibatis.annotations.Param;

import java.util.List;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 软件作者：何栋宇 qq:709876443
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:648595928
*/

public interface ScoreMapper extends ICommonMapper<Score,Long>{

    List<String> getDayZhangJia(@Param("date") String date);

}
