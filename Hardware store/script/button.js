const plusLocalPrice = (currentPrice, id) => {
  warehouseDictionary[id].localPrice += currentPrice;
  cartDictionary.totalPrice += currentPrice;
  cartDictionary.price += currentPrice;

  cartDictionary.totalQuantity += 1;

};

const minusLocalPrice = (currentPrice, id) => {
  mfuDictionary[id].localPrice -= currentPrice;
  cartDictionary.totalPrice -= currentPrice;
  cartDictionary.price -= currentPrice;

  cartDictionary.totalQuantity -= 1;
};

const setValuePrice = (id) => {
  for (let j = 0; j < localPrices.length; j++) {
    let curentId = localPrices[j].dataset.id;
    if (curentId == id) {
      localPrices[j].innerHTML = `${getNormalPrice(warehouseDictionary[id].localPrice)} грн`;
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
  --warehouseDictionary[id].count;
  if (warehouseDictionary[id].count < 1) {
    warehouseDictionary[id].count = 1;
    setQuantitySpan(warehouseDictionary[id].count, id);
    return
  }
  minusLocalPrice(warehouseDictionary[id].price, id)
  setQuantitySpan(warehouseDictionary[id].count, id);
  setValuePrice(id);
  getPrintTotalPrice();
  getPrintFullPrice();
  cartQuantity.textContent = cartDictionary.totalQuantity;

}
//Removing an item from the cart
const plusFunction = id => {
  if (warehouseDictionary[id].count < warehouseDictionary[id]["quantity"]) {
    plusLocalPrice(warehouseDictionary[id].price, id);
    setQuantitySpan(++warehouseDictionary[id].count, id);
    setValuePrice(id);
    getPrintTotalPrice();
    getPrintFullPrice();
    cartQuantity.textContent = cartDictionary.totalQuantity;

  }

}

//event overview
// const renderCart = () => {
//   // console.log(JSON.stringify(mfuDictionary))
//   console.log(mfuDictionary);
// }