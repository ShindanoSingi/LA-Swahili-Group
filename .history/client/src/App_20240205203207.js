function App() {

  const logo = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c5/9d/83/androscoggin-river.jpg?w=1200&h=-1&s=1';

  return (
    <div className="container">
        <img src={logo} className="logo" alt="logo" />
    </div>
  );
}

export default App;
