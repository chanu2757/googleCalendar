package com.project.java_blog.service;

import java.util.List;
import com.project.java_blog.dto.DTO;
import com.project.java_blog.vo.VO;

public interface Service {

    List<DTO> selectSysdate(DTO dto);

    List<DTO> selectTitleList(DTO dto);

}
