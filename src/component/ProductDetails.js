import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails(){
    const apiUrl = 'https://fakestoreapi.com/products';
    
    const params = useParams();
    console.log(params);
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch(`${apiUrl}/${params.productId}`).then((res)=>res.json()).then((product)=>setProduct(product))
    },[])
    return(
        <>
        <Product product={product} showBtn={false}/>
        </>
    )
}
export default ProductDetails;