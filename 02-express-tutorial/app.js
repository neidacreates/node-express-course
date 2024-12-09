const { products } = require("./data");

// The require statement to import the express module
const express = require('express');

// Creation of the app as returned from calling express()
const app = express();

// app.use statements for the middleware. You’ll eventually use many kinds of middleware, but for now the only middleware we are using is express.static()
app.use(express.static("./public"));

// app.get and app.post statements for the routes you will handle. Eventually these will be refactored into router modules, but for now you can put them inline
app.get('/api/v1/test', (req, res)=>{
  res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res)=>{
  res.json({ products: products });
});

app.get('/api/v1/products/:productID', (req, res)=>{
  // res.json({ params: req.params})
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p)=> p.id === idToFind);
  if(product){
    res.json({ product: product });
  }
  else {
    res.json({ message: "That product was not found."});
  }
});

app.get('/api/v1/query', (req, res)=> {
  // res.json({ query: req.query})
  const { search, limit, price } = req.query;

  let orderedProducts = [...products]

    if (search) {
      orderedProducts = orderedProducts.filter((product) => {
        return product.name.startsWith(search)
      });
    };

    if (limit) {
      orderedProducts = orderedProducts.slice(0, Number(limit))
    };

    if (price) {
      orderedProducts = orderedProducts.filter((product) => { return product.price < price
      })
    };

    if (orderedProducts.length < 1) {
      return res.status(200).json({ sucess: true, data: [] })
    }

    res.status(200).json(orderedProducts);
})

// An app.all statement after these to handle page not found conditions
app.all('*', (req, res)=> {
  res.status(404).send('Resource not found');
});

// An app.listen statement to tell the server to listen for requests on a particular port
app.listen(3000, ()=> {
  console.log('server is listening on port 3000...');
});
