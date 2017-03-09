// ReactDOM.render(<h1>Hey Dude</h1>, document.getElementById('container'));

// components should start with a capital letter
function Application() {
  return (
    <div>
      <h1>Hello from React!</h1>
      <p>the heading above and this paragraph were rendered from the Application component.</p>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
