package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import com.org.revenge.devstudio.code.Today;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ShopController {
    @GetMapping("/shop")
    public String shop(Model model) {
        String sortType = "default";
        //default, a-z, price
        int numberProducts_HeirloomTomato = 2;
        int numberProducts_SweetOnion = 3;
        int numberProducts_OrganicGinger = 0;

        model.addAttribute("heirloomTomatoCount", numberProducts_HeirloomTomato);
        model.addAttribute("sweetOnionCount", numberProducts_SweetOnion);
        model.addAttribute("organicGingerCount", numberProducts_OrganicGinger);




        model.addAttribute("basketCount", BasketCounter.getProductsCount());
        model.addAttribute("data", Today.getFormattedDate());
        model.addAttribute("sortType", sortType);
        return "shop";
    }

//    @PostMapping("/add")
//    @ResponseBody
//    public String createPaste(@RequestParam("pasteInput") String pasteInput) { //button function
//        String uniCode = symbolGenerator();
//        if (pasteInput.isEmpty() || pasteInput.trim().isEmpty()) return "Пожалуйста, введите ваш текст.";
//        return uniCode;
//    }
}