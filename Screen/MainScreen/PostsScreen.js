import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PostsScreen( ){
    return(
        <View style={styles.container}>
            <Text>Публікації</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});
