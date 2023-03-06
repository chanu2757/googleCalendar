package com.project.java_blog.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import com.project.java_blog.dao.DAO;
import com.project.java_blog.dto.DTO;
import com.project.java_blog.service.Service;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service{
    
    @Autowired
    DAO dao;

    @Override
    public List<DTO> selectSysdate(DTO dto){
        return dao.selectSysdate(dto);
    }

    @Override
    public List<DTO> selectTitleList(DTO dto){
        return dao.selectTitleList(dto);
    }
}
