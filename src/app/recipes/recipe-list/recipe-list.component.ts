import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A Test Recipe','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Crispy Potato','Cheese Potato with garlic coated','assets/images/Potato.jpg'),
    new Recipe('Nachos with tomato coated','Cripsy Corn Nachoses','assets/images/Nachos.jpg'),
    new Recipe('Wild Oats','Oats with unique collection of vegitable','assets/images/Oats.jpg')
  ];
  @Output() recipeWasSelected =new EventEmitter<Recipe>();

  constructor() { }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
