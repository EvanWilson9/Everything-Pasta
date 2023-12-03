import { useState } from 'react';
import BlogFeaturedSection from './BlogFeaturedSection';
import LandingRecipes from './LandingRecipes';
import RecipesFeatured from './RecipesFeatured';
import ContactSection from './ContactSection';
import {BottomHeader} from './BottomHeader'

function Home() {
    
    return(
        <>
            <BottomHeader/>
            <LandingRecipes />
            <RecipesFeatured />
            <BlogFeaturedSection/>
            <ContactSection/>
        </>
    );
}

export default Home;