import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  constructor(private slService: ShoppingListService){}

  onAddItem(form: NgForm){
    this.slService.addIngredient(new Ingredient(form.value.ingredientName, form.value.amount));
    form.reset();
  }

}
