package com.example.controller;

import com.example.form.CheckPasswordForm;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/checkpassword")
public class CheckPasswordController {
    @CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
            RequestMethod.DELETE})

    @GetMapping("")
    public String index() {
        return "input-password";
    }

    @ResponseBody
    @PostMapping("/check")
    public Map<String, String> check(CheckPasswordForm checkPasswordForm) {
        String password = checkPasswordForm.getPassword();
        System.out.println("サーバー側「入力されたpassword」：" + password);
        String checkPassword = checkPasswordForm.getCheckPassword();
        Map<String, String> map = new HashMap<>();
        String notEqualMessage = null;
        String equalMessage = null;
        String tooShortMessage = null;
        String successMessage = null;
        if (checkPassword.equals(password)) {
            equalMessage = "確認用パスワード入力OK！";
        } else {
            notEqualMessage = "パスワードが一致していません";
        }
        if (password.length() < 8) {
            tooShortMessage = "パスワードは8文字以内で入力してください";
        } else {
            successMessage = "パスワード入力OK！";
        }
        map.put("notEqualMessage", notEqualMessage);
        map.put("equalMessage", equalMessage);
        map.put("tooShortMessage", tooShortMessage);
        map.put("successMessage", successMessage);
        return map;
    }
}
