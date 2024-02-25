package com.org.revenge.devstudio.code;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Today {
    private static final LocalDate today = LocalDate.now();
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");
    private static final String formattedDate = today.format(formatter);

    public static String getFormattedDate() {
        return formattedDate;
    }
}
