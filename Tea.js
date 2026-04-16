import { Drink } from "./drink.js";
export class Tea extends Drink {
  constructor(name,size,price,temperature,teaType) {
    super(name,size,price,temperature);
    this.teaType = teaType
  }
  getInfo() {
    return `${super.getInfo()}, Сорт:${this.teaType}`;
  }
}