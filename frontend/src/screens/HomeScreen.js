import React,{useEffect} from 'react';
import { useSelector, useDispatch } from'react-redux';
import Product from "../components/Product.js";
import Loader from "../components/Loader.js";
import Paginate from "../components/Paginate.js";
import Message from '../components/Message.js';
import { Col, Row } from 'react-bootstrap';
import { listProducts } from '../actions/productActions.js';
import ProductCarousel from '../components/ProductCarousel.js';

const HomeScreen = ({match}) =>
{
  const keyword=match.params.keyword;

  const pageNumber=match.params.pageNumber||1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const {loading,error,products,page,pages}=productList;

  useEffect(() =>
  {
    dispatch(listProducts(keyword,pageNumber));
  },[dispatch,keyword,pageNumber]);

  return (
    <>
      {!keyword&&<ProductCarousel/>}
      <h1>Latest Products</h1>
      {loading?<Loader/>:error?<Message variant='danger'>{error}</Message>:(<><Row>
        {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
      </Row>
      <Paginate pages={pages} page={page} keyword={keyword?keyword:""}/>
      </>)}
      
    </>
  )
}

export default HomeScreen
