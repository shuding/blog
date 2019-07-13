import Link from 'next/link'

import colors from './color'

const A = ({ children, href, prefetch, onClick, ...props }) => {
  let external = false
  let hash = false

  if (href && /^(https?:\/\/|\/\/)/.test(href)) {
    external = true
  }

  if (href && !external && /^#/.test(href)) {
    hash = true
  }

  return  <Link href={href} prefetch={prefetch}>
    <a target={external ? '_blank' : null} onClick={
      hash ? ev => {
        window.location.hash = href
        onClick && onClick(ev)
      } : onClick
    } {...props}>
      {children}
      <style jsx>{`
        color: inherit;
        text-decoration: underline;
        // text-decoration-color: transparent;
        cursor: pointer;
      `}</style>
    </a>
  </Link>
}

export default {
  a: A
}
