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
          image="https://i2.wp.com/www.deathbygluttony.com/wp-content/uploads/2021/06/penne-alla-vodka-1-scaled.jpg?resize=1305%2C1536"
          name="Penne Alla Vodka"
        />
        <RecipeLanding
          image="https://dinnerthendessert.com/wp-content/uploads/2019/06/Baked-Spaghetti-4.jpg"
          name="Baked Spaghetti"
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