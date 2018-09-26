const H1 = ({ children, id }) => <h1 id={id}>
  {children}
  <style jsx>{`
    h1 {
      font-size: 1.65em;
      font-weight: 600;
    }
  `}</style>
</h1>

const H2 = ({ children, id }) => <h2 id={id}>
  <a href={'#' + id}>{children}</a>
  <style jsx>{`
    h2 {
      margin-top: 1.5em;
      font-size: 1.4em;
      font-weight: 600;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  `}</style>
</h2>

export default {
  h1: H1, 
  h2: H2
}
