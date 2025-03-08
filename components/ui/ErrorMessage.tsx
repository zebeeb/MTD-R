
// A simple error message component for displaying errors to users
import React from 'react';
import { View, Text, Button, XStack, YStack } from 'tamagui';
import { formatErrorMessage } from '../../utils/errors/errorUtils';

interface ErrorMessageProps {
  error: unknown;
  onRetry?: () => void;
  testID?: string;
}

/**
 * A simple, reusable error message component
 * Used to display errors to users consistently throughout the app
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  onRetry,
  testID = 'error-message'
}) => {
  const errorMessage = formatErrorMessage(error);
  
  return (
    <YStack 
      padding="$4" 
      marginVertical="$2"
      borderRadius="$4"
      backgroundColor="$red2"
      borderColor="$red5"
      borderWidth={1}
      testID={testID}
    >
      <Text color="$red10" fontWeight="bold" marginBottom="$1">
        Error
      </Text>
      <Text color="$red10" marginBottom={onRetry ? "$2" : 0}>
        {errorMessage}
      </Text>
      
      {onRetry && (
        <XStack marginTop="$2">
          <Button 
            size="$3"
            onPress={onRetry}
            backgroundColor="$red5"
            hoverStyle={{ backgroundColor: '$red6' }}
            pressStyle={{ backgroundColor: '$red7' }}
            testID={`${testID}-retry-button`}
          >
            <Text color="white">Try Again</Text>
          </Button>
        </XStack>
      )}
    </YStack>
  );
};

export default ErrorMessage;
