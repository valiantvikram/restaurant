
const BASE_URL = 'http://localhost:8080';

const RECIPE_DETAIL = '/getrecipedetails';
const INSERT_RECIPE_DETAIL = '/insertrecipedetails';
const UPDATE_RECIPE_DETAIL = '/updaterecipedetails';
const DELETE_RECIPE_DETAIL = '/deleterecipedetails';

const MENU_DETAIL = '/getmenu';
const INSERT_MENU_DETAIL = '/insertMenu';
const UPDATE_MENU_DETAIL = '/updateMenu';
const DELETE_MENU_DETAIL = '/deleteMenu';

const INGREDIENTS_QUANT = '/getquanity';



export const environment = {
  production: false,
  SERVICES:{
    RECIPE_DETAIL_URL: BASE_URL + RECIPE_DETAIL,
    INSERT_RECIPE_DETAIL_URL: BASE_URL + INSERT_RECIPE_DETAIL,
    UPDATE_RECIPE_DETAIL_URL: BASE_URL + UPDATE_RECIPE_DETAIL,
    DELETE_RECIPE_DETAIL_URL: BASE_URL + DELETE_RECIPE_DETAIL,

    
    MENU_DETAIL_URL: BASE_URL + MENU_DETAIL,
    INSERT_MENU_DETAIL_URL: BASE_URL + INSERT_MENU_DETAIL,
    UPDATE_MENU_DETAIL_URL: BASE_URL + UPDATE_MENU_DETAIL,
    DELETE_MENU_DETAIL_URL: BASE_URL + DELETE_MENU_DETAIL,

    INGREDIENTS_QUANT_URL: BASE_URL + INGREDIENTS_QUANT,

  }
};
