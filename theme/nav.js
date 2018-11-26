import link from './link'

const Item = ({ name, path, active }) => {
  if (!active) {
    return <link.a href={path}>{name}</link.a>
  }
  return <span>{name}</span>
}

export default ({ url }) => <div className='navigation'>
  <Item name='Blog' path='/blog' active={url === '/blog'}/>
  <Item name='Art' path='/art' active={url === '/art'}/>
  <Item name='About' path='/' active={url === '/'}/>
  <style jsx>{`
    .navigation {
      display: flex;
      justify-content: flex-end;
      margin: 3rem -.5rem 1rem;
    }
    .navigation :global(span) {
      color: #bababa;
      cursor: default;
    }
    .navigation :global(a), .navigation :global(span) {
      margin: 0 .5rem;
    }
  `}</style>
</div>