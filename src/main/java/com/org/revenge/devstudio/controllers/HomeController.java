package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    public static String basketCount = "1";
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("basketCount", basketCount);

        return "home";
    }
}