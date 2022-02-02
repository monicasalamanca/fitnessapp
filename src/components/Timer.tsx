import React from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Constants from "expo-constants";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const Timer = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors="#004777"
        onComplete={() => {
          return [true, 0];
        }}
      >
        {({ remainingTime }) => (
          <Animated.Text style={{ ...styles.remainingTime }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
});

export default Timer;
