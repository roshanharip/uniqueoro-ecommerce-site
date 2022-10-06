import Home from "./router/home/home-component";
import Navigation from "./router/navigation/navigation-component";
import {Routes, Route} from 'react-router-dom';
import Signin from "./router/signin/signin-component";
import Shop from "./router/shop/shop.component";
const App = ()=>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/signin" element={<Signin />}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
