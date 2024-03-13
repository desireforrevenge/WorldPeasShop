package com.org.revenge.devstudio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;

@Controller
public class ReadController {
    @GetMapping("/read") //main page
    public String read(Model model, String text) {
//        char[] arr = text.toCharArray();
//        ArrayList<String> lines = new ArrayList<>();
//        for (int i = 0; i < arr.length; i++) {
//            if (arr[i] == '<' && arr[i + 1] == 'b' && arr[i + 2] == 'r' && arr[i + 3] == '>') {
//                lines.add(text.substring(0, i));
//                text = text.substring(i + 4);
//            }
//        }
//
//        text = "";
//        for (int i = 0; i < lines.size(); i++) {
//            text = text + lines.get(i);
//            model.addAttribute("text", lines.get(i));
//        }
        model.addAttribute("text", text);
        return "read";
    }
}
