import { Cast } from '@types';

const Credits = ({ credits }: { credits: Cast[] }) => {
  return (
    <ul className='flex flex-col gap-1'>
      {credits.map((credit) => {
        return <li key={credit.id}>{credit.name}</li>;
      })}
    </ul>
  );
};

export default Credits;
