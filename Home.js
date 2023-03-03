import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";


const Home = ({ navigation }) => {
  return (
 
    <View style={styles.container}  >
      
      <Text style= {{color: 'black', 
      textAlign: 'center', 
      fontSize: 45,
      fontWeight:"bold",
      backgroundColor: 'teal', 
      padding: 30, paddingTop: 50}}>Pretty Pages</Text>
      
      
      <Text style={{textAlign:'left',
       marginLeft: 25,
        fontSize: 20,
         color: 'black',
         fontStyle:'italic',
          marginTop: 20,}}>Hello, Bookworms!</Text>
      
     
     <Image style={styles.img}    source={{
            uri: 'https://th.bing.com/th/id/R.7067c08ea6e91de5c10b095d295ec1d6?rik=Yvdng4txieNhGg&riu=http%3a%2f%2fkentfreelibrary.org%2fwp-content%2fuploads%2f2016%2f03%2fbooks.jpg&ehk=FlKeewtbRKE4lYXIibtAE9rfxZ2ldAFJz%2b7lG62U2%2bI%3d&risl=&pid=ImgRaw&r=0',
          }}/>
        
     

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate({ name: "Page1" })}
      >
        <Text style={{color: 'black',}}>Ready? Then click me!</Text>
      </TouchableOpacity>

     
    </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abb8c3'

     
  },
  img:{
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 40,
    height: 300,
    width: 350,
    borderWidth: 5,
    borderRadius: 20

   

  },
  button: {
    margin: 15,
    width: "45%",
    borderRadius: 20,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 100,
    backgroundColor: "white",
    marginTop: 80,
    backgroundColor: 'teal'
  },
});
export default Home;
