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
public class NewsController {
    @GetMapping("/news") //main page
    public String news(Model model, @RequestParam(name = "sumElementsInBasket", required = false, defaultValue = "0") Integer sumElementsInBasket,
                       @RequestParam(name = "heirloomTomatoCount", required = false, defaultValue = "0") Integer heirloomTomatoCount,
                       @RequestParam(name = "sweetOnionCount", required = false, defaultValue = "0") Integer sweetOnionCount,
                       @RequestParam(name = "organicGingerCount", required = false, defaultValue = "0") Integer organicGingerCount) {

        model.addAttribute("sumElementsInBasket", sumElementsInBasket);
        model.addAttribute("heirloomTomatoCount", heirloomTomatoCount);
        model.addAttribute("sweetOnionCount", sweetOnionCount);
        model.addAttribute("organicGingerCount", organicGingerCount);

        return "news";
    }

    @PostMapping("/readNews")
    public ModelAndView submitForm(@RequestParam("text") String text) {
        ModelAndView readRedirect = new ModelAndView("redirect:/read");
        readRedirect.addObject("text", text);
        return readRedirect;
    }
}
