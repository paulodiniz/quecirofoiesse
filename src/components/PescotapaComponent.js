import React from 'react';


const PescotapaComponent = ({activateCiroFn, animated, animatedClassName, score}) => {
    return (
        <div>
          <div id="pescotapa" className={animatedClassName} />

          <button onClick={activateCiroFn} disabled={animated}>
            ACTIVATE CIRO
          </button>

          <div>
            <p> {score} </p>
          </div>
        </div>
    );
};


export default PescotapaComponent;
