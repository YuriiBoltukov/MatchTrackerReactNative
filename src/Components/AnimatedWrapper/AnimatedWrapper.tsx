import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Animated, View } from "react-native";

export const AnimatedWrapper = forwardRef(
  (
    {
      value,
      children,
      animationType = "fade",
      duration = 300,
      delay = 0,
      onEnd,
    }: {
      value: number;
      children: React.ReactNode;
      animationType?: "fade" | "scale" | "slide";
      duration?: number;
      delay?: number;
      onEnd?: () => void;
    },
    ref,
  ) => {
    const animValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      startAnimation();
    }, [value]);

    const startAnimation = () => {
      let animation;

      switch (animationType) {
        case "fade":
          animation = Animated.sequence([
            Animated.timing(animValue, {
              toValue: 0,
              duration: duration / 2,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(animValue, {
              toValue: 1,
              duration: duration / 2,
              useNativeDriver: true,
            }),
          ]);
          break;

        case "scale":
          animation = Animated.sequence([
            Animated.timing(animValue, {
              toValue: 0.8,
              duration: duration / 2,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(animValue, {
              toValue: 1,
              duration: duration / 2,
              useNativeDriver: true,
            }),
          ]);
          break;

        case "slide":
          animValue.setValue(-35);
          animation = Animated.timing(animValue, {
            toValue: 0,
            duration,
            delay,
            useNativeDriver: true,
          });
          break;

        default:
          animation = Animated.timing(animValue, {
            toValue: 1,
            duration,
            useNativeDriver: true,
          });
      }

      animation.start(() => onEnd && onEnd());
    };

    useImperativeHandle(ref, () => ({
      triggerAnimation: startAnimation, // Позволяет запустить анимацию вручную
    }));

    return (
      <Animated.View
        style={[
          animationType === "fade" && { opacity: animValue },
          animationType === "scale" && { transform: [{ scale: animValue }] },
          animationType === "slide" && {
            transform: [{ translateY: animValue }],
          },
        ]}
      >
        {children}
      </Animated.View>
    );
  },
);
