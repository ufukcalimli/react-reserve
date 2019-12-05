import React, { useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // Fetch data on server
  // Return response data as an object
  // Note: This object will be merged with existing props

  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;
