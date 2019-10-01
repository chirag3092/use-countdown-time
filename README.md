# use-countdown-time
React hook Timer with Forward Backword direction.
 

[![NPM](https://img.shields.io/npm/v/use-countdown-time.svg)](https://www.npmjs.com/package/use-countdown-time)

## Install

```bash
yarn add use-countdown-time
```

## Usage

```js
import React from 'react'
import useTimer, { FORWARD, BACKWARD } from "use-countdown-time";

function Timer() {
  const duration = 60 * 60 * 24 * 7 * 2;
  const timerOptions = {
    direction: BACKWARD,
    durationStep: 1,
    durationInterval: 1000
  };

  const { weeks, days, hours, minutes, seconds, isDone } = useTimer(
    duration,
    timerOptions
  );
  return (
    <div className="App">
      {!isDone ? (
        <div>
          Now {weeks}: {days}: {hours}:{minutes}:{seconds} times left{" "}
        </div>
      ) : (
        "Time Up"
      )}{" "}
    </div>
  );
}
```

## License

MIT © [chirag](https://github.com/chirag3092)
