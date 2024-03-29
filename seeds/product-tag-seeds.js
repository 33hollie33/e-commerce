const { Product, ProductTag } = require ('../models');

const productTagData = [
    {
      product_id: 1,
      tag_id: 6,
    },
    {
      product_id: 1,
      tag_id: 7,
    },
    {
      product_id: 1,
      tag_id: 8,
    },
    {
      product_id: 2,
      tag_id: 6,
    },
    {
      product_id: 3,
      tag_id: 1,
    },
    {
      product_id: 3,
      tag_id: 3,
    },
    {
      product_id: 3,
      tag_id: 4,
    },
    {
      product_id: 3,
      tag_id: 5,
    },
    {
      product_id: 4,
      tag_id: 1,
    },
    {
      product_id: 4,
      tag_id: 2,
    },
    {
      product_id: 4,
      tag_id: 8,
    },
    {
      product_id: 5,
      tag_id: 3,
    },
  ];
  
  const seedProductTags = () => ProductTag.bulkCreate(productTagData);
  
  module.exports = seedProductTags;



// // const productData = [
//     {
//         product_name: 'Plain T-Shirt',
//         price: 14.99,
//         stock: 14,
//         category_id: 1,
//     },
//     {
//         product_name: 'Running Sneakers',
//         price: 90.0,
//         stock: 25,
//         category_id: 5,
//     },
//     {
//         product_name: 'Branded Baseball Hat',
//         price: 22.99,
//         stock: 12,
//         category_id: 4,
//     },
//     {
//         product_name: 'Top 40 Music Compilation Vinyl Record',
//         price: 12.99,
//         stock: 50,
//         category_id: 3,
//     },
//     {
//         product_name: 'Cargo Shorts',
//         price: 29.99,
//         stock: 22,
//         category_id: 2,
//     },
// ];

// const seedProducts = () => Product.bulkCreate(productData);

// module.exports = seedProducts;