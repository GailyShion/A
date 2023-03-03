// MarketPage-Page 1

import React from "react";
import { StyleSheet, View, Text, TouchableOpacity,Image, ScrollView, TextInput, TouchableHighlight} from "react-native";


const Page1 = ({ navigation,}) => {

  return (
  
    <View style={styles.container}  >
      <ScrollView>
      <View style= {{ flexDirection: 'row',
      color: 'white', 
      textAlign: 'center',
       backgroundColor: 'teal',
        padding: 10, paddingTop:50 }}>

      <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      }}
      onPress={() => navigation.navigate({ name: "Home" })}
    >

      <Image  style={{
           
            height: 30,
            width: 30,

          }}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/back-arrow-icon-isolated-glossy-orange-round-button-abstract-illustration-195285502.jpg',
          }}/>

    </TouchableOpacity>
    
    <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 180,
      }}
      onPress={() => navigation.navigate({ name: "Page3" })}
    >

      <Image  style={{
          
            height: 30,
            width: 30,

          }}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/425/526/original/shopping-cart-icon-vector-illustration.jpg',
          }}/>

    </TouchableOpacity>
    <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      }}
      onPress={() => navigation.navigate({ name: "Page2" })}
    >

      <Image  style={{
            borderRadius: 20,
            height: 30,
            width: 30,

          }}
          source={{
            uri: 'https://st2.depositphotos.com/1688079/10951/i/450/depositphotos_109510312-stock-photo-profile-member-icon-orange-square.jpg',
          }}/>

    </TouchableOpacity>
      </View>

    
    <Text style={{textAlign:'center', 
    fontSize: 30, 
    color: 'black',
     marginTop: 10,
     fontStyle:'italic',
    fontWeight: 'bold',}}>   Pretty Pages</Text>


      <View>




      </View>
   
    <View style={styles.flex6}>
         <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>

          <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            borderRadius: 20,
            marginTop: 5,
            height: 150,
            width: -50,
            marginleft: 5,
            marginRight: 5,

          }}
          source={{
            uri: 'https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-6/329614003_1143320302995231_4796997684226205823_n.jpg?stp=dst-jpg_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=3p0oBdo6EqAAX9LHel3&tn=adCHYNAEwxAyNG7z&_nc_ht=scontent.fmnl33-3.fna&oh=00_AfAB5MZKmHl-MCA2-6V62QTNDviHm2JrFYM-wr6KgUgsrQ&oe=63EAB871',
          }}/>
          </TouchableOpacity>

  
        </View>
        
        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            borderRadius: 20,
            height: 150,
            width: 400,
          }}
          source={{
            uri: 'https://scontent.fmnl33-3.fna.fbcdn.net/v/t39.30808-6/329944869_1406659696818232_6370212054988020218_n.jpg?stp=dst-jpg_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=RkxcE4JWCH8AX_TLCzS&_nc_ht=scontent.fmnl33-3.fna&oh=00_AfBtqY-rvPUe2VUNyPiXuQa7UyTy4SlxLElAVZdbdRb2AA&oe=63EA6AD1',
          }}/>
          </TouchableOpacity>


        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            borderRadius: 20,
            marginleft: 5,
            height: 150,
            width: 400,
            marginRight: 10
          
        
          }}
          source={{
            uri: 'https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/329658115_573879777709828_8663954827729425343_n.jpg?stp=dst-jpg_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=A1rYBiqVNAwAX9BQVLt&_nc_ht=scontent.fmnl33-2.fna&oh=00_AfC6N5CX-Flm-f2bonOKOGoPKOwmjP0EKgMJwjaQWt4Tmw&oe=63E9F66F',
          }}/>
          </TouchableOpacity>

        </View>

       
        </ScrollView>


      </View>
      <View style= {{ flexDirection: 'row',
       textAlign: 'center', 
       marginLeft: 30,
        marginTop: 20}}>
      <TouchableOpacity
      style={{
      
      width: "14%",
      borderRadius: 20,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 10,
      marginTop:-145

      }}
      onPress={() => navigation.navigate({ name: "Page1" })}
    >

      <Image  style={{
           marginTop: 20,
            height: 45,
            width: 50,
            marginleft:1
            
            

          }}
          source={{
            uri: 'https://www.kreativebunting.co.uk/assets/images/sales%20posters/big%20discount%20now%20on%20yellow.jpg',
          }}/>
    <Text style={styles.text3}>Discounts</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginTop:-150,
      marginLeft: 30,
      }}
      onPress={() => navigation.navigate({ name: "Page1" })}
    >

      <Image  style={{
            marginTop: 30,
            marginright: 10,
            height: 40,
            width: 45,

          }}
          source={{
            uri: 'https://2.bp.blogspot.com/-8ZjFbVzKgDQ/UQfPGSDGO0I/AAAAAAAAAaM/V43Jidp2Nno/s1600/free-shipping.jpg',
          }}/>
 <Text style={styles.text3}>Free Shipping</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "14%",
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginTop:-150,
      marginLeft: 30,
      }}
      onPress={() => navigation.navigate({ name: "Page1" })}
    >

      <Image  style={{
            marginTop: 30,
            marginright: 10,
            height: 40,
            width: 45,

          }}
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/183/241/original/vector-cash-back-sign-design.jpg',
          }}/>
 <Text style={styles.text3}>Cashback</Text>
    </TouchableOpacity>


    <TouchableOpacity
      style={{backgroundColor: 'white',
      width: "14%",
      borderRadius: 20,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      marginTop:-140,
      marginLeft: 30,
      }}
      onPress={() => navigation.navigate({ name: "Page1" })}
    >

      <Image  style={{
            marginTop: 30,
            height: 40,
            width: 50,
            marginLeft: 10,


          }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.3WkZmy0xtqjX8687nYraPwHaGC?pid=ImgDet&rs=1',
          }}/>
