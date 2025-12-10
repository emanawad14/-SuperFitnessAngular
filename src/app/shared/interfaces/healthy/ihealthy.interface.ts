


export interface Ihealthy {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}


export interface ICategoriesResponse {
  categories: Ihealthy[];
}





export interface IMealItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface IMealResponse {
  meals: IMealItem[];
}