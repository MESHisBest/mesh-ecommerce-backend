const cors = require('cors')
const express = require('express')
const stripe = require('stripe')('sk_test_51IF7lSC1DE44tNVI9l6iJYaNb0qYrvId80Pt3GI5ujMLr6ovrdDCGfyf80u9YXDSdXTvPyeXeKAzPB2XzdLoZ8FH00yJEE38IY')
const { v4: uuidV4 } = require('uuid')
const app = express()

app.use(express.json())
app.use(cors())

// route

app.post('/payment', async (req, res) => {
  console.log('Request:', req.body)

  const { product, token } = req.body
  console.log('Product', product)
  console.log('Product Name', product.product.name)
  console.log('Product Price', product.product.price)
  const idempotencyKey = uuidV4()

  return stripe.customers.create({
    email: token.email,
    source: token.id
  })
    .then(customer => {
      stripe.charges.create({
        amount: product.product.price * 100,
        currency: 'USD',
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchase of ${product.product.name}`
      },
      {idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

module.exports = app
