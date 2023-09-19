import * as React from 'react';

import type { ButtonProps as RacButtonProps } from 'react-aria-components';
import { Button as RacButton } from 'react-aria-components';

import { cn } from 'shared-lib';

export type ButtonProps = RacButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    const className = cn(
      'rounded bg-blue-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-blue-700',
      props.className
    );

    return (
      <RacButton {...props} className={className} ref={ref}>
        {children}
      </RacButton>
    );
  }
);

Button.displayName = 'Button';
