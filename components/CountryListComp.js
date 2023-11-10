import {CountryPicker, CountryButton} from "react-native-country-codes-picker";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

function CountryListComp({countries, lang, onPress}) {
    return (
        <View
            style={{
                paddingBottom: 20,
            }}
        >
            <Text>
                Popular countries1
            </Text>
            {/* {countries?.map((country, index) => {
                return (
                    <CountryButton key={index} item={country} name={country?.name?.[lang || 'en']} onPress={() => onPress(country) />
                )
            })
        } */}
        </View>
    )
}