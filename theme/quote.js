const Blockquote = ({ children }) => (
  <blockquote>
    {children}
    <style jsx>{`
      font-style: italic;
      color: #6e6e6e;
      margin: 2rem 1rem;
    `}</style>
  </blockquote>
)

export default {
  blockquote: Blockquote
}
