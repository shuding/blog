export default ({src, title, alt, full, overflow}) => <figure>
  <img className={overflow ? 'overflow' : (full ? 'full' : '')} src={src} alt={alt || title} />
  {title && <figcaption>{title}</figcaption>}
  <style jsx>{`
    figure {
      margin: 2rem 0 2.5rem;
    }
    img {
      margin: 0;
      max-width: 100%;
      text-align: center;
    }
    img.full {
      margin: 0 -1rem;
      max-width: calc(100% + 2rem);
    }
    img.overflow {
      margin: 0 -120px;
      max-width: calc(100% + 240px);
    }
    figcaption {
      margin-top: .8rem;
      text-align: center;
      font-size: .8rem;
      color: #999;
    }
    figcaption :global(a) {
      color: inherit;
    }

    @media all and (max-width: ${640 + 240}px) {
      img.overflow {
        margin: 0 -1rem;
        max-width: calc(100% + 2rem);
      }
    }
  `}</style>
</figure>
