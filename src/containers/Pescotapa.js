import React, { Component } from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

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

    animatedClassName() {
        return this.state.animated ? "animated" : ' ';
    }

    activateCiro() {
        this.setState(this.animateCiro);
        this.setState(this.increaseScore);
        setTimeout(() => {
            this.setState(this.resetCiro)
          }, 800);
    }

    render() {
        const url = "http://github.com";
        const quote = "Github";
        return(
            <PescotapaComponent
                activateCiroFn={this.activateCiro}
                animated={this.state.animated}
                animatedClassName={this.animatedClassName()}
                score={this.state.score}>
              <FacebookShareButton url={url} quote={quote} className="share-button">
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </PescotapaComponent>
        )
    }
}

export default Pescotapa;
