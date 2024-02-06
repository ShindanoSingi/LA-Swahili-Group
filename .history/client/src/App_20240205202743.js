function App() {

  const logo = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/c5/9d/83/androscoggin-river.jpg?w=1200&h=-1&s=1';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
