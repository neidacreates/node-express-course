require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

// connect to database and use the model to automatically add the products in the file to the database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log("success")
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()