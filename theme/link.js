import Link from 'next/link'

import colors from './color'

const A = ({ children, href, prefetch, ...props }) => {
  let external = false

  if (href && /^(https?:\/\/|\/\/)/.test(href)) {
    external = true
  }

  return  <Link href={href} prefetch={prefetch}>
    <a target={external ? '_blank' : null} {...props}>
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
