
import React from 'react';
import { IconSymbol } from './IconSymbol';

type ListIconProps = {
  size?: number;
  color?: string;
};

export const ListIcon: React.FC<ListIconProps> = ({ 
  size = 12, 
  color = '#bbb' 
}) => {
  return (
    <IconSymbol
      name="shopping.cart"
      size={size}
      color={color}
    />
  );
};
