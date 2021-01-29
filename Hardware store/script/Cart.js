const productsBtn = document.querySelectorAll('.product__btn'),
  cartProductsList = document.querySelector('.cart-content__list'),
  cart = document.querySelector('.cart'),
  cartQuantity = cart.querySelector('.cart__quantity'),
  fullPrice = document.querySelector('.fullprice'),
  quantitySpan = document.getElementsByClassName('quantity__span'),
  totalPrices = document.querySelector('.footer__fullprice'),
  modalBtn = document.querySelector(".cart-content__btn"),
  loginUser = document.querySelector(".icon-user"),
  modalUser = document.querySelector(".modal-user"),
  userName = document.querySelector(".icon-user__text"),
  submitUser = document.querySelector(".lf--submit"),
  inputUser = document.querySelectorAll(".lf--input"),
  sigInUsername = document.getElementById('username'),
  sigInPassword = document.getElementById('password'),
  sigInCash = document.getElementById('cash'),
  modal = document.querySelector(".modal-window"),
  modalCart = document.querySelector(".modal-cart"),
  closeBtn = document.querySelector(".modal__closet"),
  cartContentItem = document.getElementsByClassName('cart-content__item'),
  localPrices = document.getElementsByClassName('modal-full-price'),
  btnBuy = document.querySelector('.modal-footer__btn');

let warehouseDictionary = Object();
const userDictionary = [];
const cartDictionary = {
  totalQuantity: 0,
  totalPrice: 0,
  price: 0
};

for (let j = 0; j < productsBtn.length; j++) {
  productsBtn[j].disabled = true;
}

const getPriceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const getNormalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
  return cartDictionary.price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
  return cartDictionary.price -= currentPrice;
};

const getPrintQuantity = () => {
  let productsListLength = cartProductsList.querySelector('.simplebar-content').children.length;
  productsListLength > 0 ? cart.classList.add('active') : cart.classList.remove('active');
};

const getPrintFullPrice = () => {
  fullPrice.textContent = `${getNormalPrice(cartDictionary.price)} грн`;
};
const getPrintTotalPrice = () => {
  totalPrices.textContent = `${getNormalPrice(cartDictionary.totalPrice)} грн`;
};
//----------------------mini cart------------------------------
const generateCartProduct = (img, title, price, id) => {
  return `
        <li class="cart-content__item" data-id="${id}">
            <article class="cart-content__product cart-product" data-id="${id}">
                <img src="${img}" alt="" class="cart-product__img">
                <div class="cart-product__text">
                    <h3 class="cart-product__title">${title}</h3>
                    <span class="cart-product__price">${getNormalPrice(price)}</span>
                </div>
                <button class="cart-product__delete" aria-label="Удалить товар">
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

    cartDictionary.totalQuantity += 1;
    cartQuantity.textContent = cartDictionary.totalQuantity;
    getPrintQuantity();

    for (let j = 0; j < itemsWarehouse.length; j++) {
      let currentLength = itemsWarehouse[j];
      for (let key in currentLength) {
        let currentId = currentLength[key];
        if (currentId == currentLength[id]) {
          warehouseDictionary[id] = {
            ...currentLength[id],
            id,
            price: priceNumber,
            localPrice: priceNumber,
            count: 1
          };
        }
      }
    }

    cartDictionary.totalPrice = cartDictionary.price;
    totalPrices.textContent = `${getNormalPrice(cartDictionary.price)} грн`;
    self.disabled = true;

    console.log(warehouseDictionary);
  });
});

//------------------modal cart------------------------

modalBtn.onclick = function () {
  displayCard();
  getDisplayFlex(modal);
  btnBuy.disabled = false;

}
closeBtn.onclick = function () {
  getDisplayNone(modal);
}

window.onclick = function (e) {
  if (e.target == modal) {
    getDisplayNone(modal);
  }
  if (e.target == modalUser) {
    getDisplayNone(modalUser);
    for (let i = 0; i < inputUser.length; i++) {
      inputUser[i].value = "";
    }
  }
}


function getDisplayNone(block) {
  document.body.style.overflow = "initial";
  block.style.display = "none";
}

function getDisplayFlex(block) {
  document.body.style.overflow = "hidden";
  block.style.display = "flex";
}

btnBuy.onclick = function () {
  let totalCart = "";

  for (let i = 0; i < userDictionary.length; i++) {
    let j = userDictionary.length - 1;
    if (i == j) {
      if (cartDictionary.totalPrice < userDictionary[i].cash) {
        for (let key in warehouseDictionary) {
          if (warehouseDictionary.hasOwnProperty(key)) {
            totalCart += `<span>${warehouseDictionary[key].fullName}: ${warehouseDictionary[key].count}шт</span>`;
            warehouseDictionary[key].quantity -= warehouseDictionary[key].count;
            for (let j = 0; j < itemsWarehouse.length; j++) {
              let currentLength = itemsWarehouse[j];
              if (currentLength.hasOwnProperty(key)) {
                currentLength[key].quantity = warehouseDictionary[key].quantity;
              }
            }
          }
        }

        let modalCartProduct = document.querySelectorAll('.modal-cart__product');
        for (let i = 0; i < modalCartProduct.length; i++) {
          cleareCard(modalCartProduct[i]);
        }
        userDictionary[i].cash -= cartDictionary.totalPrice;
        modalCart.innerHTML = `
                      <div class="thankyou">
                          <h3 class="modal__thankyou">Спасибо за покупку товара ${userDictionary[i].user}</h3>
                          <span>Вы преобрели:</span>
                          ${totalCart}
                          <span>Ваш остаток на счету: ${userDictionary[i].cash} грн</span>
                      </div>
        `;
        cartDictionary.totalPrice = null;
        cartDictionary.price = null;

        btnBuy.disabled = true;
        modalCart.style.paddingRight = 0;
        getReloadCart();
      } else {
        alert("Недостаточно средств!");
      }
    }
  }
  console.log(warehouseDictionary)
}

function displayCard() {
  if (warehouseDictionary && modal) {
    modalCart.innerHTML = "";
    Object.values(warehouseDictionary).map(item => {
      let typeColor = 0;
      if (item.type == "MFU") {
        typeColor = 'mfu';
      }
      if (item.type == "Printer") {
        typeColor = 'printer';
      }
      if (item.type == "Scanner") {
        typeColor = 'scanner';
      }
      modalCart.innerHTML += `
            <article class="modal-cart__product" data-id="${item.id}">
                <header>
                    <a class="modal-remove" aria-label="Удалить товар">
                        <img src="${item.src}" alt="" class="modal-cart-product__img">
                        <h3 class="modal__delete">Удалить товар</h3>
                    </a>
                </header>
                <div class="modal-content__body">
                    <div class="modal-content">
                        <h3 class="modal-cart-product__title">${item.fullName}</h3>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eos itaque adipisci fugit corporis at ducimus quia voluptatibus, quam voluptatum veritatis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eos itaque adipisci fugit corporis at ducimus quia voluptatibus, quam voluptatum veritatis.</span>
                        <div class="modal-type-color type-color--${typeColor}"></div>
                        <div class="modal-type type-${item.type.toLowerCase()}">${item.type}</div>
                    </div>
                    <footer class="modal-content">
                        <button class="quantity__btn minus" data-id="${item.id}">-</button>
                        <span class="quantity__span counter" data-id="${item.id}">${item.count}</span>
                        <button class="quantity__btn plus" data-id="${item.id}">+</button>
                        <h2 class="modal-full-price" data-id="${item.id}">${getNormalPrice(item.localPrice)} грн</h2>
                        <h2 class="modal-price" data-id="${item.id}">${getNormalPrice(item.price)} грн</h2>
                    </footer>
                </div>
            </article>
    `
    })
    console.log(cartDictionary);
  }
}
//------------------modal login------------------------
loginUser.onclick = function () {
  getDisplayFlex(modalUser);
}


submitUser.onclick = function () {
  let localUsername = sigInUsername.value;
  let localPassword = sigInPassword.value;
  let localCash = sigInCash.value;

  let localUser = new User(localUsername, localPassword, localCash);
  userDictionary.push(localUser);

  userName.textContent = `${localUsername}`;

  clearModalCart();
  for (let i = 0; i < inputUser.length; i++) {
    inputUser[i].value = "";
  }

  for (let j = 0; j < productsBtn.length; j++) {
    productsBtn[j].disabled = false;
  }

  loginUser.className = "nav__item icon-user__active";

  getDisplayNone(modalUser);

  console.log(userDictionary);
}
const clearModalCart = () => {
  let modalCartProduct = document.querySelectorAll('.modal-cart__product');
  let cartProduct = document.querySelectorAll('.cart-product');
  if (modalCartProduct.length > 0) {
    for (let i = 0; i < modalCartProduct.length; i++) {
      cleareCard(modalCartProduct[i]);
    }
  } else {
    for (let i = 0; i < cartProduct.length; i++) {
      cleareCard(cartProduct[i]);
    }
  }
  cartDictionary.totalPrice = null;
  cartDictionary.price = null;
}


function getReloadCart() {
  cardGrid.innerHTML = '';

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
// Deleted Cart
const deleteProducts = (productParent) => {
  let id = productParent.querySelector('.cart-product').dataset.id;

  setDelete(productParent, id);
};

const deleteCard = (productParent) => {
  let id = productParent.dataset.id;

  for (let j = 0; j < cartContentItem.length; j++) {
    let curentId = cartContentItem[j].dataset.id;
    if (curentId == id) {
      cartContentItem[j].remove();
    }
    if (cartContentItem.length == 0) {
      modal.style.display = "none";
      document.body.style.overflow = "initial";
    }
  }

  setDelete(productParent, id);
};

const cleareCard = (productParent) => {
  let id = productParent.dataset.id;

  for (let j = 0; j < cartContentItem.length; j++) {
    let curentId = cartContentItem[j].dataset.id;
    if (curentId == id) {
      cartContentItem[j].remove();
    }
  }

  fetDelete(productParent, id);
};

const setDelete = (productParent, id) => {
  document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

  let currentPrice = warehouseDictionary[id].localPrice;
  minusFullPrice(currentPrice);
  cartDictionary.totalPrice -= currentPrice;
  getPrintTotalPrice();
  getPrintFullPrice();
  productParent.remove();

  cartDictionary.totalQuantity -= warehouseDictionary[id].count;
  cartQuantity.textContent = cartDictionary.totalQuantity;

  delete warehouseDictionary[id];
  getPrintQuantity();

  console.log(warehouseDictionary);
};

const fetDelete = (productParent, id) => {
  document.querySelector(`.product[data-id="${id}"]`).querySelector('.product__btn').disabled = false;

  productParent.remove();

  cartDictionary.totalQuantity -= warehouseDictionary[id].count;
  cartQuantity.textContent = cartDictionary.totalQuantity;

  // delete warehouseDictionary[id];
  getPrintQuantity();

  console.log(warehouseDictionary);
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