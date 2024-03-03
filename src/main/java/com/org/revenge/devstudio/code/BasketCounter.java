package com.org.revenge.devstudio.code;

import jakarta.servlet.http.HttpSession;

public class BasketCounter {
    public static int getBasketCount(HttpSession session) {
        Integer basketCount = (Integer) session.getAttribute("basketCount");
        return (basketCount != null) ? basketCount : 123;
    }

    public static void setBasketCount(HttpSession session, int basketCount) {
        session.setAttribute("basketCount", basketCount);
    }

    public static int getHeirloomTomatoCounter(HttpSession session) {
        Integer heirloomTomatoCounter = (Integer) session.getAttribute("heirloomTomatoCounter");
        return (heirloomTomatoCounter != null) ? heirloomTomatoCounter : 0;
    }

    public static void setHeirloomTomatoCounter(HttpSession session, int heirloomTomatoCounter) {
        session.setAttribute("heirloomTomatoCounter", heirloomTomatoCounter);
    }
}
