const ProductDetailPage = {
  productTitle: () => browser.$('h2.name'),
  buttonAddToCart: () => browser.$('a=Add to cart')
};

module.exports = ProductDetailPage;
