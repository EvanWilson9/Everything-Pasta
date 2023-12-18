import React from "react";
import { Link } from 'react-router-dom';

function RecipesFeatured() {

  const SeeMore = () => {
    return (
      <div className="view-more">
        <Link className="recipes-link" to="/recipes">
          <div className="view-more-btn">Show More &#x2193;</div>
        </Link>
      </div>
    );
  }

  const Recipe = (props) => {
    return (
      <div className='featured-recipe-container'>
        <img className="featured-recipe-img" src={props.image} alt="" />
        <div className="featured-recipe-name">{props.name}</div>
      </div>
    );
  }

  const Individual = (props) => {
    return (
      <div className='individual-section'>
        <div className='row-name'>{props.name}</div>
        <div className='individual-section-info'>
          {props.children}
          <SeeMore />
        </div>
      </div>
    );
  }

  return (
    <div id="featured-section">
      <div className='section-name'>Pasta Recipes</div>
      <div className='featured-section-container'>
        <Individual name="Classic Italian">
          <Recipe
            image="/images/penne-alla-vodka.webp"
            name="Penne Alla Vodka"
          />
          <Recipe
            image="/images/fett.jpg"
            name="Fettuccine Alfredo"
          />
          <Recipe
            image="/images/one-pan.JPG"
            name="One-Pan Pasta"
          />
          <Recipe
            image="/images/cacio.jpg"
            name="Cacio e Pepe"
          />
          <Recipe
            image="/images/fagio.jpg"
            name="Pasta e Fagioli"
          />
        </Individual>

        <Individual name="Baked Pasta">
          <Recipe
            image="/images/chicken.jpg"
            name="Chicken Spaghetti"
          />
          <Recipe
            image="/images/gnocchi.jpg"
            name="Baked Gnocchi Alfredo"
          />
          <Recipe
            image="/images/ziti.jpg"
            name="Baked Ziti"
          />
          <Recipe
            image="/images/spinach.jpg"
            name="Spinach Caserole"
          />
          <Recipe
            image="/images/stuffed.webp"
            name="Stuffed Shells"
          />
        </Individual>

        <Individual name="Asian-Based Pasta">
          <Recipe
            image="/images/beef.jpg"
            name="Beef Noodle Stir Fry"
          />
          <Recipe
            image="/images/teriyaki.jpg"
            name="Teriyaki Chicken Noodles"
          />
          <Recipe
            image="/images/cheater.jpg"
            name="Cheater Pho"
          />
          <Recipe
            image="/images/sesame.webp"
            name="Sesame Soba Noodles"
          />
          <Recipe
            image="/images/broccoli.jpg"
            name=" Chicken & Broccoli Stir Fry"
          />
        </Individual>

        <Individual name="Seafood Pasta">
          <Recipe
            image="/images/seafood.webp"
            name="Seafood Linguine"
          />
          <Recipe
            image="/images/salmon.jpg"
            name="Salmon Noodle Casserole"
          />
          <Recipe
            image="/images/clams.jpg"
            name="Spicy Clams w/ Spaghetti"
          />
          <Recipe
            image="/images/tuna.jpg"
            name="New Tuna Casserole"
          />
          <Recipe
            image="/images/shrimp.webp"
            name="Shrimp Alfredo"
          />
        </Individual>
      </div>
    </div>
  );
}

export default RecipesFeatured;