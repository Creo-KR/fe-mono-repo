import { FC, HTMLAttributes } from 'react';
import { css } from '@emotion/react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: 'red' | 'blue';
}

const Button: FC<ButtonProps> = props => {
  return (
    <button
      {...props}
      css={css`
        color: #f0f;
        background-color: ${props.color};
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
