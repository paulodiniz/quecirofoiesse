import React, { Component } from 'react';

class Pescotapa extends Component {
    state = { animated: false, score: 0}

    increaseScore(state, props) {
        return { score: state.score + 1 }
    }

    animateCiro(state, props) {
        return { animated: true }
    }

    resetCiro(state, props) {
        return { animated: false }
    }

    activateCiro() {
        this.setState(this.animateCiro);
        this.setState(this.increaseScore);
        setTimeout(() => {
            this.setState(this.resetCiro)
          }, 800);
    }

    render() {
        let animated = this.state.animated ? "animated" : ' ';
        return(
            <div>
              <div id="pescotapa" className={animated} />

              <button onClick={() => this.activateCiro()} disabled={this.state.animated}>
                ACTIVATE CIRO
              </button>

              <div>
                <p> {this.state.score} </p>
              </div>
            </div>
        )
    }
}

export default Pescotapa;
