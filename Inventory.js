class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  logBasicInfo() {
    console.log('[${this.category}] ${this.name} - стоит ${this.price}');
  }
}


class BeautyProduct extends Product {
  constructor(name, price, category, ingredients) {
    super(name, price, category);
    this.ingredients = ingredients;
  }
  showIngredients() {
    console.log('Состав для "${this.name}": ${this.ingredients.join (',')}');
  }
}


const myMousse = new BeautyProduct(
  "Увлажняющий мусс",
  2750,
  "Очищения",
  ["Витамин С", "Алоэ", "Вода"]
);

myMousse.logBasicInfo();
myMousse.showIngredients();