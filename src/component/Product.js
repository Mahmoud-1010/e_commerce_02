// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Product (props){
    // console.log(props);
    const {product,showBtn}= props;
    return(
        <>
        <div className="card" >
            <img src={product.image} className="card-img-top" alt={product.description}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price} $</p>
                {showBtn&&<Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>}
            </div>
        </div>
        </>
    );
}
export default Product;