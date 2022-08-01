import logo from './logo.svg';
import './App.scss';
import Home from './components/home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/Nav';
import Weather from './components/Weather/Weather';
import OTP from './components/OTP/OTP';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WeatherByLocation from './components/Weather/WeatherByLocation';
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          {/* <Home /> */}
          <div className="App">

            <header className="App-header content-left">
              <div style={{ textAlign: 'center' }}>
                <img src={logo} className="App-logo" alt="logo" />

              </div>
              <p>
                <h1>Hello world</h1>
              </p>
              <Home />
            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>

          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather" exact>
          <Weather />
        </Route>
        <Route path="/weather/detail/:woeid">
          <WeatherByLocation />
        </Route>

        <Route path="/about">
          <div>Thieu Quang Nghia</div>
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        {/* duong link ko dung */}
        <Route path="*">
          <div>404 NOT FOUND!</div>

        </Route>

      </Switch>



    </Router>
  );

}


export default App;
