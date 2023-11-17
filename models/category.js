const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
  name: { type: String, required: true},
  sortOrder: { type: Number, required: true },
  subcategories: [{ type: String, required: true }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema)