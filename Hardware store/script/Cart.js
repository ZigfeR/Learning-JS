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
  modal = document.querySelector(".modal-window"),
  modalCart = document.querySelector(".modal-cart"),
  closeBtn = document.querySelector(".modal__closet"),
  cartContentItem = document.getElementsByClassName('cart-content__item'),
  localPrices = document.getElementsByClassName('modal-full-price'),
  btnBuy = document.querySelector('.modal-footer__btn');


let warehouseDictionary = Object();
const cartDictionary = {
  totalQuantity: 0,
  totalPrice: 0,
  price: 0
};

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

    for (let j = 0; j < warehouse.length; j++) {
      let currentLength = warehouse[j];
      for (let key in currentLength) {
        let currentId = currentLength[key];
        if (currentId == currentLength[id]) {
          warehouseDictionary[id] = {
            ...currentLength[id],
            id,
            img,
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

//------------------modal------------------------

modalBtn.onclick = function () {
  displayCard();
  document.body.style.overflow = "hidden";
  modal.style.display = "flex";
}

closeBtn.onclick = function () {
  document.body.style.overflow = "initial";
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    document.body.style.overflow = "initial";
    modal.style.display = "none";
  }
}
loginUser.onclick = function () {
  displayCard();
  document.body.style.overflow = "hidden";
  modalUser.style.display = "flex";
}
window.onclick = function (e) {
  if (e.target == modalUser) {
    document.body.style.overflow = "initial";
    modalUser.style.display = "none";
  }
}
// loginUser
btnBuy.onclick = function () {
  for (let key in warehouseDictionary) {
    if (warehouseDictionary.hasOwnProperty(key)) {
      btnBuy.disabled = true;
      warehouseDictionary[key].quantity -= warehouseDictionary[key].count;
      modalCart.innerHTML = `
                    <div class="thankyou">
                        <h3 class="modal__delete">Спасибо за покупку товара</h3>
                    </div>
      `;
      console.log(warehouseDictionary[key].quantity)
      console.log(warehouseDictionary)
    }
  }
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
                        <img src="${item.img}" alt="" class="modal-cart-product__img">
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
    console.log(warehouseDictionary);
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