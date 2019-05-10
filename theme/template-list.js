import Link from 'next/link'

const A = ({ children, href, ...props }) => {
  return  <Link href={href}>
    <a {...props}>
      {children}
      <style jsx>{`
        display: inline-block;
        margin-right: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: black;
        text-decoration: none;
        letter-spacing: -.02em;
      `}</style>
    </a>
  </Link>
}

const P = ({ children }) => {
  return <p>
    {children}
    <style jsx>{`
      p :global(time) {
        display: inline-block;
        margin-bottom: 5px;
        font-size: 0.9rem;
        color: black;
      }
      @media all and (max-width: 640px) {
        p {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}</style>
  </p>
}

export default {
  a: A,
  p: P
}
