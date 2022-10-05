import './App.css';
import Header from './components/Header/header';
import Collage from './components/Collage/collage'
import Instagram from './components/Instagram/instagram';
import NewsLetter from './components/NewsLetter/newsletter';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Collage></Collage>
      <Instagram></Instagram>
      <NewsLetter></NewsLetter>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
