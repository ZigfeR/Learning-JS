const cardGrid = document.querySelector('.products-grid');

function addingGoods(id, src, type, fullName, appraisal, reviews, quantity, price, oldPrice) {
  cardGrid.innerHTML += `
                    <li class="products-grid__item">
                        <article class="product" data-id="${id}">
                            <a href="#" class="product__image">
                                <div class="product__switch image-switch">
                                    <div class="image-switch__item">
                                        <div class="image-switch__img"><img
                                                src="${src}" alt="${type}">
                                        </div>
                                    </div>
                                </div>
                                <ul class="product__image-pagination image-pagination" aria-hidden="true"></ul>
                            </a>
                            <h3 class="product__title">
                                <a href="#">${type} ${fullName}</a>
                            </h3>
                            <div class="product__props">
                                <span class="product__rating">
                                  <span class="product__svg">
                                  </span>
                                  ${appraisal}
                                </span>
                                <span class="product__testimonials">${reviews} отзывов</span>
                            </div>
                            <div class="product__info">
                                <span class="product__term">Артикул: ${id}</span>
                                <span class="product__available">В наличии: ${quantity} шт</span>
                            </div>
                            <div class="product__price product-price">
                                <span class="product-price__current">${price}</span>
                                <span class="product-price__old">${oldPrice}</span>
                            </div>
                            <button class="product__btn btn">Добавить в корзину</button>
                        </article>
                    </li>
  `
}

function getCart() {
  for (let j = 0; j < itemsWarehouse.length; j++) {
    let currentLength = itemsWarehouse[j];
    for (let key in currentLength) {
      let src, type, fullName, appraisal, reviews, quantity, price, oldPrice;
      src = currentLength[key].src;
      type = currentLength[key].type;
      fullName = currentLength[key].fullName;
      appraisal = currentLength[key].appraisal;
      reviews = currentLength[key].reviews;
      quantity = currentLength[key].quantity;
      price = currentLength[key].price;
      oldPrice = currentLength[key].oldPrice;
      addingGoods(key, src, type, fullName, appraisal, reviews, quantity, price, oldPrice);
    }
  }
}
getCart();