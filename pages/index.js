import React, { useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import ProductPagination from '../components/Index/ProductPagination';
import baseUrl from '../utils/baseUrl';

function Home({ products, totalPages }) {
  return (
    <>
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </>
  );
}

Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : '1';
  const size = 9;
  // Fetch data on server
  const url = `${baseUrl}/api/products`;
  const payload = {
    params: { page, size },
  };
  // Return response data as an object
  const response = await axios.get(url, payload);
  // Note: This object will be merged with existing props
  return response.data;
};

export default Home;
