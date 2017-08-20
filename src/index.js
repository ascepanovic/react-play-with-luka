import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function formatDate(date) {
    return date.toLocaleDateString();
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


function Welcome(props){
  return <h3>Hello, {props.name} ({props.nickname}) {props.surname}</h3>;
}

const welcomeEl = <Welcome name="Aco" surname="Scepanovic" nickname="Coa" />;

//wrap multiple stuff in one function
function Names(){
  return (
      <div>
        <Welcome name="Luka" nickname="Lux" surname="Kulusic" />
        <Welcome name="John" nickname="Jhony" surname="Doe" />
        <Welcome name="Simmy" nickname="Sim" surname="Klacker" />
      </div>
  );
}


//Comment component
function Comment(props) {
    return (
    <div className="Comment">
          <div className="UserInfo">
            <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />

            <div className="UserInfo-name">
              {props.author.name}
            </div>
          </div>
          <div className="Comment-text">
              {props.text}
          </div>
          <div className="Comment-date">
              {formatDate(props.date)}
          </div>
    </div>
);
}

//and then our comment as constant - should be pulled in from api
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};


//Example class for Clock
class Clock extends React.Component {
    render() {
        return (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }
}

//function in charge of realtime clock
function tick() {
    ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
);
}

//rendering
//setInterval(tick, 1000);

ReactDOM.render(
  //element,
  //<Names />,
<Comment
date={comment.date}
text={comment.text}
author={comment.author} />,
  document.getElementById('root')
);
