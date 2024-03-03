package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("basketCount", 1);

        return "home";
    }
//    @PostMapping("/create")
//    @ResponseBody
//    public String createPaste(@RequestParam("pasteInput") String pasteInput) { //button function
//        String uniCode = symbolGenerator();
//        if (pasteInput.isEmpty() || pasteInput.trim().isEmpty()) return "Пожалуйста, введите ваш текст.";
//        return uniCode;
//    }
}