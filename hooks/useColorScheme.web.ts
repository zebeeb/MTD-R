import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 * This implementation ensures we always return a valid theme value to prevent errors
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  // During hydration or if colorScheme is undefined, return 'light'
  if (!hasHydrated || colorScheme === undefined || colorScheme === null) {
    return 'light';
  }

  return colorScheme;
}
