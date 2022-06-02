import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./comoponents/Home/Home";
import Login from "./comoponents/Login/Login";
import RegisterForm from "./comoponents/RegisterForm/RegisterForm";
import Detail from "./comoponents/Detail/Detail";
import ShoppingCar from "./comoponents/ShoppingCar/ShoppingCar";
import Sesion from "./comoponents/Admin/sesion";
import SesionProductAdmin from "./comoponents/Admin/sesionProductAdmin";
import SesionVentasAdmin from "./comoponents/Admin/sesionVentasAdmin";
import DetailProductAdmin from "./comoponents/Admin/detailProductAdmin/detailProductAdmin";
// import ProductForm from "./comoponents/ProductForm/ProductForm";
import MiSesion from "./comoponents/RegisteredUser/MiSesion";
import DetailUsers from "./comoponents/Admin/detailUsers";
import FormCheckOut from "./comoponents/FormCheckOut/FormCheckOut";
import BuysUser from "./comoponents/Admin/buysUser";
import CreateProduct from "./comoponents/ProductForm/createProduct";
import PostOrder from "./comoponents/Order/CreateOrder";
import OrderList from "./comoponents/Order/OrderList";
import Success from "./comoponents/Order/Success";
import EditProduct from "./comoponents/ProductForm/editProduct";

// import CreateReviews from "./comoponents/reviews/Wishlist";
import Wishlist from "./comoponents/wishlist/Wishlist";

import OrderDetail from "./comoponents/Admin/orderDetail";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route exact path= '/' component={Landing}/> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/detailVisit/:id" component={Detail} />
          {/* <Route exact path="/productForm" component={ProductForm} /> */}
          <Route exact path="/shoppingCar" component={ShoppingCar} />
          <Route exact path="/admin" component={Sesion} />
          {/* <Route exact path="/registerForm" component={ProductForm} /> */}
          <Route exact path="/admin/products" component={SesionProductAdmin} />
          <Route exact path="/admin/products/detail/:id" component={DetailProductAdmin}/>
          <Route exact path="/user/wishlist" component={Wishlist} />
          <Route
            exact
            path="/admin/products/detail/:id"
            component={DetailProductAdmin}
          />
          <Route exact path="/admin/ventas" component={SesionVentasAdmin} />
          <Route exact path="/admin/users" component={DetailUsers} />
          <Route exact path="/admin/users/buys/:id" component={BuysUser} />
          <Route exact path="/miSesion" component={MiSesion} />
          <Route exact path="/CheckOut" component={FormCheckOut} />
          <Route exact path="/PostOrder" component={PostOrder} />
          <Route exact path="/OrderList" component={OrderList} />
          <Route exact path="/Success" component={Success} />
          <Route exact path= "/admin/products/edit/:id" component={EditProduct}/>
          <Route exact path="/orderDetail/:id" component={OrderDetail} />
          <Route exact path="/createProductPrueba" component={CreateProduct} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
