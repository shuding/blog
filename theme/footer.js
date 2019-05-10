const YEAR = (new Date).getFullYear()

export default () => <footer>
  <abbr title='This site and all its content are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.'>CC BY-NC 4.0</abbr> <time>{YEAR}</time> © Shu Ding.
  <style jsx>{`
    footer {
      margin-bottom: 2rem;
      font-size: .8rem;
      color: #aaa;
    }
    abbr {
      cursor: help;
      text-decoration: none;
      border-bottom: 1px dotted;
    }
    // @supports (writing-mode: vertical-rl) {
    //   @media screen and (min-width: 640px) {
    //     footer {
    //       position: fixed;
    //       right: 0;
    //       bottom: 0;
    //       margin-bottom: 5px;
    //       writing-mode: vertical-rl;
    //       text-orientation: sideways;
    //     }
    //     abbr {
    //       border-bottom: none;
    //     }
    //   }
    // }
  `}</style>
</footer>
