const STORAGE_ID = 'MY_PIZZA'
function addCart (i, callback) {

  const list = getStorage(STORAGE_ID) || []
  list.push(i)
  setStorage(STORAGE_ID, list)
  callback && callback()
}

function removeCart (i, callback) {
  let list = getStorage(STORAGE_ID) || []
  list = list.filter(j => j !== i)
  setStorage(STORAGE_ID, list)
  callback && callback()
}

function getCart () {
  return getStorage(STORAGE_ID) || []
}
