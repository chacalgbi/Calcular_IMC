import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContext:{
        width:"90%",
        height:"90%",
        bottom:20,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        marginTop:10,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:10,
        padding:10,
    },
    formLabel:{
        color:"#000000",
        fontSize:20,
        paddingLeft: 40,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#F5DEB3",
        height:40,
        margin: 12,
        paddingLeft:15,
    },
    buttonCalc:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingBottom:14,
        paddingTop:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalc:{
        fontSize:20,
        color:"#ffffff",
    }
  });

  export default styles