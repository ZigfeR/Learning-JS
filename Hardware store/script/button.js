const plusLocalPrice = (currentPrice, id) => {
  mfuClone[id].localPrice += currentPrice
  mfuPrice.fullPrice += currentPrice;
  price += currentPrice;

  mfuPrice.fullQuantity += 1;

};

const minusLocalPrice = (currentPrice, id) => {
  mfuClone[id].localPrice -= currentPrice
  mfuPrice.fullPrice -= currentPrice;
  price -= currentPrice;

  mfuPrice.fullQuantity -= 1;
};

const setValuePrice = (id) => {
  for (let j = 0; j < localPrices.length; j++) {
    let curentId = localPrices[j].dataset.id;
    if (curentId == id) {
      localPrices[j].innerHTML = `${normalPrice(mfuClone[id].localPrice)} грн`;
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
  --mfuClone[id].count;
  if (mfuClone[id].count < 1) {
    mfuClone[id].count = 1;
    setQuantitySpan(mfuClone[id].count, id);
    return
  }
  minusLocalPrice(mfuClone[id].price, id)
  setQuantitySpan(mfuClone[id].count, id);
  setValuePrice(id);
  totalPrices.textContent = `${normalPrice(mfuPrice.fullPrice)} грн`;
  printFullPrice();
  cartQuantity.textContent = mfuPrice.fullQuantity;

}
//Removing an item from the cart
const plusFunction = id => {
  if (mfuClone[id].count < mfuClone[id]["quantity"]) {
    plusLocalPrice(mfuClone[id].price, id)
    setQuantitySpan(++mfuClone[id].count, id);
    setValuePrice(id);
    totalPrices.textContent = `${normalPrice(mfuPrice.fullPrice)} грн`;
    printFullPrice();
    cartQuantity.textContent = mfuPrice.fullQuantity;

  }

}

//event overview
// const renderCart = () => {
//   // console.log(JSON.stringify(mfuClone))
//   console.log(mfuClone);
// }