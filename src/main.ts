import './counter'
import { renderHello } from './templates'

const mount = document.getElementById('tmpl-mount')

if (mount) {
  renderHello(mount, 'lit tutorial')
}
