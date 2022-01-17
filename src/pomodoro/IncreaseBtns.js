import classNames from "../utils/class-names";
import React from "react";
import {minutesToDuration} from "../utils/duration";

function IncreaseBtns({isTimerRunning, 
    session, 
    focusDuration, 
    initialFocusDuration, 
    breakDuration,
    setSession,
    setFocusDuration,
    setBreakDuration,
    setInitialFocusDuration,
    setIsTimerRunning }){
    

    return (
        <div>
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(focusDuration)}
              
            </span>
            <div className="input-group-append">
               {/* TODO: Implement decreasing focus duration and disable during a focus or break session  */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                disabled = {isTimerRunning === true || focusDuration === 5}
                onClick={() => setFocusDuration(focusDuration - 5)}
              >
                
                  <span className="oi oi-minus" />
              </button>
              
              
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                disabled = {isTimerRunning === true || focusDuration === 60}
                onClick={() => setFocusDuration(focusDuration + 5)}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(breakDuration)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={() => setBreakDuration(breakDuration - 1)}
                  disabled={isTimerRunning === true || breakDuration === 1}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={() => setBreakDuration(breakDuration + 1)}
                  disabled={isTimerRunning === true || breakDuration === 15}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default IncreaseBtns;
