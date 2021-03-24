import Home from './components/pages/home';
import About from './components/pages/about';
import Experience from './components/pages/experience';
import Works from './components/pages/works';
import Contact from './components/pages/contact';


const Body = () => {
    return (
        <main>
            <Home/>
            <About/>
            <Experience/>
            <Works/>
            <Contact/>
        </main>
    );
}
  
export default Body;
  