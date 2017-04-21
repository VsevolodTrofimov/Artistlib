/**
 * Creates presice copy of your object only objects and arrays listed in path are copied
 * @method preciseObjectAssign
 * @param  {Object} source
 * @param  {String[]} path keys to copy
 * @return {Object} part of source, where only listed parts are coped
 */
export default function preciseObjectAssign (source, path) {
  var newObj = Object.assign({}, source)

  var proto = source
  var clone = newObj

  for(let i = 0; i < path.length; i++) {
    proto = source
    clone = newObj

    path.slice(0, i).forEach(function(key) {
      proto = proto[key]
      clone = clone[key]
    })

    if(proto[path[i]] instanceof Array) {
      clone[path[i]] = [... proto[path[i]]]
    } else {
      clone[path[i]] = Object.assign({}, proto[path[i]])
    }
  }



  return newObj
}
