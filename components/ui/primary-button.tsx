import { useRef } from "react";
import { Animated, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface PrimaryButtonProps extends Omit<TouchableOpacityProps, "className"> {
  label: string;
  icon?: string;
  className?: string;
}

export function PrimaryButton({
  label,
  icon,
  onPress,
  className = "",
  ...rest
}: PrimaryButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;

  function handlePressIn() {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  }

  function handlePressOut() {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  }

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
        shadowColor: "#dc2626",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 6,
        borderRadius: 16,
      }}
      className={className}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="w-full bg-red-600 rounded-2xl py-4 flex-row items-center justify-center gap-2"
        {...rest}
      >
        {icon && (
          <Text className="text-white text-lg font-bold">{icon}</Text>
        )}
        <Text className="text-white text-base font-bold tracking-wide">
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
