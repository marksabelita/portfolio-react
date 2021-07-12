import './App.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import ReactGA from 'react-ga';
ReactGA.initialize('G-GE1NM132N3');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <div className="root">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
