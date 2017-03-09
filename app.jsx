// ReactDOM.render(<h1>Hey Dude</h1>, document.getElementById('container'));

var PLAYERS = [
  {
    name: "Boob MacPherson",
    score: 31,
    id: 1,
  },
  {
    name: "Tit Xchu",
    score: 300,
    id: 2,
  },
  {
    name: "Gifty Phelps",
    score: 2,
    id: 3,
  },
];

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

// component class (versus a stateless functional component)
// we use this when state is necessary
var Counter = React.createClass({
  propTypes: {
    score: React.PropTypes.number.isRequired,
  },
  render: function() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
});

// unused stateless functional component EXAMPLE
// function Counter(props) {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement"> - </button>
//       <div className="counter-score"> {props.score} </div>
//       <button className="counter-action increment"> + </button>
//     </div>
//   );
// }

// Counter.propTypes = {
//   score: React.PropTypes.number.isRequired,
// }

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score}/>
      </div>
    </div>
  );
}

// not sure if I need this
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}

// components should start with a capital letter
function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />

      <div className="players">
        {props.players.map(function(player) {
          return <Player name={player.name} score={player.score} key={player.id} />
        })}
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
}

Application.defaultProps = {
  title: "Scoreboard",
}

ReactDOM.render(<Application players={PLAYERS}/>, document.getElementById('container'));
