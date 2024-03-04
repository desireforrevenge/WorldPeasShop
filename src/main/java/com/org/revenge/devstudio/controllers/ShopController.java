package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import com.org.revenge.devstudio.code.Today;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import static com.org.revenge.devstudio.code.BasketCounter.*;

@Controller
public class ShopController {
    public static int zxc = 1;
    @GetMapping("/shop")
    public String shop(Model model, HttpSession session) {
        String sortType = "default";
        //default, a-z, price

        model.addAttribute("data", Today.getFormattedDate());
        model.addAttribute("sortType", sortType);
        model.addAttribute("basketCounter", new BasketCounter());
        return "shop";
    }
    @PostMapping("/submitForm")
    public String submitForm(@ModelAttribute BasketCounter basketCounter) {
        // formData.getParam1(), formData.getParam2(), formData.getParam3()
        zxc = Integer.parseInt(basketCounter.getHeirloomTomatoCount());



        return "result";
    }
}