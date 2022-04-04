import useTimer from '@hooks/useTimer';
import type { NextPage } from 'next';
import { tw } from 'twind';

const NumberContainer: React.FC<{
  value: number;
  unit: string;
  danger?: boolean;
}> = ({ value, unit, danger = false }) => (
  <section className={tw(`flex justify-center space-x-2`)}>
    <Number danger={danger}>
      {value < 10 ? '0' : ''}
      {value}
    </Number>
    <Unit danger={danger}>{unit}</Unit>
  </section>
);

const Number: React.FC<{ danger?: boolean }> = ({
  danger = false,
  children,
}) => (
  <h1
    className={tw(
      `text-7xl w-28 sm:(text-8xl w-36) md:(text-9xl w-48) text-right ${
        danger ? 'text-red-600' : 'text-white'
      }`
    )}
  >
    {children}
  </h1>
);

const Unit: React.FC<{ danger?: boolean }> = ({ danger = false, children }) => (
  <p className={tw(`self-end ${danger ? 'text-red-600' : 'text-white'}`)}>
    {children}
  </p>
);

const Home: NextPage = () => {
  const {
    elapsedTime: { years, days, hours, minutes, seconds },
  } = useTimer({ initialState: { hasStarted: true, isRunning: true } });

  return (
    <main
      className={tw(
        `font-["Oswald"] w-full h-screen bg-black`,
        `flex flex-col justify-center space-y-8`
      )}
    >
      <NumberContainer value={years} unit="YRS" danger={years < 1} />
      <NumberContainer value={days} unit="DAY" danger={years < 1 && days < 1} />
      <NumberContainer
        value={hours}
        unit="HRS"
        danger={years < 1 && days < 1 && hours < 1}
      />
      <NumberContainer
        value={minutes}
        unit="MIN"
        danger={years < 1 && days < 1 && hours < 1 && minutes < 1}
      />
      <NumberContainer
        value={seconds}
        unit="SEC"
        danger={
          years < 1 && days < 1 && hours < 1 && minutes < 1 && seconds < 1
        }
      />
    </main>
  );
};

export default Home;
