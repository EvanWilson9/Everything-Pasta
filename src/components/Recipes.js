import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

function Recipes() {

  const dishes = [
    {
        name: 'Penne Alla Vodka', 
        img:'/images/penne-alla-vodka.webp',
    },
    {
        name: 'Fettiuni Alfredo', 
        img:'/images/fett.jpg',
    },
    {
        name: 'Chicken Spagetti', 
        img:'/images/chicken.jpg'
    },
    {
        name: 'Salmon Noodle Casserole', 
        img:'/images/salmon.jpg'
    },
    {
        name: 'Baked Ziti', 
        img:'/images/ziti.jpg'
    },
    {
        name: 'Cheater Pho', 
        img:'/images/cheater.jpg'
    },
    {
        name: 'Teriyaki Chicken Noodles', 
        img:'/images/teriyaki.jpg'
    },
    {
        name: 'Shrimp Alfredo', 
        img:'/images/shrimp.webp'
    }
  ];

  const Dish = (props)=>{
    return(
      <div className="dish">
        <img className="dish-img" src={props.img}/>
        <div className="dish-name">{props.name}</div>
      </div>
    )
  }

  const [searchInput, setSearchInput] = useState('');
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [isResult, setIsResult] = useState(true);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  }

  const filterDishes = () => {
    const filtered = dishes.filter((dish) => {
      return dish.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredDishes(filtered);
  }

  useEffect(() => {
    filterDishes();
  }, [searchInput]);

  return (
    <>
      <div className="blog-container">
        <div className='blog-section-title-wrapper'>
          <div className='blog-section-title'>
            Explore our pasta catalog!
          </div>
        </div >
        <div className="search-section">
          <div className="search-container">
            <input
              onChange={handleSearchInput}
              type='text' placeholder="Search" className="recipes-search" />
          </div>
        </div>
        <section className="recipes-section">
            {filteredDishes.length > 0 ? (
            filteredDishes.map((dish) => {
            return <Dish name={dish.name} img={dish.img} desc={dish.desc} />;
            })) : (<p className="no-result">No result found</p>)}
        </section>
      </div>
      <ContactForm />
    </>
  )
}

export default Recipes;
