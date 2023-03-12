import { Button } from '@common-components';
import { FC, ReactNode } from 'react';

interface ButtonCardProps {
  children: ReactNode;
}
const ButtonCard: FC<ButtonCardProps> = ({ children }) => {
  return (
    <article>
      {children}
      <Button>Button</Button>
    </article>
  );
};

export default ButtonCard;
