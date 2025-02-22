import React, { useState } from "react";
import {
    Button,
    Text,
    TextInput,
    View,
    StyleSheet,
    StatusBar,
    Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    const [sumber, setSumber] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [data, setData] = useState({});

    const handleSave = () => {
        setData({ sumber: sumber, jumlah: jumlah });
        console.log(data);
    };

    return (
        <View style={styles.area}>
            <TextInput
                style={styles.inputStyle}
                onChangeText={(info) => setSumber(info)}
                placeholder="Sumber uang"
            />
            <TextInput
                style={styles.inputStyle}
                onChangeText={(sumber) => setJumlah(sumber)}
                placeholder="Total"
            />
            <Button title="save" onPress={handleSave} />

        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 3,
        width: "80%",
        borderRadius: 5,
    },
    area: {
        gap: 5,
    },
});

export default Home;
