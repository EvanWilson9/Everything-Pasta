import React from "react";
import ContactForm from "./ContactForm";

function Recipes() {

    const Dish = ()=>{
        return(
            <div className="dish">
                <img className="dish-img" src='/images/coming-soon.jpg'/>
                <div className="dish-name">Dish name</div>
                <div className="dish-desc">Dish description</div>
            </div>
        )
    }


    const searchBar = document.querySelector('.recipes-search');
    const clearSearchBtn = document.querySelector('.clear-search');

    const clearSearch = () => {
        searchBar.value = '';
    }

    const showClear = () => {
        if (searchBar.value !== '') {
            clearSearchBtn.style.display = 'block';
        }
    }

    const hideClear = () => {

        const timeoutAction = () => {
            clearSearchBtn.style.display = 'none';
        }

        setTimeout(timeoutAction, 100);
    }

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
                            onFocus={showClear}
                            onChange={showClear}
                            onBlur={hideClear}
                            type='text' placeholder="Search" className="recipes-search" />
                        <div className="clear-search" onClick={clearSearch}>X</div>
                    </div>
                </div>
                <section className="recipes-section">
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                    <Dish/>
                </section>
            </div>
            <ContactForm />
        </>
    )
}

export default Recipes;