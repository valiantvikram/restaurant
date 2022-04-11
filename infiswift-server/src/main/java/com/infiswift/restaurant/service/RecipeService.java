package com.infiswift.restaurant.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import com.infiswift.restaurant.model.RestaurantEntity;

public interface RecipeService {

	public List<Map<String,Object>>getRecipeDetails()throws IOException;

	public List<Map<String, Object>> getMenu() throws IOException;

	String insertMenu(List<RestaurantEntity> inputData);

	String updateMenu(List<RestaurantEntity> inputData);

	String deleteMenu(List<RestaurantEntity> inputData);
	
	public List<Map<String, Object>> getQuantity(int servings);

	String insertRecipeDetails(List<RestaurantEntity> inputData);

	String updateRecipeDetails(List<RestaurantEntity> inputData);

	String deleteRecipeDetails(List<RestaurantEntity> inputData);

}
