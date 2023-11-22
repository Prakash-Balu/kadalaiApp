import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import React from "react";
import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";

export default function Verififcation({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.otpHeader}>Mobile Number Verification </Text>
      </View>
      <View>
        <Text style={styles.Text1}>
          {" "}
          We have sent you an SMS Enter the 6 digit activation code
        </Text>
      </View>
      <View style={[{ flexDirection: "row" }]}>
        <Text style={[styles.Box]}></Text>
        <Text style={[styles.Box]}></Text>
        <Text style={[styles.Box]}></Text>
        <Text style={[styles.Box]}></Text>
        <Text style={[styles.Box]}></Text>
        <Text style={[styles.Box]}></Text>
      </View>
      <Text style={styles.Resend}>Resend OTP</Text>
      <View>
        {/* <Button style={{marginTop:177,
        bottom:4,}}>Verify OTP</Button> */}
        <Text style={styles.Timer}>02.29</Text>
      </View>
      <View style={styles.Button1}>
      <Button  
        title='Verify OTP'
        color="lightgrey"
        borderRadius="15"
        marginRight="5"
        

        />
      </View>
    </View>

    // <View
    //     style={[
    //         styles.container,
    //         {
    //             // Try setting `flexDirection` to `"row"`.
    //             flexDirection: 'column',
    //         },
    //     ]}>
    //     <View style={{ flex: 1, backgroundColor: 'red' }} />
    //     <View style={{ flex: 2 }} />
    //     <View style={{ flex: 3 }} />
    // </View>
  );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingRight: '32px',
//         paddingLeft: '32px',
//         maxWidth: '390px',
//         borderWidth: 2,
//         // marginRight: 'auto',
//         // marginLeft: 'auto'
//     },
// });

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderWidth: 2,
    // fontWeight: 'bold',
    maxWidth: "390px",
    // paddingRight: '32px',
    // paddingLeft: '32px',
    marginRight: "auto",
    marginLeft: "auto",
  },
  otpHeader: {
    color: "#fff",
    fontWeight: "bold",
    // fontSize: 27,
    textAlign: "center",
    textTransform: "capitalize",
    backgroundColor: "#1B7DA4",
    marginTop: "70px",
    border: "12px solid #1B7DA4",
  },
  Text1: {
    marginTop: "84px",
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 87,
    marginRight: 87,
  },
  Box: {
    backgroundColor: "lightgrey",
    length: 2,
    padding: 15,
    marginRight: 22,
    width: 40,
    height: 40,
    left: 18,
    top: 71,
    borderRadius: 5,
  },
  Resend: {
    fontWeight: "Regular",
    top: 102,
    left: 286,
    position: "relative",
    color: "lightgrey",
    fontSize: 15,
  },
  Timer: {
    fontWeight: "Medium",
    top: 79,
    left: 18,
    position: "relative",
    color: "black",
    fontSize: 15,
  },
  Button1: {
    borderRadius:5,
    marginTop:80,
    padding: 80,
    height:55,
    width:368,
    length:4,
    Color:"black",

  }
});
