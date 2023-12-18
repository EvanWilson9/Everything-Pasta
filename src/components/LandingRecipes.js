import React from "react";

function RecipeLanding(props) {
  return (
    <div className='recipe-container'>
      <img src={props.image} alt="" className='recipe-img' />
      <div className='recipe-title'>{props.name}</div>
    </div>
  );
}

function LandingRecipes() {
  return (
    <div class="landing-page-section">
      <div className='landing-title'>Pastas of the Week</div>
      <div className='recipe-landing-section'>
        <RecipeLanding
          image="/images/penne-alla-vodka.webp"
          name="Penne Alla Vodka"
        />
        <RecipeLanding
          image="/images/baked-spagetti.jpg"
          name="Penne Alla Vodka"
        />
        <RecipeLanding
          image="/images/Skull Creek Boathouse.jpg"
          name="Pasta Primavera"
        />
      </div>
    </div>
  );
}

export default LandingRecipes;