import React, {useEffect, useRef} from 'react';
import {View, Platform, Pressable, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function FloatingWriteButton({hidden}) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Write');
  };

  const animation = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   Animated.timing(animation, {
  //     toValue: hidden ? 1 : 0,
  //     useNativeDriver: true,
  //   }).start();
  // }, [animation, hidden]);

    /**
     * tension : 강도(기본값 40)
     * friction: 감속(기본값 7)
     * speed: 속도(기본값: 12)
     * bounciness: 탄력성(기본값:8)
     * tension / friction && speed / bounciness 조합으로 사용해야 하며, 다른 조합으로 사용 불가하다.
     */
    useEffect(() => {
        Animated.spring(animation, {
            toValue: hidden ? 1 : 0,
            useNativeDriver: true,
            tension: 75,
            friction: 15,
        }).start();
    }, [animation, hidden]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 10],
                outputRange: [0, 88],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: 'white'}}
        onPress={onPress}>
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    //ios 전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // 안드로이드 전용 그림자 설정
    elevation: 5,
    // 안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
    // ios에서는 overflow가 hidden일 경우 그림자가 보여지지 않음
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWriteButton;
