import React, { Component } from 'react';

class Pescotapa extends Component {

    constructor(props) {
        super(props);
        this.state = {animated: false}
        this.activateCiro = this.activateCiro.bind(this);
    }

    activateCiro() {
        this.setState({animated: true})
    }

    render() {
        let animated = this.state.animated ? "animated" : ' ';
        return(
            <div>
              <div id="pescotapa" className={animated} />

              <button onClick={this.activateCiro}>
                ACTIVATE CIRO
              </button>
            </div>
        )
    }
}

export default Pescotapa;
