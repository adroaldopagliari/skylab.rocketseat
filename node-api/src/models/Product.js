const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  }
})

mongoose.plugin(paginate);
mongoose.model('Product', productSchema);