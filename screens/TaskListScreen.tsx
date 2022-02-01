import React, { VFC } from 'react';
// import tw from 'tailwind-rn';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { selectTag } from '../slices/todoSlice';
// import { MaterialIcons } from '@expo/vector-icons';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList, Task } from '../types/types';
// import { Title } from '../components/Title';
// import { TaskItem } from '../components/TaskItem';
// import { useToggleDeleteTask } from '../hooks/useToggleDeleteTask';
// import { useGetTasks } from '../hooks/useGetTasks';

export const TaskListScreen = () => {
  const tag = useSelector(selectTag);

  return (
    <SafeAreaView>
      <Text>Task List</Text>
      <Text>{tag.name}</Text>
    </SafeAreaView>
  );
};
