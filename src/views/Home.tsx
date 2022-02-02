import React, { useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Colors from "../styles/colors";
import * as Spacing from "../styles/Spacing";
import { useTypedDispatch, useTypedSelector } from "../store";
import { getAllActiveWorkouts } from "../store/workouts";
import Timer from "../components/Timer";

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.DARK,
    ...Spacing.largePadding,
  },
  inputPromptContainer: {
    flex: 1,
  },
  enterANumberText: {
    color: Colors.PRIMARY,
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    ...Spacing.marginVertical,
    ...Spacing.padding,
    backgroundColor: Colors.LIGHT,
    color: "black",
    fontSize: 18,
    borderRadius: 8,
  },
  feedbackContainer: {
    flexDirection: "row",
    width: "100%",
  },
  feedbackButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  feebackButtonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

const HomeScreen: React.FC = () => {
  // Store values
  const dispatch = useTypedDispatch();

  const activeWorkouts = getAllActiveWorkouts(
    useTypedSelector((state) => state)
  );

  return (
    <View style={Styles.background}>
      <View style={Styles.inputPromptContainer}>
        {activeWorkouts.map((workout, index) => (
          <Text key={index}>
            {workout.exercises}-{workout.restTime}
          </Text>
        ))}
      </View>
      <View>
        <Timer />
      </View>
      <View style={Styles.feedbackContainer}>
        <TouchableOpacity style={Styles.feedbackButton}>
          <Text style={[Styles.feebackButtonText, { color: Colors.PRIMARY }]}>
            EXERCISES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.feedbackButton}>
          <Text style={[Styles.feebackButtonText, { color: Colors.SECONDARY }]}>
            WORKOUTS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
