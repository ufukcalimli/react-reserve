## React Reserve Guide

#### In order to run project
`npm run dev`

## Project Structure 
* Components\
  Contains the components of each pages and the layout
  * Account
      * AccountHeader
      * AccountOrders
      * AccountPermission
  * Cart
    * CartItemList
    * CartSummary
  * Index
    * ProductList
    * ProductPagination
  * Product
    * AddProductToCart
    * ProductAttributes
    * ProductSummary
  * _App
    * HeadContent
    * Header
    * Layout
* models\
  Contains the models for MongoDb
* pages\
  Contains the pages
  * api\
  Contains the api routes for each page
* static\
  Contains static files
* utils\
  Contains the utility files that auth, baseUrl, calculateCartTotal, catchErrors, connectDb and formatDate.
