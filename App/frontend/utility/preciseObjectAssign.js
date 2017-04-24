/**
 * Creates presice copy of your object only objects and arrays listed in path are copied
 * @method preciseObjectAssign
 * @param  {Object} source
 * @param  {String[]} path keys to copy
 * @return {Object} part of source, where only listed parts are coped
 */
export default function preciseObjectAssign (source, path) {
  let newObj = Object.assign({}, source)

  let proto = source
  let clone = newObj

  for(let i = 0; i < path.length; i++) {
    proto = source
    clone = newObj

    path.slice(0, i).forEach(function(key) {
      proto = proto[key]
      clone = clone[key]
    })

    if(proto[path[i]] instanceof Array) {
      clone[path[i]] = [... proto[path[i]]]
    } else if (proto[path[i]] instanceof Set) {
      clone[path[i]] = new Set(proto[path[i]].values())
    } else if (proto[path[i]] instanceof Object) {
      clone[path[i]] = Object.assign({}, proto[path[i]])
    } else {
      throw new TypeError('Unsupported type', proto[path[i]])
    }
  }



  return newObj
}
