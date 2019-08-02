function setStorage (k, v) {
  localStorage.setItem(k, JSON.stringify(v))
}
function getStorage(k) {
  let data = null
  try {
    data = JSON.parse(localStorage.getItem(k))
  } catch (e) {
  }
  return data
}
