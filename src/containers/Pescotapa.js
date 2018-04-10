import React, { Component } from 'react';

class Pescotapa extends Component {

    constructor(props) {
        super(props);
        this.activateCiro = this.activateCiro.bind(this);
    }

    activateCiro() {
        console.log("CIRO");
    }

    render() {
        return(
            <div>
              <div id="pescotapa">
              </div>

              <button onClick={this.activateCiro}>
                ACTIVATE CIRO
              </button>
            </div>
        )
    }
}

export default Pescotapa;
