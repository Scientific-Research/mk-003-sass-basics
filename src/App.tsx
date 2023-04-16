import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <h1>Info Site</h1>
      <p>Welcome to this Site!</p>
      <h2>Detailed Info</h2>
      <p>kjsdghjgsddkjfhkjsdkfshdfkjshd</p>
      <h3>More Info</h3>
      <p>kjsdghjgsddkjfhkjsdkfshdfkjshd</p>

      <section className="content">
        <p>This is a message in the section in the content!</p>
        <hr />
        <button className="primary">Primary</button>
        <button className="secondary">Secondary</button>
        <button className="warning">Warning</button>
        <button className="error">Error</button>
        <button className="info">Info</button>

        <br />
        <button className="primary primary-disabled">Primary</button>
        <button className="secondary secondary-disabled">Secondary</button>
        <button className="warning warning-disabled">Warning</button>
        <button className="error error-disabled">Error</button>
        <button className="info info-disabled">Info</button>
      </section>
    </div>
  );
}

export default App;
