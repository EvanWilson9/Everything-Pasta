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
            image="https://i2.wp.com/www.deathbygluttony.com/wp-content/uploads/2021/06/penne-alla-vodka-1-scaled.jpg?resize=1305%2C1536"
            name="Penne Alla Vodka"
          />
          <Recipe
            image="https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg"
            name="Fettuccine Alfredo"
          />
          <Recipe
            image="https://1.bp.blogspot.com/-ZwWv6UkxYhw/Xx7CHvqM6JI/AAAAAAAC-4g/mk28rNMv6NkSiPhJ_aYPcOG7qVWJujufQCLcBGAsYHQ/s1600/cover%2Bpasta.JPG"
            name="One-Pan Pasta"
          />
          <Recipe
            image="https://worldcuisinehr.com/wp-content/uploads/2020/08/cacio-e-pepe02-1.jpg"
            name="Cacio e Pepe"
          />
          <Recipe
            image="https://i.pinimg.com/originals/78/b6/14/78b6149f26d564454114a1f6046068a3.jpg"
            name="Pasta e Fagioli"
          />
        </Individual>

        <Individual name="Cold Pasta">
          <Recipe
            image="https://sweetandsavorymeals.com/wp-content/uploads/2019/04/Spaghetti-Salad-1.jpg"
            name="Spaghetti Salad"
          />
          <Recipe
            image="https://www.veganricha.com/wp-content/uploads/2018/08/cold-soba-noodle-salad-bowl-vegan-veganricha-1958.jpg"
            name="Cold Soba Noodle Salad"
          />
          <Recipe
            image="https://life-in-the-lofthouse.com/wp-content/uploads/2015/05/Bacon_Ranch_Pasta_Salad.jpg"
            name="Bacon-Ranch Pasta Salad"
          />
          <Recipe
            image="https://greensnchocolate.com/wp-content/uploads/2020/04/Thai-Peanut-Pasta-Salad-683x1024.jpg"
            name="Spicy Peanut Pasta Salad"
          />
          <Recipe
            image="https://4sonrus.com/wp-content/uploads/2019/07/Dill-Pickle-Pasta-Salad-3.jpg"
            name="Dill Pickle Pasta Salad"
          />
        </Individual>

        <Individual name="Baked Pasta">
          <Recipe
            image="https://zenandspice.com/wp-content/uploads/2019/07/chicken-spaghetti-3-640x960.jpg"
            name="Chicken Spaghetti"
          />
          <Recipe
            image="https://www.loulougirls.com/wp-content/uploads/2021/10/IMG-8484-1-1632x2048.jpg"
            name="Baked Gnocchi Alfredo"
          />
          <Recipe
            image="https://valentinascorner.com/wp-content/uploads/2021/04/Baked-Ziti-2.jpg"
            name="Baked Ziti"
          />
          <Recipe
            image="https://i.pinimg.com/originals/b4/7a/91/b47a91a06f7129b70c6df5cb4c92a234.jpg"
            name="Spinach Caserole"
          />
          <Recipe
            image="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2016/02/d4210409dc074971ce4feac2fcc8b65f370cc5d8.jpeg"
            name="Stuffed Shells"
          />
        </Individual>

        <Individual name="Asian-Based Pasta">
          <Recipe
            image="https://th.bing.com/th/id/OIP.8bAYT3wZ0cQ2VRg6zzxYzgHaHa?pid=ImgDet&rs=1"
            name="Beef Noodle Stir Fry"
          />
          <Recipe
            image="https://teenyrecipes.com/wp-content/uploads/2018/02/teriyaki-chicken-noodles.jpg"
            name="Teriyaki Chicken Noodles"
          />
          <Recipe
            image="https://theschmidtywife.com/wp-content/uploads/2017/11/crockpot-cheater-beef-pho-4.jpg"
            name="Cheater Pho"
          />
          <Recipe
            image="https://simpleveganblog.com/wp-content/uploads/2020/04/sesame-soba-noodles-2.jpg"
            name="Sesame Soba Noodles"
          />
          <Recipe
            image="https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/chicken-broccoli-stir-fry-5.jpg"
            name=" Chicken & Broccoli Stir Fry"
          />
        </Individual>

        <Individual name="Seafood Pasta">
          <Recipe
            image="https://www.carriesexperimentalkitchen.com/wp-content/uploads/2022/05/Seafood.-Linguine4.jpeg"
            name="Seafood Linguine"
          />
          <Recipe
            image="https://th.bing.com/th/id/OIP.S6twzheKc2pfq1Rhc2gidgHaLH?pid=ImgDet&rs=1"
            name="Salmon Noodle Casserole"
          />
          <Recipe
            image="https://i.pinimg.com/736x/a9/42/3a/a9423a8d8e591a106f91c85b273c18b7.jpg"
            name="Spicy Clams w/ Spaghetti"
          />
          <Recipe
            image="https://gardeninthekitchen.com/wp-content/uploads/2018/04/tuna-casserole4-768x1152.jpg"
            name="New Tuna Casserole"
          />
          <Recipe
            image="https://www.dinneratthezoo.com/wp-content/uploads/2018/06/shrimp-alfredo-5.jpg"
            name="Shrimp Alfredo"
          />
        </Individual>
      </div>
    </div>
  );
}

export default RecipesFeatured;