import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { RecipePage } from '../pages/recipe/recipe';
import { RecipesPage } from '../pages/recipes/recipes';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { ShoppingListService } from '../services/shopping-list.service';
import {RecipesService} from "../services/recipes.service";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipePage,
    RecipesPage,
    EditRecipePage,
    ShoppingListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipePage,
    RecipesPage,
    EditRecipePage,
    ShoppingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService
  ]
})
export class AppModule {}
