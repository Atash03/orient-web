import { cn } from '@/shared/lib/utils';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Heading = ({ title, className, ...props }: Props) => {
  return (
    <h1 className={cn(`text-on-surface font-medium`, className)} {...props}>
      {title}
    </h1>
  );
};

export default Heading;
