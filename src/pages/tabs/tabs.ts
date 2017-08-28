import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecipesPage } from '../recipes/recipes';
import { ShoppingListPage } from '../shopping-list/shopping-list';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  slPage = ShoppingListPage;
  recipesPage = RecipesPage;
}
