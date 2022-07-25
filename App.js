/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';



const App = () => {



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.body} >
        <ImageBackground style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} source={{uri:"https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}}> 
          <View style={styles.centerView}>
            <View style={{}}><Text style={{color:"black",fontSize:32,fontWeight:"bold"}}>Login </Text></View>
            <View  style={{marginTop:20}}><TextInput style={styles.userName} placeholderTextColor="black" placeholder='Username'></TextInput></View>
            <View  style={{marginTop:20}}><TextInput style={styles.userName} placeholderTextColor="black" placeholder='Password'></TextInput></View>
            <View  style={{marginTop:15, marginLeft:110}}><Text style={{color:"grey"}}>forgot Password ?</Text></View>
            <View  style={{marginTop:15,justifyContent:"center",elevation:30}}><Pressable style={styles.login}><Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Login</Text></Pressable></View>
            <View  style={{marginTop:15,flexDirection:"row"}}><Text style={{color:"grey"}}>Don't have an account ?</Text><Text style={{color:"black",marginLeft:5,textDecorationLine:"underline",color:"blue"}}>Create account</Text></View>
            <View  style={{marginTop:15,flexDirection:"row"}}><Text style={{color:"grey"}}>Or Login with</Text></View>

            <View style={styles.tinyLogoView}>
            <Image style={styles.tinyLogo} source={{ uri: "https://icon-library.com/images/google-icon-images-download/google-icon-images-download-23.jpg" }} />            
            <Image style={styles.tinyLogo} source={{ uri: "data:image/png;base64,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" }} />
            <Image style={styles.tinyLogoTwitter} source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADKCAMAAABQfxahAAAAY1BMVEUdq93///8AptsApNoAp9wMqdzj8vn5/P7y+fyMzOrs9vvo9PrY7fe84PLU6/bf8PlBs+BYuuOw2/B5xeem1+6Sz+ug1O18xufH5fRwwuYsrt7M5/VhveTC4/M3sd9Nt+EAndhQc8/PAAALCUlEQVR4nN2dbZuiOgyGoW1EVBQUVBRl//+vXFDH4a2lrwHm+bBnds9cyG3bNEnT1vPnr9UjDfMkvnmed4uTU3a8by081bPwDIcKrmFMKYNaXq3qv4wRSpPz3vDRcyZfpwklH+KuAAjNI5Onz5c8SigbhP6lZzS/az9/puTBGchwY3fg6e2o9uR7+flhluRBSGWwPw0PqfyTVwn9+e05kp/luV9iIDngNzkFuv78ZX7kV29keA+0O4kP4w/enKpvFIqfv86NPCgUG/zDTsORBx/y14PpdzLsk19tw6joynS4a7HbSvTc8v2FwvP7Tz3y+z9TF8FAIdXkfjU7z8oHqUc+v0Qe33/tkT+BbFyBjSgolUd4SzQfeuo1p9+O1GjyHvmVenBzSCfQ1tPt6T9icdB55j5s+QW0MZS75HH1exC7hhzSQcp1EQtu68YT7xdou4FQNv5vh3z/Gmi/ph9Pey2b3tdnqK6OBSXdwUObMV6HPH9/PLugEX+0N7BtTQGs/V2aAx2YJFjW/MQ2+frn82nrl9zrYAn8FcaQ4amxY7/a5Om3f9AzJvhGexpXEG37eW3y5+8LUIU4wFg3BHDSAWqRb5t9jusY2FdiNo9LqWe1W+Rp6w3Q0DPCe12L6jkpLfKk3emQ0HfWrBtfwNbdj22Rd18BZ6wbu24Sov1wpkm+7/U6jMntggG+639ukzztG5rRsNdY9mZyroD2w8/juUmeD3z7ZDD+sajYeZMD6bb4qoqGW23+HHoJVvouFTm36wDtFZngGFOoPPgm+XC/Y8+eWbQo5+atHbkGx6T26OtZq0G+5Yw4YBLpPU0dXfswtBF7rdLyHciw2qtpkPdN+w86ffRe2ZIcNzl8s0+b6DdYhxd0g/zB//5dzW6ORzkp6p4e7N9R6/dLfofpDXJRzyOJE3LHhj09RFnhdaPWTw9ukJ9Fr8E8UVJXU67nciAMemux5NN/G+SZsAH4SV19hQgxWo/jJ2aTJucldU2E4Ld29ZtdVSCvbKLd6c1W7k1Fv8GqCnnV463mqEL0Nq/zkwPkQgv3EYktLsBg5KBaAtZ4e8lZ7Vf2YvYNdmcH0pyf5DyZpkhpqdkjZMveBpfyXruyNNqR57QOeJNcvvexm42V5hJ1mHeDVYkodfAxNO+uWqoLI+P6+8ZeN9YezUzwnmTc5VENHHv2WqpJflLqfswzi12lzYoFsYGAayQDKRLQ2GS4I5p2OrQ03CTfqbYC0ETfn1X8nvXFibWEKw0yTy102cedZTsCGEi2d8kLjZep2IefPCak6ZyVnFlIsKIoK6ClTsUxxtqKKI/WIteeaJQrjn3VmURTwJ9725UD2nkxYCxTdOfnRW5ib6sBr1Q4itLbgZ80bpMHRn4VEMjk85QoFo7xV0SHq8K0VXk3qeRiFMqsJk9uXr8AjCZHGXgUT0ae3E7un9EyHe32KN6roKSxS363E0FVLe+FYoOHErEokNtb8AFGaJnxfRyUKFWF3GoSvN5PF4fR8GZKlDaXH+d6zrtIlZNDSRJGu67/jJGNAhXytZNeWG8mhSRMH4ev3ceY0KU9mZfOzrphvZmWUOqV+SVLI4wlFmnv9a3Y9esAsOpLQPFk+OsiQ+Toix/uxPgx5OBOvejPoDN+lnR4j+JpgiV9JyJ8f4KzO9N9ZSKOKD9LyCEPMAqQEUT56RLejtw155SDhYlywfl7kbcWNs5NLyZFXrR7xhZlwnWr5j5UATmll1ZosVl+hxdttmyQszqJ2JwFApXF1VlKEKo1yeuCHSBeM4lYoK5x25fo8I0G+XsOB6C37LtGqnrYxcwkcOFaFu67Px3qbEr0cgJWi+7xRLDc2SBvpf6rcOoVTobhZK9tQVRQ0yKuBIR+qfCiBHzwJjl2fZp7gagqv0GOsHMMWaJJTbMqbCES5CXa5H8lNP2qt0WPRz7FFgOnEkRqbfLHwj22rkTxSpvcbPV8fgLhCSmt+Lyc+l3tSmjgbNRGzVaCJFyX3M3C0mQSGrhONir5S/Oa0IPrkrvfDY4owZpan3yKvXPORMSV2B1ymZ1bS5F4mHfJ/9CUPjLMe/l2/H2DrjQyzHvkf6fRxbP5wBrL+a94M6J8zCA5ymFGCBI77YPk17/R38nYzqqBFUXbZWHTaGROGyQP/sJIHz++dGgV2VLt66RiowebD66f/4G0lGiNQUCOvE3YgSTO6uXUTCx9ahvv7DzyzcJrRUYtO79OZtkLLiBx9A23QgjjRE5nIhL7x/j3NOwWXDQw5rOLyf3VYskFVe1S5P76ttB5ncrcxSW+lWShFUJSh3aO3MeyyAqh0TBNhtw/LLDHy9g3mTt4TO5ImURjCThpcn8VL6vLjwcrsuS+/7gtyJmFkxS47I1T0XLYBw4sNyH3/WtCF1EbN7bAoE7u+9vMWwD8wInlxuSVdllM593t5W9OUr9Zbm96IoNTUemjbYTkj+7On809PaGfW6kihcuyhOQlpc/kFGbn8zkLL8WT1kckzxlcocnF5BF7756Fz59Tc41K5X408ThfWqgmbdhHyS/LClek5/Jxct4FBjPV2JK5AvmyVhdlMq7S5IvKwFKlS0TGPJkF1QYytcskxshXi2l0kEvFSJMvx7yrXp0ySh4sZE4H1VuSxiOW4zL6u1SOXY18GUZO0bzJkS+hbkbjLmeZ+HwBdTNDl+ZZIMe53NJEo2V/uuRzH+qgnlmSzkbNexe6Rl+XJg+mhhNJuPHWlHzOJ+uItyIak88YXdmHUST31zNNuurefqZiFcs5ujRq6QhNcv80P5dGw3nTIa+il7n1eM1Brkzub2dWPELH61stkVee7JyaXW8m1ySfU/GIUn7dnNz3I28eR8fpWzddct9PYQ6r6MToijs98srKPyfv81pxijm57+9P05ZPGJh1Q/JKUU7IVO688f1uRuSV9ueCUcLQV9eJwXxmh7zW5p6GefnEBGfmNxXbIP8owNvrxcY3ZY3KHnmEZ+yNPJgfWSNHjOOsgNsiPyCmLeyAWyLHDGOG7sHUkQ3yHWboasO4vWSB/ILpxxLz6ewjY/II1YWhxg7MV4bkuxh1yc3SLdwvGZFvC9yAzTRIacmAfHPC5QbhUZ7K0ibfoBo2r7503SgR0ZMm+SHHTkwQS9P4V1rkjxI9IWPRqGuTr8+AXkIBqsVuDsijKTZvgeUhrk5+zekU+WYquevQEfk6yqfJOILVWVyRPLhn8SStXYmUSrXbFsm3UVjvzpsowwo2/VVp8u39eCkpxbn2b1gk1l4kHiffF/Vtjtf97rCqdNjt74/jOcxLj76SyZNBe04bvCb3g9M/wkh9p2Wt6oeKdw6b04AmDuayJnnliuKGmnICcGPSW+T1ZsR5lUJUDW7dWx0mr3OIM2IHWjjt6C1yf40cbfMF5KmwydKcHD/DwuO+OR7gffLK1E3OXoWBmiWNZuRTZBwm4h7w4bbYWaZfbvrE6ecc8srWZVP4bowm8ucFOCL38et/gNGL5AE4jsl9f3fCC0sZfeIN768Esdoxxkg8ASEXq3l0WQnj85XrU4OqXl7Yzy3KaSwzsQudwQOhBaYx70giG3XIntbHPABlp6la+y25DOTmWNir+auvY42zScZ2U/JZ5905MT9C6EUdXuVO7XMrxbPC0tyr05Ea+FBDQ3G+z4G6lsbq0v2cP99JOqkvAIAxQukzP1/dB90K0l1FXl3TS3Kr83bvY6Wa/aD+uT5o6kVMn0WYXt2lULVlWC2yPtyjNAtPeVLGz9uL+/aMy6Q4hVl6vO63c+nbff0HifqWVn4fRv8AAAAASUVORK5CYII=" }} />

            </View>

          </View>
          

        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  centerView:{
    display:"flex",
    alignItems:"center",
    width:"90%",
    height:"70%",
    backgroundColor:"white",
    elevation:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center" 
  },
  userName:{
    width:280,
    backgroundColor:"pink",
    borderRadius:20,
    padding:10,
    fontSize:16,
    paddingLeft:20,
    elevation:20,

  },
  login:{
    width:150,
    height:40,
    backgroundColor:"skyblue",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    elevation:30,
    
  },
  tinyLogoView: {
    marginTop:10,
    padding:10,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

  },

  tinyLogo: {
    marginLeft:5,
    height: 40,
    width: 40,
  },
  tinyLogoTwitter: {
    marginLeft:8,
    height: 30,
    width: 30,
  },
  

})



export default App;
