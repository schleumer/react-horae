import React from 'react';
import ReactDOM from 'react-dom';

import DateTime from './index';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'App';
      this.dateChanged = this.dateChanged.bind(this);
    }

    dateChanged(value) {
      console.log(value);
    }

    render() {
        return (
          <div>
            <div style={{width: '450px'}}>
              <DateTime  onChange={this.dateChanged} />
            </div>
            <div style={{width: '450px'}}>
              <DateTime />
            </div>
            <div style={{width: '450px'}}>
              <DateTime />
            </div>
            <div style={{width: '450px'}}>
              <DateTime />
            </div>
            <div style={{width: '450px'}}>
              <DateTime />
            </div>
          </div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);