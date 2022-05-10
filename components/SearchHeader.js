import React from 'react';
import {Text, StyleSheet} from 'react-native';

function SearchHeader() {
    return (
        <Text style={styles.block}> Hello </Text>
    );
}
const styles = StyleSheet.create({
    block: {
        color: 'white',
        backgroundColor: 'blue',
    },
});

export default SearchHeader;
