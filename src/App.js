import React from "react";
import PropTypes from "prop-types";

const FoodList = [
  {
    id: 1,
    name: "kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "kimchi2",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 3.5,
  },
  {
    id: 3,
    name: "kimbab",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 5.0,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture} alt={name} />
      <h3>rating: {rating}/5.0</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {FoodList.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
