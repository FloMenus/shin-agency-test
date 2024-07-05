// DATA
const cardsData = [
  {
    title: "Australie",
    description:
      "L'australie, la  plus grande île du monde. Entre désert, forêt et  barrière de corail",
    stars: 4,
    color: "#402004",
  },
  {
    title: "Maldives",
    description: "Les Maldives et leurs trésors sous-marins",
    stars: 5,
    color: "#741305",
  },
  {
    title: "Tanzanie",
    description:
      "La Tanzanie, un safari exceptionnel au coeur de la vie sauvage et authentique",
    stars: 5,
    color: "#4E3204",
  },
  {
    title: "Thaïlande",
    description: "La Thaïlande, entre Soleil, eau chaude et vues imprenable",
    stars: 4,
    color: "#368E8C",
  },
];

// CARD COMPONENT
const Card = ({ title, description, stars }) => {
  return `
    <div class="card">
    <div class="card_img_container">
    <img class="card_img" src="assets/cards/${title.toLowerCase()}.png" alt="${title}">
    </div>
    <div class="card_infos">
            <div class="card_title">
                <img class="location_icon" src="assets/icons/location.png" alt="location_icon">
                <h3>${title}</h3>
            </div>
            <p class="card_description">${description}</p>
            <div class="card_stars">
                ${Array.from(
                  { length: stars },
                  (star) =>
                    `<img class="star_img" src="assets/star.png" alt="star">`
                ).join("")}
               ${Array.from(
                 { length: 5 - stars },
                 (star) =>
                   `<img class="star_img star_empty" src="assets/star.png" alt="star_empty">`
               ).join("")}
    `;
};

// CARD RENDERER
const cardsParent = document.getElementById("cards_container");
cardsData.map((card) => (cardsParent.innerHTML += Card(card)));
