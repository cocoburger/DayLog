import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchContext from '../contexts/SearchContext';
import LogContext from '../contexts/LogContext';
import FeedList from '../components/FeedList';

function SearchScreen({navigation}) {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);
  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default SearchScreen;
