package com.springbootCRUD.springBootCRUD;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demoClass {
 @GetMapping("/getMessage")
 public String getMessage() {
	 return "Welcome to Student Dashboard";
 }
}
