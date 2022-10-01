const randomFoods = {
  latinFood: [
    {
      food: "Hallaca",
      foodImage: "https://www.goya.com/media/7874/hallacas.jpg"
    },
    {
      food: "Burrito",
      foodImage: "https://www.elespectador.com/resizer/DHbDF-_juEZM5Vkio_g57r_9joE=/920x613/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/XMYGZUMNHZDV5LV3GEI2JP3G3U.jpg"
    },
    {
      food: "Guacamole",
      foodImage: "https://deliciaskitchen.com/wp-content/uploads/2021/09/como-hacer-guacamole-casero-receta-trucos-consejos.jpg"
    },
    {
      food: "Pabellon",
      foodImage: "https://comidasvenezolanas.net/wp-content/uploads/2019/04/Pabellon-criollo-1.jpg"
    }
  ],

  americanFood: [
    {
      food: "Burger",
      foodImage: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/epic-burger-cheeseburger.jpg"
    },
    {
      food: "Fried Chicken",
      foodImage: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg"
    },
    {
      food: "Hot Dog",
      foodImage: "https://potatorolls.com/wp-content/uploads/2020/10/Basic-Hot-Dogs-960x640.jpg"
    },
    {
      food: "Pancakes",
      foodImage: "https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg"
    }
  ],
  asianFood: [
    {
      food: "Sushi",
      foodImage: "https://s1.eestatic.com/2015/05/11/cocinillas/cocinillas_32506750_116175093_1706x960.jpg"
    },
    {
      food: "Kimchi",
      foodImage: "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg"
    },
    {
      food: "Dim Sum",
      foodImage: "https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/shrimp-dim-sum-590648.jpg"
    },
    {
      food: "Biryani",
      foodImage: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-biryani_H.JPG.rend.hgtvcom.616.462.suffix/1568143107638.jpeg"
    }
  ],

  displayLatinFood() {
    const random = Math.floor(Math.random() * 4);


    const randomF = randomFoods.latinFood[random].food;      

    const randomImg = randomFoods.latinFood[random].foodImage;
    const foodP = document.querySelector("#food-name");
    const foodImg = document.querySelector("#food-image");
    foodImg.setAttribute('src',`${randomImg}`);
    foodImg.setAttribute('alt', randomF);
    foodP.innerHTML = randomF;
  },

  displayAmericanFood() {
    const random = Math.floor(Math.random() * 4);


    const randomF = randomFoods.americanFood[random].food;      

    const randomImg = randomFoods.americanFood[random].foodImage;
    const foodP = document.querySelector("#food-name");
    const foodImg = document.querySelector("#food-image");
    foodImg.setAttribute('src',`${randomImg}`);
    foodImg.setAttribute('alt', randomF);
    foodP.innerHTML = randomF;
  },

  displayAsianFood() {
    const random = Math.floor(Math.random() * 4);


    const randomF = randomFoods.asianFood[random].food;      

    const randomImg = randomFoods.asianFood[random].foodImage;
    const foodP = document.querySelector("#food-name");
    const foodImg = document.querySelector("#food-image");
    foodImg.setAttribute('src',`${randomImg}`);
    foodImg.setAttribute('alt', randomF);
    foodP.innerHTML = randomF;
  },

}


const buttonL = document.getElementById('latin');
// button.addEventListener("click", (e) => {e.stopPropagation();randomFoods.displayFoods()});
buttonL.addEventListener("click", (e) => {e.stopPropagation();randomFoods.displayLatinFood()});

const americanButton = document.getElementById('american');
americanButton.addEventListener("click", (e) => {e.stopPropagation();randomFoods.displayAmericanFood()});

const asianButton = document.getElementById('asian');
asianButton.addEventListener("click", (e) => {e.stopPropagation();randomFoods.displayAsianFood()})


// console.log(randomLatinF);