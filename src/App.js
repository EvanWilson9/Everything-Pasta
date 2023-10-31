import './App.css';
import BlogFeaturedSection from './components/BlogFeaturedSection';
import Header from './components/Header';
import LandingRecipes from './components/LandingRecipes';
import RecipesFeatured from './components/RecipesFeatured';
import ContactSection from './components/ContactSection';

function Page() {
  return (
      <div id="container">
        <Header/>
        <LandingRecipes />
        <RecipesFeatured />
        <BlogFeaturedSection/>
        <ContactSection/>
      </div>
  );
}

function App() {
  return (
    <>
      <Page />
    </>
  );
}

export default App;