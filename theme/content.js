export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: 2rem 0 5rem;
      }
      // :global(:target) {
      //   background: #fffa9e;
      // }
    `}</style>
  </div>
)
