import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Button, StyleSheet } from "react-native";

const Flashcard = ({ flashcard }) => {
  const [content, setContent] = useState(flashcard.question); // Initialize with the question

  // Synchronize content state with the flashcard prop when it changes
  useEffect(() => {
    setContent(flashcard.question);
  }, [flashcard]);

  const showQuestion = () => setContent(flashcard.question);
  const showAnswer = () => setContent(flashcard.answer);

  return (
    <View style={styles.card}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>{content}</Text>
      </ScrollView>
      <View style={styles.buttonSection}>
        <Button title="Question" onPress={showQuestion} color={"#f22613"} />
        <Button title="Answer" onPress={showAnswer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 40,
    marginHorizontal: 40,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 400,
  },
  contentContainer: {
    height: 170,
    marginTop: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff9470",
    textAlign: "center",
    borderRadius: 20,
  },
  buttonSection: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 18,
    paddingVertical: 10,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Flashcard;
