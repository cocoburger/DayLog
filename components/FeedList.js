import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

function FeedList({logs, onScrolledToBottom}) {
  /**
   * contentSize는 FlatList 내부 전체의 크기, layoutMeasurement.height는 화면에 나타난 FlatList의 실제 크기
   *
   */
  const onScroll = e => {
    // onScrolledToBottom 없을 수도 있으니 해당 함수 종료
    if (!onScrolledToBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    //내부 전체의 크기가 더 크거나 72보다 작으면 true로 바꾸어준다.
    if (contentSize > layoutMeasurement && distanceFromBottom < 72) {
      onScrolledToBottom(true);
    } else {
      onScrolledToBottom(false);
    }
  };
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
