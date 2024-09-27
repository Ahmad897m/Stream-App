import './App.css';
import {BrowserRouter as Router , Route , Routes, Link} from 'react-router-dom'
import Header from './components/Header/Header';
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={HomePages} />
          <Route exact path='/singlePage/:id' Component={SinglePage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
