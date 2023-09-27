import { Cast } from '@types';

const Credits = ({ credits }: { credits: Cast[] }) => {
  const imageURL = (path: string) =>
    path
      ? `https://image.tmdb.org/t/p/w90_and_h90_face/${path}`
      : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ul className='flex flex-col gap-2'>
      {credits.map((credit) => {
        return (
          <li className='flex items-center gap-2' key={credit.id}>
            <img
              src={imageURL(credit.profile_path)}
              width={90}
              height={90}
              alt={credit.original_name}
            />
            <span>{credit.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Credits;
