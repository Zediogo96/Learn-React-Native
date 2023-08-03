import React, { ReactNode } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  ViewStyle,
} from "react-native";

interface SafeAreaViewAndroidProps {
  style?: ViewStyle;
  children?: ReactNode;
}

const SafeAreaViewAndroid: React.FC<SafeAreaViewAndroidProps> = ({
  style,
  children,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeAreaViewAndroid;
