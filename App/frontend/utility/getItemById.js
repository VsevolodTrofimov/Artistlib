export default function getItemById(array, id) {
  for(let i = 0; i < array.length; i++) {
    if(array[i].id === id) return {
      key: i,
      item: array[i]
    }
  }
}
