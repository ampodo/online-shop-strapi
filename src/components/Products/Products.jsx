import "./Products.scss";
import Product from "./Product/Product";


const Products = () => {
    return (

       
          <div className="products-container">
            <div className="heading"> 
                Products on demand 
                  </div>
               <div className="products">
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
                   <Product />
            </div>
          </div>

    );
};

export default Products;
