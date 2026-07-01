const fs = require("fs");
const { faker } = require("@faker-js/faker");

const db = JSON.parse(fs.readFileSync("database.json", "utf8"));

const categories = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Dessert",
  "Indian",
  "Italian",
  "Chinese",
  "Mexican",
  "Healthy",
  "Fast Food",
  "Street Food",
  "Drinks"
];

const difficulties = [
  "Easy",
  "Medium",
  "Hard"
];

const images = [
"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
"https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
"https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800"
];

const videos = [
"https://www.youtube.com/embed/1IszT_guI08",
"https://www.youtube.com/embed/m3M7A6cK0dQ",
"https://www.youtube.com/embed/B01oQm7e8jM",
"https://www.youtube.com/embed/9T-Zbxg9X_4",
"https://www.youtube.com/embed/Xx7sxWI9FNI"
];

for(let i=0;i<50;i++){

const id="recipe_"+Date.now()+i;

db.recipes[id]={

recipeId:id,

title:faker.commerce.productName(),

description:faker.lorem.sentences(2),

authorEmail:"foodshare@gmail.com",

authorName:"FoodShare Kitchen",

createdBy:"system",

createdAt:Date.now()+i,

updatedAt:Date.now()+i,

category:faker.helpers.arrayElement(categories),

difficulty:faker.helpers.arrayElement(difficulties),

cookingTime:faker.number.int({min:10,max:120}),

servings:faker.number.int({min:1,max:8}),

status:"published",

visibility:"public",

image:faker.helpers.arrayElement(images),

video:faker.helpers.arrayElement(videos),

ingredients:[
{
id:1,
name:"Salt",
quantity:"1 tsp"
},
{
id:2,
name:"Oil",
quantity:"2 tbsp"
},
{
id:3,
name:"Onion",
quantity:"1"
},
{
id:4,
name:"Tomato",
quantity:"2"
},
{
id:5,
name:"Garlic",
quantity:"4 cloves"
}
],

instructions:[
{
id:1,
text:"Prepare all ingredients."
},
{
id:2,
text:"Cook for 20 minutes."
},
{
id:3,
text:"Serve hot."
}
],

likes:{},

commentCount:0,

tags:[
"Food",
"Recipe",
"HomeMade"
]

};

}

fs.writeFileSync("database.json",JSON.stringify(db,null,2));

console.log("✅ 50 Recipes Generated");