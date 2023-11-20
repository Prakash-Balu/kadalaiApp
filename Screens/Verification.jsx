import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import TextField from '@mui/material/TextField';

export default function Verififcation({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.otpHeader}>Mobile Number Verification </Text>
            </View>
            <View>
                <Text style={styles.Text1}> We have sent you an SMS
                    Enter the 6 digit activation code</Text>
            </View>
            <View>
            
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
    )
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
        display: 'flex',
        flex: 1,
        borderWidth: 2,
        // fontWeight: 'bold',
        maxWidth: '390px',
        // paddingRight: '32px',
        // paddingLeft: '32px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    otpHeader: {
        color: '#fff',
        fontWeight: 'bold',
        // fontSize: 27,
        textAlign: 'center',
        textTransform: 'capitalize',
        backgroundColor: '#1B7DA4',
        marginTop: '70px',
        border: '12px solid #1B7DA4',
    },
    Text1: {
        marginTop: '84px',
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 87,
        marginRight: 87,
    },
})