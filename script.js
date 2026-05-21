const foodOptions = [
  {
    name: "🍣 Japonês",
    restaurants: [
      {
        name: "Mix Sushi - Ibaté",
        desc: "Uma noite japonesa elegante e deliciosa."
      },
      {
        name: "Sushi Ya - São Carlos",
        desc: "Sofisticação oriental em clima romântico."
      },
      {
        name: "Koni Store - São Carlos",
        desc: "Leve, moderno e perfeito para compartilhar."
      }
    ]
  },

  {
    name: "🍔 Hambúrguer Gourmet",
    restaurants: [
      {
        name: "J20 Hamburgueria - Ibaté",
        desc: "Hambúrguer artesanal digno de date premium."
      },
      {
        name: "Brutus Burger - São Carlos",
        desc: "Sabor intenso e clima descontraído."
      },
      {
        name: "Seu Bernô - São Carlos",
        desc: "Combinação perfeita entre gourmet e diversão."
      }
    ]
  },

  {
    name: "🌭 Cachorro Quente Gourmet",
    restaurants: [
      {
        name: "Weverton Lanches - Ibaté",
        desc: "O clássico favorito com clima especial."
      },
      {
        name: "Dog King - São Carlos",
        desc: "Hot dogs criativos e muito sabor."
      },
      {
        name: "Top Dog Gourmet - São Carlos",
        desc: "Casual, divertido e delicioso."
      }
    ]
  },

  {
    name: "🥩 Steakhouse",
    restaurants: [
      {
        name: "Outback Steakhouse - São Carlos",
        desc: "A experiência premium da noite."
      },
      {
        name: "Billy's BBQ - São Carlos",
        desc: "Carnes incríveis e clima intimista."
      },
      {
        name: "Barone Grill - São Carlos",
        desc: "Elegância e sabor em cada detalhe."
      }
    ]
  },

  {
    name: "🍝 Italiano",
    restaurants: [
      {
        name: "Nonna Pina - São Carlos",
        desc: "Massas artesanais e clima apaixonante."
      },
      {
        name: "Ital'in House - São Carlos",
        desc: "Um jantar digno de filme romântico."
      },
      {
        name: "Cantina Fellini - São Carlos",
        desc: "Charmoso e perfeito para a ocasião."
      }
    ]
  }
];

const foodGrid = document.getElementById("foodGrid");
const restaurantGrid = document.getElementById("restaurantGrid");
const restaurantTitle = document.getElementById("restaurantTitle");

const hero = document.querySelector(".hero");
const foodSection = document.querySelector(".food-section");
const restaurantSection = document.querySelector(".restaurant-section");
const finalSection = document.querySelector(".final-section");

const destination = document.getElementById("destination");

let selectedRestaurant = "";

document.getElementById("startBtn").addEventListener("click", () => {
  hero.classList.add("hidden");
  foodSection.classList.remove("hidden");
  createFoodCards();
});

function createFoodCards(){
  foodOptions.forEach((food, index) => {
    const card = createCard(index + 1, food.name, "Toque para revelar ✨");

    card.addEventListener("click", () => {
      card.classList.add("revealed");

      setTimeout(() => {
        foodSection.classList.add("hidden");
        restaurantSection.classList.remove("hidden");
        restaurantTitle.innerText = food.name;

        createRestaurantCards(food.restaurants);
      }, 1200);
    });

    foodGrid.appendChild(card);
  });
}

function createRestaurantCards(restaurants){
  restaurantGrid.innerHTML = "";

  restaurants.forEach((rest, index) => {
    const card = createCard(index + 1, rest.name, rest.desc);

    card.addEventListener("click", () => {
      card.classList.add("revealed");

      selectedRestaurant = rest.name;

      setTimeout(() => {
        restaurantSection.classList.add("hidden");
        finalSection.classList.remove("hidden");
      }, 1300);
    });

    restaurantGrid.appendChild(card);
  });
}

function createCard(number, title, desc){
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-front">
        Painel ${number}
      </div>

      <div class="card-face card-back">
        <div>
          <h3>${title}</h3>
          <p>${desc}</p>
        </div>
      </div>
    </div>
  `;

  return card;
}

document.getElementById("revealBtn").addEventListener("click", () => {
  destination.classList.remove("hidden");
  destination.innerHTML = `
    🌟 O destino da noite será:<br><br>
    <strong>${selectedRestaurant}</strong><br><br>
    ❤️
  `;
});

const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

toggle.addEventListener("click", async () => {
  if(music.paused){
    await music.play();
    toggle.innerText = "🔊";
  } else {
    music.pause();
    toggle.innerText = "🎵";
  }
});
