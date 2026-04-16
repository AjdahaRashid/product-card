import { Drink } from "./drink.js";
export class Coffee extends Drink {
  constructor(name,size,price,temperature,beansType,milkType) {
    super(name,size,price,temperature);
    this.beansType = beansType 
    this.milkType = milkType
  }
  getInfo() {
    return `${super.getInfo()}, Зерно: ${this.beansType}, Молоко: ${this.milkType}`;
  }
}