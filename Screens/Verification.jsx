import { Text,view ,StyleSheet} from "react-native";
import React from "react";

export default function Verififcation({navigation})
{ 
    return (
    <view >
            <Text>Mobile Number Verification</Text><br/>
            <Text>We have sent you a SMS</Text><br/>
            <Text>Enter the 6 digit activation code</Text>
        </view>
    )
}

const Styles=StyleSheet.create({})