import Home from "./router/home/home-component";
import Navigation from "./router/navigation/navigation-component";
import {Routes, Route} from 'react-router-dom';
import Authentication from "./router/authentication/authentication-component";
import Shop from "./router/shop/shop.component";
import Contact from "./router/contact/contact-component";
const App = ()=>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signin" element={<Authentication />}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
