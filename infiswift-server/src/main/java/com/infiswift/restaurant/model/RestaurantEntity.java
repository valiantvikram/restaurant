package com.infiswift.restaurant.model;

import lombok.Getter;
import lombok.Setter;

public class RestaurantEntity {
	
	@Getter
	@Setter
	private String recipeName;
	@Getter
	@Setter
	private int recipeKey;
	@Getter
	@Setter
	private String recipeType;
	@Getter
	@Setter
	private int price;
	@Getter
	@Setter
	private String ingredientMeasure;
	@Getter
	@Setter
	private int ingredientQuant;
	@Getter
	@Setter
	private int servings;
	@Getter
	@Setter
	private String ingredientQuantGrams;
	@Getter
	@Setter
	private String ingredientName;

}
