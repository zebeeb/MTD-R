
import React from 'react';
import { IconSymbol } from './IconSymbol';

type ListIconProps = {
  size?: number;
  color?: string;
};

// Reusable icon component that handles list icons consistently
export const ListIcon: React.FC<ListIconProps> = ({ size = 12, color = '#bbb' }) => {
  return (
    <IconSymbol
      name="house.fill"
      size={size}
      color={color}
      style={{ width: size, height: size }}
    />
  );
};
