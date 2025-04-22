class TheList {
  constructor(list = []) {
    this._list = list
  }

  get list() {
    return this._list
  }

  set list(newList) {
    this._list = newList
  }

  filterTheList(newLibrary) {
    this._list = this._list.filter((person) => newLibrary.includes(person))
  }
}

const theList = new TheList()

export default theList
