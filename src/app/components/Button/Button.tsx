import React, { memo } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends ButtonProps {
  children: any;
}

export const Button = memo(({ children, ...rest }: Props) => {
  return (
    <>
      <button {...rest}>{children}</button>
    </>
  );
});
