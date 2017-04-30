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

  styles.boxShadow = '0 1px 6px 0 '
                     + hexToRGBA(gradients[idx].colors[0], 0.41) + ", "
                     + '0 3px 12px 0 '
                     + hexToRGBA(gradients[idx].colors.slice(-1)[0], 0.31)

  return styles
}
