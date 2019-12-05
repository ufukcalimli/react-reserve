import mongoose, { modelNames } from 'mongoose';
import shortId from 'shortid';

const { String, Number } = mongoose.Schema.Types;

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    default: shortId.generate(),
  },
  mediaUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
