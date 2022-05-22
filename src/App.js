import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './comoponents/Landing/Landing';
import Home from './comoponents/Home/Home';
import Login from './comoponents/Login/Login';
import RegisterForm from './comoponents/RegisterForm/RegisterForm';
import Detail from './comoponents/Detail/Detail';
import ProductForm from './comoponents/ProductForm/ProductForm';
import ShoppingCar from './comoponents/ShoppingCar/ShoppingCar';

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
