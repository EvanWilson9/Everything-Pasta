import './App.css';
import BlogFeaturedSection from './components/BlogFeaturedSection';
import Header from './components/Header';
import LandingRecipes from './components/LandingRecipes';
import RecipesFeatured from './components/RecipesFeatured';
import ContactSection from './components/ContactSection';
import SignUp from './components/SignUp';

function Page() {
  return (
      <div id="container">
        {/* <Header/>
        <LandingRecipes />
        <RecipesFeatured />
        <BlogFeaturedSection/>
        <ContactSection/> */}
        <SignUp/>
      </div>
  );
}
 
function App() {
  return (
    <>
      <Page/>
    </>
  );
}

export default App;