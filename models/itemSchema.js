const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  by: { type: String, required: true },
  images: [{ type: String, required: true }],
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  info: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = itemSchema;