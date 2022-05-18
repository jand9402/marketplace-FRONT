import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Landing from './comoponents/Landing/Landing';
import Home from './comoponents/Home/Home';
import Login from './comoponents/Login/Login';
import RegisterForm from './comoponents/RegisterForm/RegisterForm';
import DetailVisit from './comoponents/Detail/DetailVisit';

function App() {
  return (
    <BrowserRouter>
       <div>
         <Switch>
           <Route exact path= '/' component={Landing}/>
           <Route exact path= '/login' component={Login}/>
           <Route exact path= '/register' component={RegisterForm}/>
           <Route exact path= '/homeVisit' component={Home}/>
           <Route exact path='/detailVisit/:id' component={DetailVisit} />
           {/* <Route exact path='/detail/:id' component={Detail}/> 
           <Route path='/create_dog' component={Create}/>  */}
         </Switch>
       </div>
    </BrowserRouter>
  );
}

export default App;
