import React, { useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import baseUrl from '../utils/baseUrl';

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // Fetch data on server
  // Return response data as an object
  // Note: This object will be merged with existing props

  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return { products: response.data };
};

export default Home;
