package com.org.revenge.devstudio.controllers;

import com.org.revenge.devstudio.code.BasketCounter;
import com.org.revenge.devstudio.code.Today;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ShopController {
    @GetMapping("/shop")
    public String shop(Model model, @RequestParam(name = "sumElementsInBasket", required = false, defaultValue = "0") Integer sumElementsInBasket,
                       @RequestParam(name = "heirloomTomatoCount", required = false, defaultValue = "0") Integer heirloomTomatoCount,
                       @RequestParam(name = "sweetOnionCount", required = false, defaultValue = "0") Integer sweetOnionCount,
                       @RequestParam(name = "organicGingerCount", required = false, defaultValue = "0") Integer organicGingerCount) {
        String sortType = "default";
        //default, a-z, price

        model.addAttribute("sumElementsInBasket", sumElementsInBasket);
        model.addAttribute("heirloomTomatoCount", heirloomTomatoCount);
        model.addAttribute("sweetOnionCount", sweetOnionCount);
        model.addAttribute("organicGingerCount", organicGingerCount);

        model.addAttribute("data", Today.getFormattedDate());
        model.addAttribute("sortType", sortType);
        model.addAttribute("basketCounter", new BasketCounter());
        return "shop";
    }
    @PostMapping("/submitForm")
    public ModelAndView submitForm(@ModelAttribute BasketCounter basketCounter) {
        ModelAndView basketRedirect = new ModelAndView("redirect:/basket");
        addBasketAttributes(basketRedirect, basketCounter);

        ModelAndView aboutRedirect = new ModelAndView("redirect:/about");
        addBasketAttributes(aboutRedirect, basketCounter);

        ModelAndView newsRedirect = new ModelAndView("redirect:/news");
        addBasketAttributes(newsRedirect, basketCounter);

        ModelAndView homeRedirect = new ModelAndView("redirect:/home");
        addBasketAttributes(homeRedirect, basketCounter);

        ModelAndView profileRedirect = new ModelAndView("redirect:/profile");
        addBasketAttributes(profileRedirect, basketCounter);

        ModelAndView shopRedirect = new ModelAndView("redirect:/shop");
        addBasketAttributes(shopRedirect, basketCounter);

        return basketRedirect;
    }

    private void addBasketAttributes(ModelAndView modelAndView, BasketCounter basketCounter) {
        modelAndView.addObject("heirloomTomatoCount", basketCounter.getHeirloomTomatoCount());
        modelAndView.addObject("sweetOnionCount", basketCounter.getSweetOnionCount());
        modelAndView.addObject("organicGingerCount", basketCounter.getOrganicGingerCount());
        modelAndView.addObject("sumElementsInBasket", basketCounter.getSumElementsInBasket());
    }
}