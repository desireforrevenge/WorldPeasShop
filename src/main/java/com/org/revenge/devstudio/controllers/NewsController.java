package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NewsController {
    @GetMapping("/news") //main page
    public String news(Model model) {
        model.addAttribute("title", "Мир");

        model.addAttribute("basketCount", BasketCounter.getProductsCount());

        return "news";
    }
}
