import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Hearder";
import GameScreen from "./screens/GameScreen";
import StartGameScree from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHnadler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };
  let content = <StartGameScree onStartGame={startGameHnadler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onRestart={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
