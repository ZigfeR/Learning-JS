const productsBtn = document.querySelectorAll('.product__btn'),
  cartProductsList = document.querySelector('.cart-content__list'),
  cart = document.querySelector('.cart'),
  cartQuantity = cart.querySelector('.cart__quantity'),
  fullPrice = document.querySelector('.fullprice'),
  quantitySpan = document.getElementsByClassName('quantity__span'),
  totalPrices = document.querySelector('.footer__fullprice'),
  modalBtn = document.querySelector(".cart-content__btn"),
  modal = document.querySelector(".modal-window"),
  modalCart = document.querySelector(".modal-cart"),
  closeBtn = document.querySelector(".modal__closet"),
  localPrices = document.getElementsByClassName('modal-full-price')


let mfuDictionary = Object();
const mfuCart = {
  fullQuantity: 0,
  fullPrice: 0,
  price: 0
};

const getPriceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const getNormalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
  return mfuCart.price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
  return mfuCart.price -= currentPrice;
};

const getPrintQuantity = () => {
  let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
  productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const getPrintFullPrice = () => {
  fullPrice.textContent = `${getNormalPrice(mfuCart.price)} грн`;
};
//----------------------mini cart------------------------------
//поменять SVG
const generateCartProduct = (img, title, price, id) => {
  return `
        <li class="cart-content__item">
            <article class="cart-content__product cart-product" data-id="${id}">
                <img src="${img}" alt="" class="cart-product__img">
                <div class="cart-product__text">
                    <h3 class="cart-product__title">${title}</h3>
                    <span class="cart-product__price">${getNormalPrice(price)}</span>
                </div>
                <button class="cart-product__delete" aria-label="Удалить товар">
                    <svg aria-hidden="true" height="24" pointer-events="none" width="24">
                        <use pointer-events="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trash">
                            <svg viewBox="0 0 24 24" id="icon-trash">
                                <g>
                                    <path
                                        d="m9 3c-.55228 0-1 .44772-1 1s.44772 1 1 1h6c.5523 0 1-.44772 1-1s-.4477-1-1-1z">
                                    </path>
                                    <path clip-rule="evenodd"
                                        d="m3 7c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1s-.4477 1-1 1h-1v10c0 2.2091-1.7909 4-4 4h-6c-2.20914 0-4-1.7909-4-4v-10h-1c-.55228 0-1-.44772-1-1zm4 1h10v10c0 1.1046-.8954 2-2 2h-6c-1.10457 0-2-.8954-2-2z"
                                        fill-rule="evenodd"></path>
                                </g>
                            </svg>
                        </use>
                    </svg>
                </button>
            </article>
        </li>
    `;
};
//Call "btn"
productsBtn.forEach(el => {
  el.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let parent = self.closest('.product');
    let id = parent.dataset.id;
    let img = parent.querySelector('.image-switch__img img').getAttribute('src');
    let title = parent.querySelector('.product__title').textContent;
    let priceString = getPriceWithoutSpaces(parent.querySelector('.product-price__current').textContent);
    let priceNumber = parseInt(getPriceWithoutSpaces(parent.querySelector('.product-price__current').textContent));

    plusFullPrice(priceNumber);

    parseInt(getPrintFullPrice());

    cartProductsList.querySelector('.simplebar-content').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceString, id));

    mfuCart.fullQuantity += 1;
    cartQuantity.textContent = mfuCart.fullQuantity;
    getPrintQuantity();

    //Cloning an array
    for (let key in mfu) {
      if (mfu.hasOwnProperty(key)) {
        mfuDictionary[id] = {
          ...mfu[id],
          id: id,
          img: img,
          price: priceNumber,
          localPrice: priceNumber,
          count: 1
        };
      }
    }

    mfuCart.fullPrice = mfuCart.price;
    totalPrices.textContent = `${getNormalPrice(mfuCart.price)} грн`;
    self.disabled = true;

    console.log(mfuDictionary);
  });
});

//------------------modal------------------------

modalBtn.onclick = function () {
  displayCard();
  modal.style.display = "block";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

function displayCard() {
  if (mfuDictionary && modal) {
    modalCart.innerHTML = "";
    Object.values(mfuDictionary).map(item => {
      modalCart.innerHTML += `
            <article class="modal-cart__product" data-id="${item.id}">
                <header>
                    <a class="modal-remove" aria-label="Удалить товар">
                        <img src="${item.img}" alt="" class="modal-cart-product__img">
                        <h3 class="modal__delete">Удалить товар</h3>
                    </a>
                </header>
                <div class="modal-content__body">
                    <div class="modal-content">
                        <h3 class="modal-cart-product__title">${item.nameBrand} ${item.model} ${item.modelName} (${item.modelArticle})</h3>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eos itaque adipisci fugit corporis at ducimus quia voluptatibus, quam voluptatum veritatis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eos itaque adipisci fugit corporis at ducimus quia voluptatibus, quam voluptatum veritatis.</span>
                        <div class="modal-type-color type-color--yellow"></div>
                        <div class="modal-type type-${item.type.toLowerCase()}">${item.type}</div>
                    </div>
                    <footer class="modal-content">
                        <button class="quantity__btn minus" data-id="${item.id}">-</button>
                        <span class="quantity__span counter" data-id="${item.id}">${item.count}</span>
                        <button class="quantity__btn plus" data-id="${item.id}">+</button>
                        <h2 class="modal-full-price" data-id="${item.id}">${getNormalPrice(item.localPrice)} грн</h2>
                        <h2 class="modal-price" data-id="${item.id}">${getNormalPrice(item.localPrice)} грн</h2>
                    </footer>
                </div>
            </article>
    `
    })
    console.log(mfuDictionary);
  }
}

// Deleted Cart
const deleteProducts = (productParent) => {
  let id = productParent.querySelector('.cart-product').dataset.id;

  setDelete(productParent, id);
};

const deleteCard = (productParent) => {
  let id = productParent.dataset.id;

  let product = document.querySelector('.cart-content__item');
  product.remove();

  setDelete(productParent, id);
};

const setDelete = (productParent, id) => {
  document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

  let currentPrice = mfuDictionary[id].localPrice;
  minusFullPrice(currentPrice);
  getPrintFullPrice();
  productParent.remove();

  mfuCart.fullQuantity -= mfuDictionary[id].count;
  cartQuantity.textContent = mfuCart.fullQuantity;

  delete mfuDictionary[id];
  getPrintQuantity();

  console.log(mfuDictionary);
};

modalCart.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal__delete')) {
    deleteCard(e.target.closest('.modal-cart__product'));
  }
});

cartProductsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-product__delete')) {
    deleteProducts(e.target.closest('.cart-content__item'));
  }
});