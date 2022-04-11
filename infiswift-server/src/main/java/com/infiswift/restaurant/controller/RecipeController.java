package com.infiswift.restaurant.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.infiswift.restaurant.model.RestaurantEntity;
import com.infiswift.restaurant.service.RecipeService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class RecipeController {
//	public static final Logger LOGGER = 
	@Autowired
	RecipeService recipeService;

	@RequestMapping (method = RequestMethod.GET, value = "/getmenu", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Map<String,Object>>getMenu()throws IOException {
		return recipeService.getMenu();
	}
	
	@RequestMapping (method = RequestMethod.GET, value = "/getquanity", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Map<String,Object>>getQuantity(@RequestParam(value = "servings",required = true)int servings)throws IOException {
		return recipeService.getQuantity(servings);
	}
	
	@RequestMapping (method = RequestMethod.GET, value = "/getrecipedetails", produces = {MediaType.APPLICATION_JSON_VALUE})
	public List<Map<String,Object>>getRecipeDetails()throws IOException {
		return recipeService.getRecipeDetails();
	}
	
	@RequestMapping (method = RequestMethod.POST, value = "/insertrecipedetails", produces = {MediaType.APPLICATION_JSON_VALUE})
	public String insertRecipeDetails(@RequestBody List<RestaurantEntity> inputData)throws IOException {
		return recipeService.insertRecipeDetails(inputData);
	}
	
	@RequestMapping (method = RequestMethod.POST, value = "/updaterecipedetails", produces = {MediaType.APPLICATION_JSON_VALUE})
	public String updateRecipeDetails(@RequestBody List<RestaurantEntity> inputData)throws IOException {
		return recipeService.updateRecipeDetails(inputData);
	}
	
	@RequestMapping (method = RequestMethod.POST, value = "/deleterecipedetails", produces = {MediaType.APPLICATION_JSON_VALUE})
	public String deleteRecipeDetails(@RequestBody List<RestaurantEntity> inputData)throws IOException {
		return recipeService.deleteRecipeDetails(inputData);
	}
	
	@RequestMapping (method = RequestMethod.POST, value = "/insertMenu", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String insertMenu(@RequestBody List<RestaurantEntity> inputData)throws IOException {
//		System.out.println(inputData);
		return recipeService.insertMenu(inputData);
	}
	
	@RequestMapping (method = RequestMethod.POST, value = "/updateMenu")
	public String updateMenu(@RequestBody List<RestaurantEntity> inputData)throws IOException {
		return recipeService.updateMenu(inputData);
	}
	
	@RequestMapping (method = RequestMethod.POST, value = "/deleteMenu")
	public String deleteMenu(@RequestBody List<RestaurantEntity> inputData)throws IOException {
		return recipeService.deleteMenu(inputData);
	}

}
