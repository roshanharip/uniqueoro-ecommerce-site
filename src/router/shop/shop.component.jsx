import { useContext} from "react";
import { ProductsContext } from "../../context/product-context";
import ProductCard from "../../components/product-card/product-card-component";
import './shop.component.scss';
const Shop = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div className="Shop">
      {
        products.map((product,index)=>(
          <ProductCard key={index} product={product} />
        ))
      }
    </div>
  );
};
export default Shop;