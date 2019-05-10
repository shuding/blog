export default ({ children, ...props }) => (
  <div {...props}>
    {children}
    <style jsx>{`
      div {
        margin: auto;
        padding: 4rem 1rem 0;
        max-width: 38rem;
      }

      :global(body) {
        margin: 0;
        color: black;
        font-size: 14px;
        line-height: 1.6;
        word-break: break-word;
        word-wrap: break-word;
        hyphens: auto;
        font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, Helvetica, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Microsoft Yahei', sans-serif;
        font-feature-settings: 'liga' 1, 'dlig' 1, 'lnum' 1, 'ordn' 1, 'halt' 1, 'kern' 1, 'kern', 'mgrk';
        font-kerning: auto;
        font-variant: normal;
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        background-color: white;
      }
      
      // @import url('https://fonts.googleapis.com/css?family=Rubik&font-display=swap');

      @media all and (max-width: 640px) {
        div {
          padding: 1rem;
        }
      }
    `}</style>
  </div>
)
