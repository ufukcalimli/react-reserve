const baseUrl =
  process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'https://ikea.now.sh';

export default baseUrl;
