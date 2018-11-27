import Link from 'next/link'

import colors from './color'

const A = ({ children, href, ...props }) => {
  let external = false

  if (href && /^(https?:\/\/|\/\/)/.test(href)) {
    external = true
  }

  return  <Link href={href}>
    <a target={external ? '_blank' : null} {...props}>
      {children}
      <style jsx>{`
        color: ${colors.main};
        text-decoration: underline;
        text-decoration-color: transparent;
        :hover {
          text-decoration-color: currentColor;
        }
      `}</style>
    </a>
  </Link>
}

export default {
  a: A
}
