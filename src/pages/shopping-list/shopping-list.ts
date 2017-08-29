import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  itemsList: Ingredient[];

  constructor(private slService: ShoppingListService){}

  ionViewWillEnter(){
    this.loadItems();
  }

  onAddItem(form: NgForm){
    this.slService.addIngredient(new Ingredient(form.value.ingredientName, form.value.amount));
    form.reset();
    this.loadItems();
  }

  private loadItems(){
    this.itemsList = this.slService.getIngredients();
  }

  deleteEntry(index: number){
    this.slService.removeIngredient(index);
    this.loadItems();
  }
}
