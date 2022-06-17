import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  clear = () => {
    this.setState({ counter: 0 });
  };

  render() {
    return (
      <div
        style={{
          position: 'relative', // positon:relative is positioned relative to its normal positon
        }}
      >
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {' '}
          Counter App{' '}
        </h1>
        <font
          face="Comic sans MS"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {' '}
          Simple code show-casing the usage of state to re-render the Component
          from previous state to Next State.{' '}
        </font>
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
          }}
        >
          {' '}
          {this.state.counter}{' '}
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: 'black',
              border: '2px solid black',
              borderRadius: '15px',
              padding: '8px 20px',
              margin: '20px',
            }}
            onClick={this.increment}
          >
            INCREMENT
          </button>

          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: 'black',
              border: '2px solid black',
              borderRadius: '15px',
              padding: '8px 20px',
            }}
            onClick={this.clear}
          >
            CLEAR
          </button>
        </div>
        <font
          face="Comic sans MS"
          style={{
            position: 'absolute', // position:absolute is positioned relative to the nearest positioned // ancestor, i.e, in this case position:relative in parent div.
            // this is strategically done,wrto relative so as to align to the left of parent div.
            display: 'inline-block',
            left: '10%',
          }}
        >
          <br />
          Each time on click of increment, counter Component changes it state by
          <i> incrementing </i>
          itself by One.
        </font>
      </div>
    );
  }
}

const el = <Counter />;

ReactDOM.render(el, document.getElementById('root'));
