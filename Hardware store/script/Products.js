class Products {
  constructor(item) {
    this._item = item;
  }

  sayUserName() {
    return 'Brand name is ' + this._item.nameBrand;
  }
}

const items = [];

for (let key in warehouse) {
  if (warehouse.hasOwnProperty(key)) {
    const currentItem = new Products(warehouse[key]);
    items.push(currentItem);
  }
}
console.log(items)