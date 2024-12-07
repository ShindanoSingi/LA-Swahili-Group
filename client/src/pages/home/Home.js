import React from 'react'

function Home() {

    const logo = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c5/9d/83/androscoggin-river.jpg?w=1200&h=-1&s=1';

  return (
    <>
        <img src={logo} className="logo w-full" alt="logo" />
    </>
  )
}

export default Home
