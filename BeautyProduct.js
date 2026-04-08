import {Product } from './Inventory.js'

export class BeautyProduct extends Product{
  constructor(name, price, category, ingredients) {
    super(name, price, category);
    this.ingredients = ingredients;
  }
  showIngredients() {
    console.log("Состав для '${this.name}': ${this.ingredients.join (',')}");
  }
}