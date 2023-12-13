import React from "react";
import ContactForm from "./ContactForm";

function Recipes(){
    return(
        <>
            <div className="blog-container">
                <div className='blog-section-title-wrapper'>
                    <div className='blog-section-title'>
                        Explore our pasta catalog!
                        </div>
                    </div>
                    <div className='posts-container'></div>
                </div>
                <ContactForm/>  
        </>  
    )
}

export default Recipes;