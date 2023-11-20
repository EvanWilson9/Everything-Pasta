import BlogFeaturedSection from './BlogFeaturedSection';
import Header from './Header';
import LandingRecipes from './LandingRecipes';
import RecipesFeatured from './RecipesFeatured';
import ContactSection from './ContactSection';

function Home() {
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