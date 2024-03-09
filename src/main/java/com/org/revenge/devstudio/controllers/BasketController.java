package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BasketController {
    @GetMapping("/basket") //main page
    public String basket(Model model, @RequestParam(name = "sumElementsInBasket", required = false, defaultValue = "0") Integer sumElementsInBasket,
                                      @RequestParam(name = "heirloomTomatoCount", required = false, defaultValue = "0") Integer heirloomTomatoCount,
                                      @RequestParam(name = "sweetOnionCount", required = false, defaultValue = "0") Integer sweetOnionCount,
                                      @RequestParam(name = "organicGingerCount", required = false, defaultValue = "0") Integer organicGingerCount) {
        int typesProducts = 0;
        typesProducts = (heirloomTomatoCount > 0) ? typesProducts + 1 : typesProducts;
        typesProducts = (sweetOnionCount > 0) ? typesProducts + 1 : typesProducts;
        typesProducts = (organicGingerCount > 0) ? typesProducts + 1 : typesProducts;

        model.addAttribute("typesProducts", typesProducts);

        model.addAttribute("sumElementsInBasket", sumElementsInBasket);
        model.addAttribute("heirloomTomatoCount", heirloomTomatoCount);
        model.addAttribute("sweetOnionCount", sweetOnionCount);
        model.addAttribute("organicGingerCount", organicGingerCount);

        //prices:
        double priceHeirloomTomato = 5.99;
        double priceSweetOnion = 2.99;
        double priceOrganicGinger = 12.99;


        model.addAttribute("priceHeirloomTomato", priceHeirloomTomato);
        model.addAttribute("priceSweetOnion", priceSweetOnion);
        model.addAttribute("priceOrganicGinger", priceOrganicGinger);

        model.addAttribute("totalPrice1", String.format("$%.2f", heirloomTomatoCount * priceHeirloomTomato));
        model.addAttribute("totalPrice2", String.format("$%.2f", sweetOnionCount * priceSweetOnion));
        model.addAttribute("totalPrice3", String.format("$%.2f", organicGingerCount * priceOrganicGinger));

        return "basket";
    }
    @PostMapping("/submitForm")
    public String submitForm(@ModelAttribute BasketCounter basketCounter) {

        return "redirect:/basket";
    }
}
