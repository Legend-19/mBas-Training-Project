package com.comviva.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.comviva.entity.Login;
import com.comviva.service.OfferService;


@Controller
public class ViewController {
	
	@Autowired
	OfferService offerService;
	
	@GetMapping("/")
	public ModelAndView getHomePage() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("Home");
		System.out.println("HOME");
		return modelAndView;
	}
	
//	@RequestMapping(value = "/login", method = RequestMethod.POST, produces = "text/html")
//	public String loginUser(@ModelAttribute("emodel") Login loginDetails){
//		ModelAndView modelAndView = new ModelAndView();
//		
//		if(offerService.ifUserExists(loginDetails)) {
//	    modelAndView.setViewName("showOffers");
//		System.out.println(loginDetails.getUsername());
//	    return "showOffers";
//		}
//		else 
//	    modelAndView.setViewName("Home");
//	    return "Home";
//		
//	}
	
}
