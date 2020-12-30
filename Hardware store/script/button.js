const quantitySpan = document.querySelectorAll('.quantity__span');

document.onclick = event => {
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  }
}

let i = 0;
let iMax = mfu[279577]["quantity"];

const minusFunction = id => {
  quantitySpan[0].innerHTML = `${--i}`;
  if (i <= 0) {
    i = 0;
    quantitySpan[0].innerHTML = `${i}`;
    mfu[id]["quantity"] = iMax;
    renderCart();
    return
  }
  mfu[id]["quantity"]++;
  renderCart();
}

const plusFunction = id => {
  if (mfu[id]["quantity"] == 0) {
    deleteFunction(id);
    return true
  }
  quantitySpan[0].innerHTML = `${++i}`;
  mfu[id]["quantity"]--;
  renderCart();
}

const deleteFunction = id => {
  mfu[id]["quantity"] = 0;
  renderCart();
}

const renderCart = () => {
  console.log(mfu)
}