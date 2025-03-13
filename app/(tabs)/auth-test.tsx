
/**
 * Auth test screen
 */
import { StyleSheet } from 'react-native';
import { View } from 'tamagui';
import { AuthTest } from '../../components/AuthTest';

export default function AuthTestScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <AuthTest />
    </View>
  );
}
