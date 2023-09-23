import React, { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(0,0,0,${interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 0.5],
      Extrapolate.CLAMP
    )})`,
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#000",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  const blurViewProps = useAnimatedProps(() => {
    return {
      intensity: interpolate(
        animatedIndex.value,
        [0, 1],
        [0, 20],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <AnimatedBlurView
      //intensity={intensity.value}
      animatedProps={blurViewProps}
      style={[
        style,
        { flex: 1, backgroundColor: "rgba(0,0,0,0.5)" },
        containerStyle,
      ]}
    />
  );
};

export default CustomBackdrop;
