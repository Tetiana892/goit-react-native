import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen =( )=>{
    return(
        <View style={styles.container}>
            <Text>Коментарі</Text>
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

export default ProfileScreen;