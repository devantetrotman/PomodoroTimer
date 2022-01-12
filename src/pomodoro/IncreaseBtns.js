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
    function stopTimer(){
        console.log("stopped timer",session);
        setSession(null);
        setIsTimerRunning(false);
      }

      function playPause() {
        console.log("play pause",session,isTimerRunning)
        setInitialFocusDuration(focusDuration);
        setIsTimerRunning((prevState) => {
          const nextState = !prevState;
          if (nextState) {
            setSession((prevStateSession) => {
              // If the timer is starting and the previous session is null,
              // start a focusing session.
              if (prevStateSession === null) {
                return {
                  label: "Focusing",
                  timeRemaining: focusDuration * 60,
                };
              }
              return prevStateSession;
            });
          }
          return nextState;
        });
      }

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
      <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
          {session === null ? (
            /* TODO: Disable the stop button when there is no active session */
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            disabled
          >
            <span className="oi oi-media-stop" />
          </button>
          ) : (
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            onClick={stopTimer}
          >
            <span className="oi oi-media-stop" />
          </button>
          )}
        </div>
      </div>
    </div>
    </div>
    );
}

export default IncreaseBtns;