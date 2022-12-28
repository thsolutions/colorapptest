
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
  const onPress1 = () => setCurrentcolor(colours.blue);
  const omprakash = () => setCurrentcolor(colours.green);
  const hemanth = () => setCurrentcolor(colours.yellow);
  return (
    <SafeAreaView>
        <View style={styles.sectionContainer}>
          <View style={[styles.rectangle,{backgroundColor: currentcolor}]}>
          </View>
          <View style={styles.row1}>
          <TouchableOpacity onPress={onPress1}
      >
        <View style={styles.button4}>
        <Text style={styles.text}>Blue</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}
      >
        <View style={styles.button}>
        <Text style={styles.text}>Red</Text></View>
      </TouchableOpacity>
      </View>
      <View style={styles.row2}>
      <TouchableHighlight onPress={omprakash} underlayColor="green" style={styles.th} >
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
  row1:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: "100%",
     marginVertical: "10%",},
    row2:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: "100%",
      marginVertical: "10%",},

  rectangle: {
    marginTop: "20%",
    width: "80%",
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "30%",
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
  th: {
borderRadius: 10,
  },
  button:{
      alignItems: "center",
      backgroundColor: colours.red,
      padding: "12%",
      borderRadius: 10,
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
  },
  button1:{
    alignItems: "center",
    backgroundColor: colours.green,
    padding: "12%",
    borderRadius: 10,

},
text1:{
  color: 'white',
  fontWeight: 'bold',
},
button2:{
  alignItems: "center",
  backgroundColor: colours.yellow,
  padding: "12%",
  borderRadius: 10,
},
button4:{
  alignItems: "center",
  backgroundColor: colours.blue,
  padding: "12%",
  borderRadius: 10,
},
text2:{
color: 'white',
fontWeight: 'bold',
},
});

export default App;
