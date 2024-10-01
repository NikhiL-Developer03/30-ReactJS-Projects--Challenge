import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from 'react-scroll-trigger';
const CounterPage = () => {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="px-40 py-12 border-black">
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="grid grid-cols-4 text-center px-20 pt-50">
          <div>
            <h2 className="text-4xl font-bold text-zinc-950">
              { counterState &&
                <CountUp start={0} end={95} duration={2.75}></CountUp>
                }%
            </h2>
            <p className="py-2 text-zinc-950 font-medium">Success Rate</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-zinc-950">
            { counterState &&
                <CountUp start={0} end={55} duration={2.75}></CountUp>
                }%
            </h2>
            <p className="py-2 text-zinc-950 font-medium">Complete Projects</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-zinc-950">
            { counterState &&
                <CountUp start={0} end={25} duration={2.75}></CountUp>
                }%
            </h2>
            <p className="py-2 text-zinc-950 font-medium">Satisdied Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-zinc-950">
            { counterState &&
                <CountUp start={0} end={15} duration={2.75}></CountUp>
                }%
            </h2>
            <p className="py-2 text-zinc-950 font-medium">Trade In the World</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CounterPage;
