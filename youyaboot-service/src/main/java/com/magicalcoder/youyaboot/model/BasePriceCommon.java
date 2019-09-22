package com.magicalcoder.youyaboot.model;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.math.*;
import java.io.Serializable;
import lombok.Data;
/**
* 代码为自动生成 Created by www.magicalcoder.com
* 软件作者：何栋宇 qq:709876443
* 如果你改变了此类 read 请将此行删除
* 欢迎加入官方QQ群:648595928
*/
@Data
public class BasePriceCommon implements Serializable{

    private Long id;//id
    private int numbers;
    private Integer basePoint;//base_point
    private Integer finalPoint;//final_point
    @DateTimeFormat( pattern = "yyyy-MM-dd" )
    @JsonFormat(pattern = "yyyy-MM-dd", timezone="GMT+8")
    private Date inputTime;//input_time
    private Long projectId;//project_id
    private String project_str;


    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public Integer getBasePoint(){
        return basePoint;
    }
    public void setBasePoint(Integer basePoint){
        this.basePoint = basePoint;
    }

    public Integer getFinalPoint(){
        return finalPoint;
    }
    public void setFinalPoint(Integer finalPoint){
        this.finalPoint = finalPoint;
    }

    public Date getInputTime(){
        return inputTime;
    }
    public void setInputTime(Date inputTime){
        this.inputTime = inputTime;
    }

    public Long getProjectId(){
        return projectId;
    }
    public void setProjectId(Long projectId){
        this.projectId = projectId;
    }
}
