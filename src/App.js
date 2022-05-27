import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Landing from './comoponents/Landing/Landing';
import Home from './comoponents/Home/Home';
import Login from './comoponents/Login/Login';
import RegisterForm from './comoponents/RegisterForm/RegisterForm';
import Detail from './comoponents/Detail/Detail';
import ProductForm from './comoponents/ProductForm/ProductForm';
import ShoppingCar from './comoponents/ShoppingCar/ShoppingCar';
import Sesion from './comoponents/Admin/sesion'
import SesionProductAdmin from './comoponents/Admin/sesionProductAdmin';
import SesionVentasAdmin from './comoponents/Admin/sesionVentasAdmin';
import DetailProductAdmin from './comoponents/Admin/detailProductAdmin/detailProductAdmin';

function App() {
  return (
    <BrowserRouter>
       <div>
         <Switch>
           {/* <Route exact path= '/' component={Landing}/> */}
           <Route exact path= '/' component={Home}/>
           <Route exact path= '/login' component={Login}/>
           <Route exact path= '/register' component={RegisterForm}/>
           <Route exact path='/detailVisit/:id' component={Detail} />
           <Route exact path='/productForm' component={ProductForm} />
           <Route exact path='/shoppingCar' component={ShoppingCar} />
           <Route exact path='/admin' component={Sesion}/>
           <Route exact path='/admin/products' component={SesionProductAdmin}/>
           <Route exact path='/admin/ventas' component={SesionVentasAdmin}/>
           <Route exact path='/admin/products/detail/:id' component={DetailProductAdmin}/>
         </Switch>
       </div>
    </BrowserRouter>
  );
}

export default App;
