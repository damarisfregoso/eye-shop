require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Eyes', sortOrder: 10, subcategories: ['Mascaras', 'Eyeshadows', 'All']},
    {name: 'Lips', sortOrder: 20, subcategories: ['Stains', 'Glosses', 'All']},
    {name: 'Blushes', sortOrder: 30, subcategories: ['Liquid', 'Powder', 'Putty', 'All']},
    {name: 'Highlighters', sortOrder: 30, subcategories: ['Liquid', 'Powder', 'All']},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Tartelette Tubing Mascara', image: 'https://tartecosmetics.com/dw/image/v2/BJRL_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dw78a87099/2562/RECTANGLE_MAIN/2520-tartelette-tubing-mascara-MAIN2-0.jpg?sw=2000', category: categories[10], price: 25.00, info: 'lash extensions in a tube'},
    {name: 'Perfect Strokes Universal Volumizing Mascara', image: 'https://www.sephora.com/productimages/sku/s2474138-main-zoom.jpg?imwidth=315', category: categories[10], price: 20.00, info: 'Created for every lash type, this all-in-one mascara pairs a weightless, easy-to-build formula with a universal eye-hugging brush to lift, lengthen, curl, and volumize every lash from every angle.'},
    {name: 'Rare Beauty Discovery Eyeshadow Palette', image: 'https://www.rarebeauty.com/cdn/shop/products/Came-to-Play-SKU.jpg?v=1634319954', category: categories[10], price: 29.00, info: 'A sleek eyeshadow palette of seven easy-to-wear, crease-resistant shades in a range of finishes that stay put all day without fading.'},
  ]);

  console.log(items)

  process.exit();
})();