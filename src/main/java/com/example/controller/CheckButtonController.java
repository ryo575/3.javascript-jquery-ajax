package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/status")
public class CheckButtonController {

    private String currentState = "入金前";

    @GetMapping("")
    public String index() {
        return "input-money";
    }

    @ResponseBody
    @PostMapping("/update")
    public Map<String, String> updateStatus() {
        String nextButtonText = "";

        if ("入金前".equals(currentState)) {
            currentState = "入金済み";
            nextButtonText = "配送済みへ変更";
        } else if ("入金済み".equals(currentState)) {
            currentState = "配送済み";
            nextButtonText = "完了へ変更";
        } else if ("配送済み".equals(currentState)) {
            currentState = "完了";
            nextButtonText = "入金前へ変更";
        } else {
            currentState = "入金前";
            nextButtonText = "入金済みへ変更";
        }

        Map<String, String> response = new HashMap<>();
        response.put("newState", currentState);
        response.put("buttonText", nextButtonText);

        return response;
    }
}