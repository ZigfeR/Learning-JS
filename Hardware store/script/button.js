const quantitySpan = document.getElementsByClassName('quantity__span');

const mfuClone = {};

for (let key in mfu) {
  if (mfu.hasOwnProperty(key)) {
    mfuClone[key] = {
      ...mfu[key],
      count: 0
    };
  }
}

document.onclick = event => {
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  }
}
const setQuantitySpan = (quantity, id) => {
  for (let j = 0; j < quantitySpan.length; j++) {
    let curentId = quantitySpan[j].dataset.id;
    if (curentId == id) {
      quantitySpan[j].innerHTML = `${quantity}`;
    }
  }
}

const minusFunction = id => {
  --mfuClone[id].count;
  if (mfuClone[id].count < 0) {
    mfuClone[id].count = 0;
    setQuantitySpan(mfuClone[id].count, id);
    renderCart();
    return
  }
  setQuantitySpan(mfuClone[id].count, id);
  renderCart();
}

const plusFunction = id => {
  if (mfuClone[id].count < mfuClone[id]["quantity"]) {
    setQuantitySpan(++mfuClone[id].count, id);
    renderCart();
  }
}

const renderCart = () => {
  console.log(JSON.stringify(mfuClone))
}