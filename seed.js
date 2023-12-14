require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Eyes', sortOrder: 10, subcategories: ['Mascaras', 'Eyeshadows', 'Show All']},
    {name: 'Lips', sortOrder: 20, subcategories: ['Stains', 'Glosses', 'Show All']},
    {name: 'Blushes', sortOrder: 30, subcategories: ['Liquid', 'Powder', 'Stick', 'Putty', 'All']},
    {name: 'Highlighters', sortOrder: 40, subcategories: ['Liquid', 'Powder', 'Show All']},
    {name: 'Brushes', sortOrder: 50 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Tubing Mascara', 
      by: 'Tartelette',
      images: [
        'https://tartecosmetics.com/dw/image/v2/BJRL_PRD/on/demandware.static/-/Sites-master-catalog-tarte/default/dw78a87099/2562/RECTANGLE_MAIN/2520-tartelette-tubing-mascara-MAIN2-0.jpg?sw=2000'
      ], 
      category: categories[0], 
      subcategories:'Mascaras', 
      price: 25.00, 
      info: 'lash extensions in a tube'
    },
    {
      name: 'Perfect Strokes Universal Volumizing Mascara', 
      by: 'Rare Beauty',
      images: [
        'https://www.sephora.com/productimages/sku/s2474138-main-zoom.jpg?imwidth=315'
      ], 
      category: categories[0], 
      subcategories:'Mascaras', 
      price: 20.00, 
      info: 'Created for every lash type, this all-in-one mascara pairs a weightless, easy-to-build formula with a universal eye-hugging brush to lift, lengthen, curl, and volumize every lash from every angle.'
    },
    {
      name: 'Discovery Eyeshadow Palette', 
      by: 'Rare Beauty',
      images: [
        'https://www.rarebeauty.com/cdn/shop/products/Came-to-Play-SKU.jpg?v=1634319954'
      ], 
      category: categories[0], 
      subcategories:'Eyeshadows', 
      price: 29.00, 
      info: 'A sleek eyeshadow palette of seven easy-to-wear, crease-resistant shades in a range of finishes that stay put all day without fading.'
    },
    {
      name: 'Bite-Size Eyeshadow',
      by: 'e.l.f Cosmetics', 
      images: [
        'https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw7a0e260f/2020/29922_OpenA_R.jpg?sfrm=png&sw=425&q=90'
      ], 
      category: categories[0], 
      subcategories:'Eyeshadows', 
      price: 3.00, 
      info: 'Pigmented eyeshadow palettes that deliver 4 creamy, blendable colors in mini compacts.'
    },
    {
      name: 'Soft Pinch Tinted Lip Oil', 
      by: 'Rare Beauty',
      images: [
        'https://www.rarebeauty.com/cdn/shop/products/soft-pinch-tinted-lip-oil-happy-1440x1952.jpg?v=1679094375'
      ], 
      category: categories[1], 
      subcategories: 'Stains',
      price: 20.00, 
      info: 'An innovative lip jelly that transforms into a lightweight oil, starting off glossy, then leaving lips tinted while staying comfortable—never sticky—all day.'
    },
    {
      name: 'Glossy Lip Stain', 
      by: 'e.l.f Cosmetics',
      images: [
        'https://www.elfcosmetics.com/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw4d62e127/2021/81683_OpenA_R_Final.jpg?sfrm=png&sw=425&q=90'
      ], 
      category: categories[1], 
      subcategories: 'Stains',
      price: 8.00, 
      info: 'A long lasting lip stain that gives lips a sheer pop of color and subtle gloss effect.'
    },
    {
      name: 'Fat Oil Lip Drip', 
      by: 'Nyx',
      images: [
        'https://m.media-amazon.com/images/I/71xY740LwFL.jpg'
      ], 
      category: categories[1], 
      subcategories: 'Glosses',
      price: 8.00, 
      info: 'Hydrating tinted lip oil gloss'
    },
    {
      name: 'Addict Lip GLow', 
      by: 'Dior',
      images: [
        'https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw90803d5c/Y0124000/Y0124000_C012400007_E01_ZHC.jpg?sw=1800&sh=1200'
      ], 
      category: categories[1], 
      subcategories: 'Glosses',
      price: 8.00, 
      info: 'Nourishing Lip Oil - Intense Gloss - Color-Awakening'
    },
    {
      name: 'Glow Reviver Lip Oil', 
      by: 'e.l.f cosmetics ',
      images: [
        'https://cdn-fsly.yottaa.net/5a0c9b7632f01c35d42101b2/www.elfcosmetics.com/v~4b.a3/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw141e8912/2023/GlowReviverLipOil/82004_OpenA_V7_R.jpg?sfrm=png&sw=425&q=90&yocs=1u_1y_1A_',
        'https://cdn-fsly.yottaa.net/5a0c9b7632f01c35d42101b2/www.elfcosmetics.com/v~4b.a3/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dwbc275d14/2023/GlowReviverLipOil/053023_SL_GlowRev_Fam_FOCUSSTACK-2RGB_IGF.jpg?sw=425&q=90&yocs=1u_1y_1A_'
      ], 
      category: categories[1], 
      subcategories: 'Glosses',
      price: 8.00, 
      info: 'An ultra-glossy tinted lip oil that nourishes, hydrates and enhances your lips natural color.'
    },
    {
      name: 'Blush Hour', 
      by: 'Profusion',
      images: [
        'https://profusioncosmetics.com/cdn/shop/products/ypTXdyP8_600x600.png?v=1651264306',
        'https://profusioncosmetics.com/cdn/shop/products/EDHASNLE_600x600.png?v=1651264306'
      ], 
      category: categories[2], 
      subcategories: 'Liquid',
      price: 6.00, 
      info: 'This long wearing formula is a lightweight, creamy texture that seamlessly blends to a soft and matte natural finish.'
    },
    {
      name: 'Soft Pinch Liquid Blush', 
      by: 'Rare Beauty',
      images: [
        'https://cdn.shopify.com/s/files/1/0314/1143/7703/products/Liquid-Blush-Dewy-LUCKY-SKU.jpg?v=1645133400',
      ], 
      category: categories[2], 
      subcategories: 'Liquid',
      price: 23.00, 
      info: 'A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush.'
    },
    {
      name: 'Orgasm X Blush', 
      by: 'Nars',
      images: [
        'https://www.narscosmetics.eu/dw/image/v2/BCMQ_PRD/on/demandware.static/-/Sites-itemmaster_NARS/default/dwc4dc8436/hi-res/MINI-BLUSH/OrgasmX_Mini_BlushA.jpg?sw=856&sh=750&sm=fit',
      ], 
      category: categories[2], 
      subcategories: 'Powder',
      price: 17.00, 
      info: 'A travel-size of the bestselling, iconic powder blush.'
    },
    {
      name: 'Soft Matte Perfection Blush Duos',
      by: 'Sephora', 
      images: [
        'https://www.sephora.com/productimages/sku/s2055861-main-zoom.jpg?imwidth=630',
      ], 
      category: categories[2], 
      subcategories: 'Powder',
      price: 8.00, 
      info: 'A modern powder blush with a creamy, buildable texture and a soft matte finish.'
    },
    {
      name: 'Sweet Blush Heart Shaped Sitck Blush', 
      by: 'GlamourUs',
      images: [
        'https://glamourusus.com/cdn/shop/products/glamour-us-amorus-sweet-blush-heart-shaped-stick-blush-makeup-sweet-co-hbl-01-926319.jpg?v=1692249877&width=1100',
      ], 
      category: categories[2], 
      subcategories: 'Stick',
      price: 5.99, 
      info: 'The Sweet Blush Heart Shaped Stick Blush is designed to let you enjoy this creamy and ready-to-roll formula at the tip of your hands.'
    },
    {
      name: 'Cheeky Tint Cream Blush Stick', 
      by: 'Huda Beauty',
      images: [
        'https://www.sephora.com/productimages/sku/s2555779-main-zoom.jpg?imwidth=630'
      ], 
      category: categories[2], 
      subcategories: 'Stick',
      price: 25.00, 
      info: 'A beautifully buildable cream blush that melts into skin, gliding seamlessly over the complexion with a dewy hint of tint for major second-skin vibes and a juicy glow.'
    },
    {
      name: 'Luminous Putty Blush',
      by: 'e.l.f Cosmetics',
      images: [
        'https://media.ulta.com/i/ulta/2601104?w=1036&h=1036'
      ], 
      category: categories[2], 
      subcategories: 'Putty',
      price: 7.00, 
      info: 'A putty-to-powder, buildable blush that adds a pop of color to your complexion with a subtle, shimmer finish.'
    },
    {
      name: 'Positive Light Liquid Luminizer Highlight', 
      by: 'Rare Beauty',
      images: [
        'https://www.sephora.com/productimages/sku/s2362168-main-zoom.jpg?imwidth=630'
      ], 
      category: categories[3], 
      subcategories: 'Liquid ',
      price: 25.00, 
      info: 'A silky, second-skin liquid highlighter that creates a lasting, soft, and luminous finish.'
    },
    {
      name: 'High Beam Satin Pink Liquid Highlighter', 
      by: 'Benefit Cosmetics',
      images: [
        'https://www.sephora.com/productimages/sku/s2264646-main-zoom.jpg?imwidth=630'
      ], 
      category: categories[3], 
      subcategories: 'Liquid',
      price: 24.00, 
      info: 'A satiny-pink liquid highlighter that accents cheek and brow bones for a dewy glow.'
    },
    {
      name: 'Pressed Powder Highlighter', 
      by: 'ColourPop',
      image: [
        'https://media.ulta.com/i/ulta/2609265?w=1250&h=1250',
        'https://media.ulta.com/i/ulta/2609265_sm?w=1250&h=1250'
      ], 
      category: categories[3], 
      subcategories: 'Powder',
      price: 12.00, 
      info: 'A silky, buttery soft formula that effortlessly blends onto skin for a radiant glow.'
    },
    {
      name: 'Positive Light Silky Touch Highlighter', 
      by: 'Rare Beauty',
      image: [
        'https://www.sephora.com/productimages/sku/s2629509-main-zoom.jpg?imwidth=630',
        'https://www.sephora.com/productimages/sku/s2629509-av-2-zoom.jpg?imwidth=630'
      ], 
      category: categories[3], 
      subcategories: 'Powder',
      price: 25.00, 
      info: 'An innovative powder highlighter that gives skin an instant glass-like sheen for an easy, natural-looking glow that lasts.'
    },
    {
      name: 'Essentail Eyeshadow Brush',
      by: 'Wet n Wild', 
      image: [
        'https://media.ulta.com/i/ulta/2589842?w=1250&h=1250',
        'https://media.ulta.com/i/ulta/2589842cm_alt02?w=1250&h=1250',
        'https://media.ulta.com/i/ulta/2589842cm_alt01?w=1250&h=1250'
      ], 
      category: categories[4], 
      price: 1.69, 
      info: 'Ultra-plush synthetic fibers that pick up and distribute powder pigment effortlessly, along with handles designed for the utmost precision.'
    },    
    {
      name: 'Beautifully Percise Eyeshadow Brush', 
      by: 'e.l.f Cosmetics',
      image: [
        'https://media.ulta.com/i/ulta/2524646?w=1250&h=1250',
        'https://media.ulta.com/i/ulta/2524646cm_alt01?w=1250&h=1250'
      ], 
      category: categories[4], 
      price: 6.00, 
      info: 'A slightly tapered medium sized eyeshadow brush for flawlessly applying color to the eye.'
    },    
    {
      name: 'Blush Brush', 
      by: 'Youthforia',
      image: [
        'https://media.ulta.com/i/ulta/2602249?w=1250&h=1250'
      ], 
      category: categories[4], 
      price: 18.00, 
      info: 'The dense synthetic bristles allows for precision of color, yet is soft and gentle enough for sensitive skin.'
    },    
    {
      name: 'Soft Pinch Blush Brush', 
      by: 'Rare Beauty',
      image: [
        'https://www.sephora.com/productimages/sku/s2518942-main-zoom.jpg?imwidth=630'
      ], 
      category: categories[4], 
      price: 23.00, 
      info: 'A feathery soft blush brush that blends pigment-rich formulas with ease—ideal for applying liquids and creams for a soft diffused finish.'
    },    
    {
      name: 'Dual Ended Blush Brush', 
      by: 'Patrick Ta',
      image: [
        'https://www.sephora.com/productimages/sku/s2711653-main-zoom.jpg?imwidth=630'
      ], 
      category: categories[4], 
      price: 45.00, 
      info: 'A dual-ended blush brush that applies both cream and powder with ease for a diffused and glowy look.'
    },
    {
      name: 'Putty Blush Brush', 
      by: 'e.l.f Cosmetics',
      image: [
        'https://media.ulta.com/i/ulta/2574608?w=1250&h=1250'
      ], 
      category: categories[4], 
      price: 5.00, 
      info: 'A velvety, lightweight putty blush that melts into your skin.'
    },
    {
      name: 'Fan Highlight Brush #23', 
      by: 'ULTA Beauty Collection',
      image: [
        'https://media.ulta.com/i/ulta/2601763?w=1250&h=1250'
      ], 
      category: categories[4], 
      price: 14.00, 
      info: 'For a glowy, light touch of radiance.'
    },
    {
      name: 'Cheek-Hugging Highlight Brush 120', 
      by: 'FENTY BEAUTY by Rihanna',
      image: [
        'https://media.ulta.com/i/ulta/2592260?w=1890&h=1890'
      ], 
      category: categories[4], 
      price: 32.00, 
      info: 'An expertly chiseled highlight brush that hugs cheeks for an effortless glow.'
    },
    {
      name: 'Highlighting Brush', 
      by: 'e.l.f Cosmetics',
      image: [
        'hhttps://media.ulta.com/i/ulta/2506980?w=1250&h=1250',
        'https://media.ulta.com/i/ulta/2506980cm_alt01?w=1250&h=1250'
      ], 
      category: categories[4], 
      price: 5.00, 
      info: 'An expertly chiseled highlight brush that hugs cheeks for an effortless glow.'
    },
  ]);

  console.log(items)

  process.exit();
})();