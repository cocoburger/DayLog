import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

function FeedScreen() {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default FeedScreen;
