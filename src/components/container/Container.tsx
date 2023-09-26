import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <section className='container mx-auto text-[20px]'>{children}</section>;
};

export default Container;
