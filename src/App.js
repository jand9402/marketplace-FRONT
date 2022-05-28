import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Detail from './components/Detail/Detail';
import ProductForm from './components/ProductForm/ProductForm';
import ShoppingCar from './components/ShoppingCar/ShoppingCar';

function App() {
  return (
    <BrowserRouter>
       <div>
         <Switch>
           <Route exact path= '/' component={Landing}/>
           <Route exact path= '/login' component={Login}/>
           <Route exact path= '/register' component={RegisterForm}/>
           <Route exact path= '/home' component={Home}/>
           <Route exact path='/detailVisit/:id' component={Detail} />
           <Route exact path='/productForm' component={ProductForm} />
           <Route exact path='/shoppingCar' component={ShoppingCar} />
           
         </Switch>
       </div>
    </BrowserRouter>
  );
}

export default App;
