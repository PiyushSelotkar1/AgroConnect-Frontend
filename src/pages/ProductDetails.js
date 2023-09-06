import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([])

    useEffect(() => {
        if (params?.slug) getProduct()
    }, [params?.slug]);

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`)
            setProduct(data?.product);
            (similarProducts(data?.product._id, data?.product.category._id))
        } catch (error) {
            console.log(error);
        }
    }
    const similarProducts = async (pid, cid) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-products/${pid}/${cid}`)
            setRelatedProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout>
            <div className='row container'>
                <div className='col-md-6'>
                    <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`} class="card-img-top" alt="..." style={{ height: '400px', width: '300px' }} />
                </div>
                <div className='col-md-6'>
                    <div className='row container'>
                        <h1 className='text-center'>Product Details</h1>
                        <h6>Name: {product.name}</h6>
                        <h6>Description: {product.description}</h6>
                        <h6>Price: {product.price}</h6>
                        <h6>Category: {product?.category?.name}</h6>
                        <a href="#" class="btn btn-primary w-25 mt-3" >Add to Cart</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row container'>
                <h4>Similar Products</h4>
                {relatedProducts.length < 1 && <p className='text-area'>No Similar Products found</p>}
                <div className='d-flex flex-wrap'>
                    {relatedProducts?.map((p) => (
                        <div className="card m-2" style={{ width: "15rem" }}>
                            <img className="mt-2" src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} class="card-img-top" alt="..." style={{ height: '190px', width: '200px' }} />
                            <div class="card-body">
                                <h5 class="card-title">{p.name}</h5>
                                <p class="card-text">{p.description.substring(0, 30)}...</p>
                                <p class="card-text"> ${p.price}</p>
                                <a href="#" class="btn btn-primary ms-1">Add to Cart</a>
                                <a href="#" class="btn btn-secondary ms-1" onClick={(e) => navigate(`/product/${p.slug}`)}>Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default ProductDetails;
