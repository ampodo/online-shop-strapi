import "./Product.scss";
import {useNavigate} from "react-router-dom";


const Product = ({data, id}) => {

    const navigate = useNavigate();

    const cloudinaryUrl = "https://res.cloudinary.com/devqsoqp4/image/upload/";
 
    


    return ( 
           <div className="product-card"  onClick={() => navigate("/product/"+id)} >
            <div className="thumbnail">
            <img
              src={
                cloudinaryUrl + data.img.data[0].attributes.url.replace("https://res.cloudinary.com/devqsoqp4/image/upload/", "")}
              alt=""
            />
            </div>
            <div className="prod-details">
                    <span className="name">{data.title}</span>
                    <span className="name">&#8364;{data.price}</span>
            </div>
    </div>

    );
};

export default Product;

