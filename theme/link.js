import Link from 'next/link'

const A = ({ children, href, ...props }) => {
  let external = false

  if (href && /^(https?:\/\/|\/\/)/.test(href)) {
    external = true
  }

  return  <Link href={href}>
    <a target={external ? '_blank' : null} {...props}>
      {children}
      <style jsx>{`
        color: #1625ff;
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
