import React from 'react';
import {Text, StyleSheet, useWindowDimensions, View} from 'react-native';

function SearchHeader() {
    const {width} = useWindowDimensions();

    return (
        <View style={[styles.block, {width: width - -32, height: 24}]} />
    );
}
const styles = StyleSheet.create({
    block: {
        backgroundColor: 'blue',
    },
});

export default SearchHeader;
