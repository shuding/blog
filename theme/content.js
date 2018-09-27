export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: 2rem 0 5rem;
      }
      div :global(p) {
        margin-top: 1.5rem;
        margin-bottom: 0;
      }
      div :global(img) {
        max-width: 100%;
      }
      // :global(:target) {
      //   background: #fffa9e;
      // }
      // :global(ul) {
      //   list-style-type: none;
      //   padding: 0;
      // }
      // :global(li) {
      //   padding-left: 1.1875em;
      //   position: relative;
      //   margin-bottom: .25em;
      // }
      // :global(li):before {
      //   content: "•";
      //   position: absolute;
      //   left: .2em;
      // }
    `}</style>
  </div>
)
