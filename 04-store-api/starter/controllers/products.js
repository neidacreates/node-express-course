const Product = require('../models/product')


const getAllProductsStatic = async (req,res) => {
  const products = await Product.find({price: { $gt: 30} })
  .sort('price')
  .select('name price')
  .limit(10)
  .skip(2)
  // const products = await Product.find({}).sort('-name price')
  // const search = 'a'
  // const products = await Product.find({
  // name: { $regex: search, $options: 'i'}, // i means case insensitive
  // })
  res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req,res) => {
  // instead of passing req.query directly, set up a query object
  const { featured, company, name, sort, fields, numericFilters } = req.query
  const queryObject = {}
  if (featured) {
    // ternary - if featured is true, set the featured property of the object to true, otherwise false
    queryObject.featured = featured === 'true'? true : false
  }
  if (company){
    queryObject.company = company
  }
  if (name) {
    queryObject.name= { $regex: name, $options: 'i'}
  }

  if (numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(regEx, (match)=>`-${operatorMap[match]}-`)
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = {[operator] : Number(value)}
      }
    })
  }
  console.log(queryObject) //to check what the query is
  let result = Product.find(queryObject)
  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList)
    // products = products.sort()
  }
  else {
    result = result.sort('createdAt')
  }
  // fields (select)
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList)
  }
  // limit and skip
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit)

  const products = await result
  res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}