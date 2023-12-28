import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Sugerencias from './components/Sugerencias/Sugerencias';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Aside />
      <div className='row'>
        <div className='offset-md-1 col-md-5'>
          <Main />
        </div>
        <div className='offset-md-1 col-md-5'>
          <Sugerencias />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
