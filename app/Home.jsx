import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Button } from "react-native";
import { flashcards } from "../data/flashcards";
import Flashcard from "../components/Flashcard";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current flashcard index

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Render the current flashcard */}
      <Flashcard flashcard={flashcards[currentIndex]} />

      {/* Navigation buttons */}
      <View style={styles.buttonSection}>
        <Button
          title="Previous"
          onPress={handlePrevious}
          disabled={currentIndex === 0} // Disable when at the first flashcard
          color="#f22613"
        />
        <Button
          title="Next"
          onPress={handleNext}
          disabled={currentIndex === flashcards.length - 1} // Disable when at the last flashcard
          color="#5cb85c"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9690e",
    justifyContent: "center",
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});




// import React from "react";
// import { SafeAreaView, FlatList, StyleSheet, ImageBackground } from "react-native";
// import { flashcards } from "../data/flashcards";
// import Flashcard from "../components/Flashcard";

// export default function Home() {
//   return (
    
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={flashcards}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <Flashcard flashcard={item} />}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor:"#f9690e"
//   },
// });


