class Products {
  constructor(item) {
    this._item = item;
  }

  sayUserName() {
    return 'Brand name is ' + this._item.nameBrand;
  }
}