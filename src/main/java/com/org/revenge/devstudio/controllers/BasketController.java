package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BasketController {
    @GetMapping("/basket") //main page
    public String basket(Model model) {
        model.addAttribute("basketCount", 1);

        model.addAttribute("typesProducts", 3);

        double num1 = 5.99;
        double num2 = 6.50;
        double num3 = 14.95;

        model.addAttribute("totalPrice1", String.format("$%.2f", num1));
        model.addAttribute("totalPrice2", String.format("$%.2f", num2));
        model.addAttribute("totalPrice3", String.format("$%.2f", num3));

        return "basket";
    }


}
