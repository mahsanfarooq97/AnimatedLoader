import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring } from 'react-native-reanimated'
import { SafeAreaView } from 'react-navigation'
const SIZE = 30
const AnimatedLoader = () => {
    const Scale = useSharedValue(1)
    const opacity = useSharedValue(1)
    const AnimatedStyling = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: Scale.value,
                },
                {
                    rotate: `${opacity.value * 5 * Math.PI}rad`
                }],
            opacity: opacity.value,
            borderRadius: (opacity.value * SIZE) / 2,
        }
    }, [])
    useEffect(() => {
        Scale.value = withRepeat(withSpring(3), -1, true)
        opacity.value = withRepeat(withSpring(0.5), -1, true)
    }, [])
    return (
        <SafeAreaView style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }} >
            <Animated.View
                style={[{
                    width: SIZE,
                    height: SIZE,
                    backgroundColor: 'purple'
                }, AnimatedStyling]}
            />
        </SafeAreaView>
    )
}

export default AnimatedLoader

const styles = StyleSheet.create({})