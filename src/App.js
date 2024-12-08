import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import MainPage from './components/main-page/MainPage';
import ErrorPage from './components/error-page/ErrorPage';
import Converter from './components/converter/Converter';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/converter" component={Converter} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
