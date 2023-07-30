import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [color, setColor] = useState('white');

  // Both ---Array sorting || Fisher-Yates--- can be used for make array shuffled

  // FISHER-YATES TO SHUFFLE
  // function shufflize(arrName) {
  //   for (let i = arrName.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arrName[i], arrName[j]] = [arrName[j], arrName[i]];
  //   }
  //   return arrName;
  // }

  // ARRAY SORT METHOD TO SHUFFLE
  // const shuffledArr = arr.sort(() => Math.random() - 0.5);
  // console.log(shuffledArr);

  const digitsArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const lettersArr = ["A", "B", "C", "D", "E", "F"];

  const handleRandomColor = () => {
    // combine all characters
    const allCharacters = [...digitsArr, ...lettersArr];

    //make shuffle
    const shuffledArr = allCharacters.sort(() => Math.random() - 0.5);
    console.log("ShuffledArr:", shuffledArr)
    // shufflize(allCharacters)    

    // generate hexcode with shuffled characters 
    let randomHexCode = "#";
    for (let i = 0; i < 6; i++) {
      randomHexCode += allCharacters[i];
    }
    console.log(randomHexCode)

    setColor(
      (color) => randomHexCode
    );
  };
  const changedColor = { backgroundColor: color };

  return (
    <View style={[styles.container, changedColor]}>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleRandomColor}>
          <Text style={styles.text}>Press and Change Color Randomly</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'purple',
    justifyContent: 'center',
    borderRadius: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
