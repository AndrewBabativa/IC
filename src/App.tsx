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
      <div className="container-news-sgg">
        <div className="content-news-sgg ">
          <div className="main">
            <Main />
          </div>
          <div className="suggestions">
            <Sugerencias />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
