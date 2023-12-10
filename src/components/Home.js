import { useState } from 'react';
import BlogFeaturedSection from './BlogFeaturedSection';
import LandingRecipes from './LandingRecipes';
import RecipesFeatured from './RecipesFeatured';
import ContactSection from './ContactSection';
import {BottomHeader} from './BottomHeader';
import ContactForm from './ContactForm';

function Home() {
    
    return(
        <>
            <BottomHeader/>
            <LandingRecipes />
            <RecipesFeatured />
            <BlogFeaturedSection/>
            <ContactForm/>
        </>
    );
}

export default Home;