import React, { Component } from 'react';

import PescotapaComponent from '../components/PescotapaComponent'

class Pescotapa extends Component {

    constructor(props) {
        super(props);
        this.state = { animated: false, score: 0}
        this.activateCiro = this.activateCiro.bind(this)
    }

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
        let animatedClassName = this.state.animated ? "animated" : ' ';
        return(
            <PescotapaComponent
                activateCiroFn={this.activateCiro}
                animated={this.state.animated}
                animatedClassName={animatedClassName}
                score={this.state.score}
            />
        )
    }
}

export default Pescotapa;
