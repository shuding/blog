export default ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: auto;
        padding: 4rem 1rem 0;
        max-width: 38rem;
      }

      :global(body) {
        margin: 0;
        color: #222;
        font-size: 16px;
        line-height: 1.65;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
        font-feature-settings: 'liga' 1, 'dlig' 1, 'lnum' 1, 'ordn' 1, 'halt' 1, 'kern' 1, 'kern';
        text-rendering: optimizeLegibility;
        word-break: break-word;
        word-wrap: break-word;
        hyphens: auto;
        font-kerning: normal;
        -webkit-font-smoothing: antialiased;
      }

      @media all and (max-width: 640px) {
        div {
          padding: 1rem;
        }
      }
    `}</style>
  </div>
)
