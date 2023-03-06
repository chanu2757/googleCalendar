package com.project.java_blog.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Data;
import java.lang.String;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DTO {
    private String CurrentTime;
    private int SEQ_NO;
    private String TITLE;
    private String DDABONG;
    private String ADD_DATE;
}
