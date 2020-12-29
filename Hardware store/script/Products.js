class Products {
  constructor(item) {
    this._item = item;
  }

  sayUserName() {
    return 'Brand name is ' + this._item.nameBrand;
  }
}

const items = [];

for (let key in mfu) {
  if (mfu.hasOwnProperty(key)) {
    const currentItem = new Products(mfu[key]);
    items.push(currentItem);
  }
}