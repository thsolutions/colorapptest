
import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable
} from 'react-native';

const colours = {
  red: '#FF0000',
  blue: '#00C2FF',
  green: '#00A110',
  yellow: '#B0B400',
}


const App: () => Node = () => {
 
  const [currentcolor, setCurrentcolor] = useState(colours.red);

  const onPress = () => setCurrentcolor(colours.red);
  const omprakash = () => setCurrentcolor(colours.green);
  const hemanth = () => setCurrentcolor(colours.yellow);
  return (
    <SafeAreaView>
        <View style={styles.sectionContainer}>
          <View style={[styles.rectangle,{backgroundColor: currentcolor}]}>
          </View>
          <Button
        title="Blue"
        color= {colours.blue}
        onPress={() => setCurrentcolor(colours.blue)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>Red</Text>
      </TouchableOpacity>

      <TouchableHighlight onPress={omprakash}>
        <View style={styles.button1}>
          <Text style={styles.text1}>Green</Text>
        </View>
      </TouchableHighlight>
      <Pressable onPress={hemanth}>
      <View style={styles.button2}>
          <Text style={styles.text2}>Yellow</Text>
        </View>
      </Pressable>
        </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: "100%",
    height: "100%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  rectangle: {
    marginTop: "20%",
    width: "80%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle2: {
    backgroundColor: 'blue',
    width: "50%",
    height: "50%",
    zIndex: 999,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button:{
    
      alignItems: "center",
      backgroundColor: colours.red,
      padding: 10,
      
  
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
  },
  button1:{
    
    alignItems: "center",
    backgroundColor: colours.green,
    padding: 10,
    

},
text1:{
  color: 'white',
  fontWeight: 'bold',
},
button2:{
    
  alignItems: "center",
  backgroundColor: colours.yellow,
  padding: 10,
  

},
text2:{
color: 'white',
fontWeight: 'bold',
},
});

export default App;
