import React from 'react';

const PescotapaComponent = ({activateCiroFn, animated, animatedClassName, score, children}) => {
    return (
        <div>
          <h1 className="f-subheadline lh-solid tc mb3 mt3" > Que Ciro Foi Esse? </h1>
          <div className="dt mw9 center pt4">
            <div className="db dtc-ns v-mid-ns">
              <div id="pescotapa" className={animatedClassName} />
            </div>
            <div className="db dtc-ns v-mid ph2 pr0-ns pl4-ns">
              <div className="f1 tc">
                <p className="mb3"> {score} </p>
              </div>
              <button onClick={activateCiroFn} disabled={animated} className="bw0 br2 bg-blue pa2 white fw1 tc ttu tracked grow pointer">
                Mamãe avisou
              </button>
              <div className="pt3">
                {children}
              </div>
            </div>
          </div>
        </div>
    );
};


export default PescotapaComponent;
