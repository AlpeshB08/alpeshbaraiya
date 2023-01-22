import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Services from './components/Services';

function App() {
  return (
    <>
      <Header /> 
      <main className="main-page-wrapper">
        <Banner />
        <Services />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
    </>
  );
}

export default App;
