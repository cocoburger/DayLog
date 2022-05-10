import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import TransparentCircleButton from './TransparentCircleButton';

function WriteHeader({onSave, onAskRemove, isEditing}) {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView>
      <View style={styles.block}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
        <View style={styles.buttons}>
          {isEditing && (
            <TransparentCircleButton
              name="delete-forever"
              color="#ef5350"
              hasMarginRight
              onPress={onAskRemove}
            />
          )}
          <TransparentCircleButton
            name="check"
            color="#009688"
            onPress={onSave}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default WriteHeader;
