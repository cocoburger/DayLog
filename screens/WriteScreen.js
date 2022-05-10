import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import TransparentCircleButton from '../components/TransparentCircleButton';
import WriteHeader from './WriteHeader';

function WriteScreen() {
  return (
    <SafeAreaView>
      <WriteHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default WriteScreen;
