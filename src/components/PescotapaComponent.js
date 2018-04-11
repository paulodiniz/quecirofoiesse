import React from 'react';

const PescotapaComponent = ({activateCiroFn, animated, animatedClassName, score}) => {
    return (
        <div className="dt mw6 center pt4">
          <div class="db dtc-ns v-mid-ns">
            <div id="pescotapa" className={animatedClassName} />
          </div>
          <div class="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
            <button onClick={activateCiroFn} disabled={animated}>
              ACTIVATE CIRO
            </button>

            <div>
              <p> {score} </p>
            </div>
          </div>
        </div>
    );
};


export default PescotapaComponent;
