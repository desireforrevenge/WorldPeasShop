package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import com.org.revenge.devstudio.code.Today;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ShopController {
    @GetMapping("/shop")
    public String shop(Model model) {
        String sortType = "default";
        //default, a-z, price

        model.addAttribute("basketCount", BasketCounter.getProductsCount());
        model.addAttribute("data", Today.getFormattedDate());
        model.addAttribute("sortType", sortType);
        return "shop";
    }
}
