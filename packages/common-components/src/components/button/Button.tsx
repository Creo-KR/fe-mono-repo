import { FC, HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: 'red' | 'blue';
}

const Button: FC<ButtonProps> = props => {
  return (
    <button
      {...props}
      className={`${props.className || ''} ${props.color || ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
