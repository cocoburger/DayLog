import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from './contexts/LogContext';
function FeedScreen(props) {
  const value = useContext(LogContext);
    return (
    <View style={styles.block}>
      <Text>{value}</Text>
    </View>

  );
}
function Box({children}) {
    console.log(children);
  return <View style={styles.box}>{children('hello world')}</View>;
}

const styles = StyleSheet.create({
  block: {},
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
});

export default FeedScreen;
