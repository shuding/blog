const Blockquote = ({ children }) => (
  <blockquote>
    {children}
    <style jsx>{`
      margin: 1.5rem 1.5rem;
      font-style: italic;
    `}</style>
  </blockquote>
)

export default {
  blockquote: Blockquote
}
