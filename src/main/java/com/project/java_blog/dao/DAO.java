package com.project.java_blog.dao;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.project.java_blog.dto.DTO;

@Mapper
public interface DAO {

    List<DTO> selectSysdate(DTO dto);

    List<DTO> selectTitleList(DTO dto);
}