<Text style={styles.text3}>Online Payment</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={{backgroundColor: '#abb8c3',
      width: "12%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 30,
      }}
      onPress={() => navigation.navigate({ name: "Page1" })}
    >
      
      <Image  style={{
            marginTop: 20,
            height: 50,
            width: 50,
            marginLeft:-365,
            marginTop:-100

          }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.Odv0_VT29L6EbvsTSVxqDwAAAA?pid=ImgDet&w=450&h=470&rs=1',
          }}/>
          
     <Text style={styles.text3}> See More</Text>
    </TouchableOpacity>

</View>



<View style={{
       
      }} ><Text style={{
        marginTop: 40,
        fontWeight:"bold",
        fontSize:20,
        marginLeft:10,
        borderRadius:30,
        backgroundColor:'teal',

        
      }}>ADD TO CART NA!!!</Text>
</View>

     


      <View style={{
       
      }} ><Text style={{
        marginTop: 40,
        fontWeight:"bold",
        fontSize:20

        
      }}>     LIBRARY</Text>
      
<Text style={{textAlign: 'center'}}>_________________________________________</Text>

<View style={styles.flex6}>
         <ScrollView
        vertical={true}
        showsHorizontalScrollIndicator={false}>

          <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/06/24/640/360/694940094001_6051739340001_6051738739001-vs.jpg',
          }}/>


          </TouchableOpacity>

        <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Everything is F*cked</Text>

       <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by Mark Manson</Text>
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱299</Text>

        </View>
        
        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://a.wattpad.com/cover/113342237-256-k34836.jpg',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Casa Inferno</Text>

        <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by jamille Fumah</Text>

        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱295</Text>
        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://88keysandnotes.files.wordpress.com/2020/07/atomic-habits-2.jpg?w=1568',
          }}/>
          </TouchableOpacity>
          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Atomic Habits</Text>

        <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by James Clear</Text>

        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱305</Text>

        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://allbookshub.com/wp-content/uploads/2017/06/The-48-Laws-of-Power-pdf-download-and-summary.jpg',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>48 Laws of Power</Text>

<Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by Robert Greene</Text>

        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱1,050</Text>


        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.36az0Rxa1Ot9zPsUew0aQgHaHa?pid=ImgDet&rs=1',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Seventh Sense</Text>

                <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by PurpleYhan</Text>

        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱500</Text>
        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://cf.shopee.ph/file/cef93ac86937b190230aa07c278b2f5f',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>ILYS1892</Text>

<Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by BinibiningMia</Text>

        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱1,500</Text>

        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://i.pinimg.com/originals/be/cb/24/becb24effcf69f757b0fbac9aa23bf79.jpg',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Costa Leona Series </Text>

<Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by Jonaxx</Text>

        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱4,500</Text>

        </View>






        </ScrollView>
        </View>

        
</View>
<View style={{
        marginBottom: 50
      }} ><Text style={{
        marginTop: 50,
        fontSize:20,
        fontWeight:"bold"
      }}>     Book Recommendation!</Text>
<Text style={{textAlign: 'center'}}>_________________________________________</Text>

<View style={styles.flex6}>
         <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>

          <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://a.wattpad.com/cover/7832618-288-k806419.jpg',
          }}/>
          </TouchableOpacity>

        <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Tantei High</Text>

       <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by PurpleYhan</Text>
        
         
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱295</Text>

        </View>
        
        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://i.pinimg.com/736x/33/3f/7f/333f7f7e3782d3484aeb972e257e1aeb.jpg',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>MOON</Text>

         <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}> by Maxinejiji</Text>
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>1,499</Text>
        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.qAjxqQ_md1MOBrAIxQ5P6gHaHS?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.qAjxqQ_md1MOBrAIxQ5P6gHaHS?pid=ImgDet&rs=1',
          }}/>
          </TouchableOpacity>
          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Taming The Waves</Text>

         <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}>by Inksteady</Text>
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱899</Text>

        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://i.pinimg.com/originals/93/e7/18/93e718bd01374e3e3e703fd73deb5fc7.jpg',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Chasing the Sun</Text>

        <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}>by Inksteady</Text>

         
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱709</Text>


        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.NM--b0fcTmyP83X6Pivu9QAAAA?pid=ImgDet&rs=1',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Defend me, Attorney</Text>

       <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}>by Josh Gonzales</Text>
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱599</Text>
        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://cf.shopee.ph/file/39c6edd1332002346940fd822fd2c6e1_tn',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Convict me, Attorney</Text>
          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}>by Josh Gonzales</Text>
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱1,699</Text>

        </View>

        <View>
          <TouchableOpacity onpress={() => console.log("Text Tapped")}>
        <Image
          style={{
            resizeMode: "contain",
            marginTop: 15,
            marginLeft: 25,
            height: 150,
            width: 150,
            borderRadius: 20,
          }}
          source={{
            uri: 'https://img.wattpad.com/cover/132616191-256-k895745.jpg',
          }}/>
          </TouchableOpacity>

          <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 20,
         marginTop: 5,
         marginLeft:27,}}>Love At First Read</Text>

         <Text style={{color: 'black',
         fontWeight:'bold', 
         fontSize: 15,
         marginTop: 3,
         marginLeft:27,}}>by chiXnita</Text>
        
          <Text style={{color: 'black',
         color: 'red',
         fontSize: 20,

         marginLeft:27,}}>₱799</Text>

        </View>
        </ScrollView>
        </View>

        
</View>

</ScrollView>
  </View>
  
);
};
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#abb8c3'
},
flex6: {
  backgroundColor: 'black',
  flex: 5,
},
img:{
  alignItems: 'center',
  height: 150,
  width: 150,
  borderWidth: 5,
  borderRadius: 20

 

},
button: {
  margin: 15,
  width: "35%",
  borderRadius: 20,
  height: 45,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 120,
  backgroundColor: "white",
  marginTop: 20,
},
flex2: {
  backgroundColor: 'orange',
  flex: 1.2,
  flexDirection: 'row',
},
flex6: {

  flex: 5,
  
},
text3: {
  marginLeft: 10,
  marginTop: 1,
  fontSize: 8,
  color: 'black',
  textAlign: 'center',

  
},


});
export default Page1;
