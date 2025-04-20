let theList = []

const setTheList = function (newLibrary) {
  theList = theList.filter((person) => newLibrary.includes(person))
}

export { theList, setTheList }
