import React, { VFC } from 'react';
import { useTailwind } from 'tailwind-rn';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStackNavigator } from './AuthStackNavigator';
import { TagStackNavigator } from './TagStackNavigator';
import { useAuthState } from '../hooks/useAuthState';

export const RootNavigator: VFC = () => {
  const { user, isLoading } = useAuthState();
  const tw = useTailwind();

  if (isLoading) {
    return (
      <SafeAreaView style={tw('flex-1 items-center justify-center')}>
        <ActivityIndicator size="large" color="gray" />
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      {user?.uid ? <TagStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
