import { useCallback, useEffect } from 'react';
import useInterval from '@use-it/interval';
import { useReduction } from '@hooks/useReduction';

export interface TimerDuration {
  years: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimerDurationCallbacks {
  onYear: (elapsedTime: TimerDuration) => void;
  onDay: (elapsedTime: TimerDuration) => void;
  onHour: (elapsedTime: TimerDuration) => void;
  onMinute: (elapsedTime: TimerDuration) => void;
  onSecond: (elapsedTime: TimerDuration) => void;
}

export interface TimerCallbacks extends TimerDurationCallbacks {
  onTick: (elapsedTime: TimerDuration) => void;
  onStart: (elapsedTime: TimerDuration) => void;
  onPause: (elapsedTime: TimerDuration) => void;
}

export interface TimerState {
  hasStarted: boolean;
  isRunning: boolean;
  speed: 'normal' | 'fast';
  elapsedTime: TimerDuration;
}

const getRandom = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const DEFAULT_TIMER_STATE: TimerState = {
  hasStarted: false,
  isRunning: false,
  speed: 'normal',
  elapsedTime: {
    years: getRandom(0, 99),
    days: getRandom(0, 364),
    hours: getRandom(0, 23),
    minutes: getRandom(0, 59),
    seconds: getRandom(0, 59),
  },
};

export const decrementDuration = (
  duration: TimerDuration,
  { onYear, onDay, onHour, onMinute, onSecond }: Partial<TimerDurationCallbacks>
): TimerDuration => {
  if (duration.seconds > 0) {
    const updatedDuration = { ...duration, seconds: duration.seconds - 1 };
    onSecond?.(updatedDuration);

    return updatedDuration;
  }

  if (duration.minutes > 0) {
    const updatedDuration = {
      ...duration,
      minutes: duration.minutes - 1,
      seconds: 59,
    };
    onMinute?.(updatedDuration);

    return updatedDuration;
  }

  if (duration.hours > 0) {
    const updatedDuration = {
      ...duration,
      hours: duration.hours - 1,
      minutes: 59,
      seconds: 59,
    };
    onHour?.(updatedDuration);

    return updatedDuration;
  }

  if (duration.days > 0) {
    const updatedDuration = {
      ...duration,
      days: duration.days - 1,
      hours: 23,
      minutes: 59,
      seconds: 59,
    };
    onDay?.(updatedDuration);

    return updatedDuration;
  }

  if (duration.years > 0) {
    const updatedDuration = {
      ...duration,
      years: duration.years - 1,
      days: 364,
      hours: 23,
      minutes: 59,
      seconds: 59,
    };
    onYear?.(updatedDuration);

    return updatedDuration;
  }

  return duration;
};

export const tick = (
  elapsedTime: TimerDuration,
  setState: React.Dispatch<Partial<TimerState>>,
  { onHour, onMinute, onSecond, onTick }: Partial<TimerCallbacks> = {}
) => {
  const updatedState = {
    elapsedTime: decrementDuration(elapsedTime, {
      onHour,
      onMinute,
      onSecond,
    }),
  };

  setState(updatedState);
  onTick?.(updatedState.elapsedTime);
};

export const useTimer = (
  options?: Partial<
    {
      initialState: Partial<
        TimerState | { elapsedTime: Partial<TimerDuration> }
      >;
    } & TimerCallbacks
  >
) => {
  const [state, setState] = useReduction<TimerState>(
    (options?.initialState && {
      ...DEFAULT_TIMER_STATE,
      ...options.initialState,

      elapsedTime: options?.initialState?.elapsedTime
        ? {
            ...DEFAULT_TIMER_STATE.elapsedTime,
            ...options?.initialState?.elapsedTime,
          }
        : DEFAULT_TIMER_STATE.elapsedTime,
    }) ??
      DEFAULT_TIMER_STATE
  );
  const { isRunning, elapsedTime, speed } = state;
  const onTick = useCallback(
    (elapsedTime: TimerDuration) => options?.onTick?.(elapsedTime),
    [options]
  );
  const onYear = useCallback(
    (elapsedTime: TimerDuration) => options?.onYear?.(elapsedTime),
    [options]
  );
  const onDay = useCallback(
    (elapsedTime: TimerDuration) => options?.onDay?.(elapsedTime),
    [options]
  );
  const onHour = useCallback(
    (elapsedTime: TimerDuration) => options?.onHour?.(elapsedTime),
    [options]
  );
  const onMinute = useCallback(
    (elapsedTime: TimerDuration) => options?.onMinute?.(elapsedTime),
    [options]
  );
  const onSecond = useCallback(
    (elapsedTime: TimerDuration) => options?.onSecond?.(elapsedTime),
    [options]
  );
  const onStart = useCallback(
    (elapsedTime: TimerDuration) => options?.onStart?.(elapsedTime),
    [options]
  );
  const onPause = useCallback(
    (elapsedTime: TimerDuration) => options?.onPause?.(elapsedTime),
    [options]
  );

  const start = () => {
    setState({ hasStarted: true, isRunning: true });
    onStart?.(elapsedTime);
  };

  const pause = () => {
    setState({ isRunning: false });
    onPause?.(elapsedTime);
  };

  const toggle = isRunning ? pause : start;

  // TODO: Validate that seconds/minutes is less than 60 and update accordingly
  const set = (duration: Partial<TimerDuration>) => {
    setState({
      elapsedTime: { ...elapsedTime, ...duration },
    });
  };

  const toggleSpeed = () => {
    switch (speed) {
      case 'normal':
        setState({ speed: 'fast' });
        break;
      default:
        setState({ speed: 'normal' });
        break;
    }
  };

  useInterval(
    () =>
      tick(elapsedTime, setState, {
        onYear,
        onDay,
        onHour,
        onMinute,
        onSecond,
        onTick,
        onStart,
        onPause,
      }),
    isRunning ? (speed === 'normal' ? 1000 : 1) : null
  );

  return { ...state, start, pause, toggle, set, toggleSpeed };
};

export default useTimer;
