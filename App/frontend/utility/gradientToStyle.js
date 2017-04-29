import gradients from './gradients'
import hexToRGBA from './hexToRGBA'

export default function gradientToStyle(idx) {
  let styles = {
    background: "",
    boxShadow: ""
  }

  styles.background = "linear-gradient(-25deg"

  gradients[idx].colors.forEach(function(color) {
    styles.background += ", " + color
  })

  styles.background += ')'

  styles.webkitBackgroundClip = 'text'

  // styles.boxShadow = '0 12px 64px 0 '
  //                    + hexToRGBA(gradients[idx].colors[0], 0.41) + ", "
  //                    + '0 6px 36px 0 '
  //                    + hexToRGBA(gradients[idx].colors.slice(-1)[0], 0.31)

  return styles
}
