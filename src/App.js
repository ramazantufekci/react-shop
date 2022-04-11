import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './component/Navbar';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div id="content">
			<Switch>
			  <Route path="/" exact component={Products}/>
			  <Route path="/product/:product_id" component={ProductDetail}/>
			  <Route path="/signin" component={Signin}/>
			  <Route path="/signup" component={Signup}/>
			  <Route path="/profile" component={Profile}/>			  
			</Switch>
		</div>
      </div>
    </Router>
  );
}

export default App;
