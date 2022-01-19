import React from "react";
import {secondsToDuration} from "../utils/duration";
import {minutesToDuration} from "../utils/duration";

function Hidden({isTimerRunning, 
    session, 
    focusDuration, 
    initialFocusDuration, 
    breakDuration}){
    return(
    <div>
        {session != null ? (
            /* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */
        <div>
          <div className="row mb-2">
            <div className="col">
              {session.label === "Focusing" ?(
                /* TODO: Update message below to include current session (Focusing or On Break) total duration */
              <h2 data-testid="session-title">
                  {session.label} for {minutesToDuration(focusDuration)} minutes
              </h2>) 
              : (<h2 data-testid="session-title">
                {session.label} for {minutesToDuration(breakDuration)} minutes
              </h2>)
              }
              {/* TODO: Update message below correctly format the time remaining in the current session */}
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session.timeRemaining)} remaining
              </p>
              { session.timeRemaining !== 0 && isTimerRunning === false ?(
                <span
                  >PAUSED</span>
              ) : <span></span>}
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={(1 - (session.timeRemaining/(initialFocusDuration * 60))) * 100} // TODO: Increase aria-valuenow as elapsed time increases
                  style={{ width: `${(1 - (session.timeRemaining/(initialFocusDuration * 60))) * 100}%` }} // TODO: Increase width % as elapsed time increases
                />
              </div>
            </div>
          </div>
        </div>
          ) : (<div> </div>)}
      </div>
    );
}

export default Hidden;
