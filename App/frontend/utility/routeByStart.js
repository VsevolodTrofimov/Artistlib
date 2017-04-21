/**
 * Calls route depending on item.startsWith(key)
 * @method routeByStart
 * @param  {String} item string_toRoute
 * @param  {Object.<string><function>} routes start->function pairs
 * @param  {Any[]} args args to pass to routes[key]
 * @return {Any} your route[key] return
 */
export default function routeByStart(item, routes, args = []) {
  for (var key in routes) {
    if (item.startsWith(key)) {
      return routes[key](...args)
    }
  }
}
