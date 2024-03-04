package com.org.revenge.devstudio.code;

import jakarta.servlet.http.HttpSession;

public class BasketCounter {
    private String heirloomTomatoCount;
    private String sweetOnionCount;
    private String organicGingerCount;
    private String sumElementsInBasket;

    public String getSumElementsInBasket() {
        return sumElementsInBasket;
    }

    public void setSumElementsInBasket(String sumElementsInBasket) {
        this.sumElementsInBasket = sumElementsInBasket;
    }

    public String getHeirloomTomatoCount() {
        return heirloomTomatoCount;
    }

    public void setHeirloomTomatoCount(String heirloomTomatoCount) {
        this.heirloomTomatoCount = heirloomTomatoCount;
    }

    public String getSweetOnionCount() {
        return sweetOnionCount;
    }

    public void setSweetOnionCount(String sweetOnionCount) {
        this.sweetOnionCount = sweetOnionCount;
    }

    public String getOrganicGingerCount() {
        return organicGingerCount;
    }

    public void setOrganicGingerCount(String organicGingerCount) {
        this.organicGingerCount = organicGingerCount;
    }
}
