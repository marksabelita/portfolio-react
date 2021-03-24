import './App.css';
import Header from './header';
import Footer from './footer';
import Body from './body';

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
