const plusLocalPrice = (currentPrice, id) => {
  mfuDictionary[id].localPrice += currentPrice
  mfuCart.fullPrice += currentPrice;
  mfuCart.price += currentPrice;

  mfuCart.fullQuantity += 1;

};

const minusLocalPrice = (currentPrice, id) => {
  mfuDictionary[id].localPrice -= currentPrice
  mfuCart.fullPrice -= currentPrice;
  mfuCart.price -= currentPrice;

  mfuCart.fullQuantity -= 1;
};

const setValuePrice = (id) => {
  for (let j = 0; j < localPrices.length; j++) {
    let curentId = localPrices[j].dataset.id;
    if (curentId == id) {
      localPrices[j].innerHTML = `${normalPrice(mfuDictionary[id].localPrice)} грн`;
    }
  }
}

//Event handling
modalCart.onclick = event => {
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  }
}
//Displaying the value on the screen
const setQuantitySpan = (quantity, id) => {
  for (let j = 0; j < quantitySpan.length; j++) {
    let curentId = quantitySpan[j].dataset.id;
    if (curentId == id) {
      quantitySpan[j].innerHTML = `${quantity}`;
    }
  }
}

//Adding an item to the cart
const minusFunction = id => {
  --mfuDictionary[id].count;
  if (mfuDictionary[id].count < 1) {
    mfuDictionary[id].count = 1;
    setQuantitySpan(mfuDictionary[id].count, id);
    return
  }
  minusLocalPrice(mfuDictionary[id].price, id)
  setQuantitySpan(mfuDictionary[id].count, id);
  setValuePrice(id);
  totalPrices.textContent = `${normalPrice(mfuCart.fullPrice)} грн`;
  printFullPrice();
  cartQuantity.textContent = mfuCart.fullQuantity;

}
//Removing an item from the cart
const plusFunction = id => {
  if (mfuDictionary[id].count < mfuDictionary[id]["quantity"]) {
    plusLocalPrice(mfuDictionary[id].price, id)
    setQuantitySpan(++mfuDictionary[id].count, id);
    setValuePrice(id);
    totalPrices.textContent = `${normalPrice(mfuCart.fullPrice)} грн`;
    printFullPrice();
    cartQuantity.textContent = mfuCart.fullQuantity;

  }

}

//event overview
// const renderCart = () => {
//   // console.log(JSON.stringify(mfuDictionary))
//   console.log(mfuDictionary);
// }