package com.magicalcoder.youyaboot.service.score.service;

import com.magicalcoder.youyaboot.core.service.ICommonService;
import com.magicalcoder.youyaboot.model.Score;
import java.util.List;
import java.util.Map;
import java.util.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.math.*;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 软件作者：何栋宇 qq:709876443
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:648595928
*/

public interface ScoreService extends ICommonService<Score,Long>{


    List<String> getDayZhangJia(String date);

}
