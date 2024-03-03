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
    int heirloomTomatoCounter = 0;
    int sweetOnionCounter = 3;
    int organicGingerCounter = 0;
    int basketCount_main;

    @GetMapping("/shop")
    public String shop(Model model, HttpSession session) {
        System.out.println("инициализация shop");
        String sortType = "default";
        //default, a-z, price

        /*int numberProducts_HeirloomTomato = 0;
        int numberProducts_SweetOnion = 3;
        int numberProducts_OrganicGinger = 0;

        model.addAttribute("heirloomTomatoCount", numberProducts_HeirloomTomato);
        model.addAttribute("sweetOnionCount", numberProducts_SweetOnion);
        model.addAttribute("organicGingerCount", numberProducts_OrganicGinger);*/
        
        model.addAttribute("data", Today.getFormattedDate());
        model.addAttribute("sortType", sortType);
        return "shop";
    }
    @PostMapping("/addHeirloomTomato")
    public String addHeirloomTomato(HttpSession session) {
        System.out.println("начало метода");
        int heirloomTomatoCounter = BasketCounter.getHeirloomTomatoCounter(session);
        if (heirloomTomatoCounter == 0) {
            System.out.println("IF ВЫПОЛНЯЕТСЯ");
            heirloomTomatoCounter++;
            setHeirloomTomatoCounter(session, heirloomTomatoCounter);

            int basketCount = getBasketCount(session);
            basketCount++;
            setBasketCount(session, basketCount);
        } else {

        }
        return "redirect:/shop";
    }




//    @PostMapping("/remove")
//    public String processForm(@ModelAttribute("formData")) {
//        System.out.println("zxc");
//
//        return "redirect:/showForm";
//    }
}