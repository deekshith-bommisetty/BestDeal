import react, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store.js';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/profileScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import OrderScreen from './screens/OrderScreen.js';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Container className='py-3'>
            <Route path='/order/:id' component={OrderScreen} />
            <Route exact path='/register' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route exact path='/shipping' component={ShippingScreen} />
            <Route exact path='/payment' component={PaymentScreen} />
            <Route exact path='/placeorder' component={PlaceOrderScreen} />
            <Route exact path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route exact path='/' component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
