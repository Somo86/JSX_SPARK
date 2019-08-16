import { renderChildren } from './utils/render/index'

function fragment (...children) {
  return renderChildren(children)
}

export default fragment
