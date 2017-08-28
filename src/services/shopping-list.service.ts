import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService{
  private ingredients: Ingredient[] = [];

  addIngredient(item: Ingredient){
    this.ingredients.push(item);
  }

  addIngredients(items: Ingredient[]){
    this.ingredients.push(...items);
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  removeIngredient(index: number){
    this.ingredients.splice(index, 1);
  }
}
