import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../Context/ThemeContext";
import { Styles } from "../Styles/GlobalStyles";

interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue?: boolean;
  isGray?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  isBlue,
  isGray,
}: ButtonProps) {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === "dark"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
