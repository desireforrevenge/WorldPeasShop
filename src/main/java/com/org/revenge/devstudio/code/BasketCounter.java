package com.org.revenge.devstudio.code;

public class BasketCounter {
    private static int productsCount = 3;

    public static int getProductsCount() {
        return productsCount;
    }
    public static void decreaseProductsCount() {
        productsCount--;
    }
    public static void addProductsCount() {
        productsCount++;
    }
}
