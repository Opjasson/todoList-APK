import React from "react";
import { Button, Text, View } from "react-native";
import {useNavigation} from "@react-navigation/native";
import data from "../assets/data/data.json"


const Home = () => {
    const navigation = useNavigation()
    const datas = data

    return (
        <View>
            {datas.map((item) =>
            (
                <View>
                    <Text>{item.nama}</Text>
                    <Text>{item.alamat}</Text>
                    <Text>{item.email}</Text>
                </View>
            )
               )}
            <Button title="see list" onPress={() => navigation.navigate('List')}/>
        </View>
    );
};

export default Home;
