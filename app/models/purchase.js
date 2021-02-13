const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  picture_url: {
    type: String,
    required: false
  },
  review: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Purchase', purchaseSchema)
