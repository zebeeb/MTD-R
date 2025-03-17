import { createIconComponent } from '@tamagui/helpers';
import { Icon as ExpoIcon } from 'expo-symbols';

type IconSymbolProps = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
};

const IconMapping = {
  'list.bullet': 'list',
  'shopping.cart': 'shopping-cart',
  'house.fill': 'home',
} as const;

export const IconSymbol = createIconComponent({
  getSize: (size: number | string) => +size,
  Component: ({ size, color, name, style }: IconSymbolProps) => (
    <ExpoIcon 
      name={name} 
      size={size} 
      color={color}
      style={style}
    />
  ),
});