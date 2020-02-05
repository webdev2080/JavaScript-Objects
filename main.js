const menu = {
  _courses: {
     appetizers: [],
     mains: [],
     desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  
  set appetizers(appetizerIn){
    this._courses.appetizers = appetizerIn;
  },
  
  get courses(){
    return _courses;
  },
  
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice 
    }
    return this._courses[courseName].push(dish); 
  },
  
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
  }  
}

menu.addDishToCourse('appetizers','Egg rolls',10.00);
menu.addDishToCourse('appetizers','Salad',11.00);
menu.addDishToCourse('appetizers','Pretzels',9.00);

menu.addDishToCourse('mains','Steak',22.00);
menu.addDishToCourse('mains','Shrimp',31.00);
menu.addDishToCourse('mains','Soup',6.00);

menu.addDishToCourse('desserts','Ice Cream',6.00);
menu.addDishToCourse('desserts','Churro',4.00);
menu.addDishToCourse('desserts','Cake',8.00);

const meal = menu.generateRandomMeal();
console.log(meal);



