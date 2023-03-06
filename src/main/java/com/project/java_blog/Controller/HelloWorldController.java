package com.project.java_blog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ui.ModelMap;
import java.util.List;
import com.project.java_blog.dto.DTO;
import com.project.java_blog.service.impl.ServiceImpl;

@RestController
public class HelloWorldController {

    @Autowired
    ServiceImpl service;

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

    @GetMapping("/api/index")
    public @ResponseBody List<DTO> selectSystdate (@ModelAttribute("DTO") DTO dto,ModelMap model) throws Exception{
        List<DTO> eList = service.selectSysdate(dto);
		
		return eList;
    }

    @GetMapping("/api/title.do")
    public @ResponseBody List<DTO> selectTitleList (@ModelAttribute("DTO") DTO dto,ModelMap model) throws Exception{
        List<DTO> eList = service.selectTitleList(dto);
		
		return eList;
    }
    
}
