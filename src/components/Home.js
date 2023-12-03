import { useState } from 'react';
import BlogFeaturedSection from './BlogFeaturedSection';
import Header from './Header';
import LandingRecipes from './LandingRecipes';
import RecipesFeatured from './RecipesFeatured';
import ContactSection from './ContactSection';
import SignUp, { TopHeader } from './SignUp';
import {BottomHeader} from './Header'
import { UserContext } from './UserContext';
import Blog from './Blog';

function Home() {

    const [user, setUser] = useState(null);

    return(
        <>
            <Header/>
            <LandingRecipes />
            <RecipesFeatured />
            <BlogFeaturedSection/>
            <ContactSection/>
        </>
    );
}

export default Home;