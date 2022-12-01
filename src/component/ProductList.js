import Product from "./Product"
import { useEffect, useState } from "react";

function ProductList(){
    const api_url = 'https://fakestoreapi.com/products';
    const [products,setProducts]= useState([])
    const [categories,setCategories] = useState([])
    const getProduct = ()=>{
        fetch(api_url)
        .then(res => res.json())
        .then(data=>setProducts(data));
    }
    const getCategories = ()=>{
        fetch(`${api_url}/categories`)
        .then(res => res.json())
        .then(data=>setCategories(data));
    }

    useEffect(()=>{      
        getProduct();
        // console.log(categories)
        getCategories();
        console.log(categories )

    },[])

    const getProductInCategory = (catName)=>{
        console.log(catName)
        fetch(`${api_url}/category/${catName}`)
        .then(res => res.json())
        .then(data=>setProducts(data));
        console.log(products)
    }
    // console.log(products)
    return(
        <>
            <h1 className="pt-5 text-center">Our Product</h1>
            <div className="container">
                <button className="btn btn-info" onClick={getProduct}>all</button>
                {   
                    categories.length?categories.map((cat)=>{
                        return(
                            <button key={cat} className="btn btn-info" onClick={()=>{getProductInCategory(cat)}}>{cat}</button>
                        )
                    }):null
                } 
                <div className="row">
                    {
                        products.length?products.map((ele)=>{
                            return(
                                <>
                                    <div className="col-md-4 col-lg-3" >
                                        <Product product={ele} showBtn={true} key={ele.id}/>
                                    </div>
                                </>
                            )
                        }):null
                    }
                    
                </div>
            </div>
        </>
    )
}
export default ProductList;