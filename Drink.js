export class Drink {
  #temperature;
  constructor(name, size, price,temperature) {
     if (this.constructor === Drink) {
      throw new Error;
     }
     this.name = name;
     this.size = size;
     this.price = price;
     this.#temperature = temperature;
  }
  getInfo() {
  return `Напиток:${this.name},
  Размер:${this.size}, Цена:${this.price}`;}
  #prepare() {
    console.log(`[Процесс] Робот готовить ${this.name}`);
  }
  serve() {
    this.#prepare();
    console.log(`[Готово] Ваш ${this.name} подан!`);
  }
}