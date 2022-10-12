import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // the state and effect used in useCounter will be tied to the ForwardCounter
  // if we call the custom hook in different places its own state will be tied to where ever its called
  // custom hooks returns things
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
