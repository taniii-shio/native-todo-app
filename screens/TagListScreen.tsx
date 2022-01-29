import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { SafeAreaView, Text, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { auth } from '../firebaseConfig';
import { selectUser, logout } from '../slices/userSlice';
import { IconButton } from '../components/IconButton';

export const TagListScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const tw = useTailwind();

  const signOut = async () => {
    try {
      await auth.signOut();
      dispatch(logout());
    } catch {
      Alert.alert('Logout error');
    }
  };
  return (
    <SafeAreaView style={tw('flex-1 mt-5 items-center')}>
      <Text>{user.email}</Text>
      <IconButton
        name="logout"
        size={20}
        color="blue"
        onPress={signOut}
      ></IconButton>
    </SafeAreaView>
  );
};
