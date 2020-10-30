import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function ProfileScreen(props) {


return (
<View style={styles.container}>
    <Text>Wellcome ~ User</Text>
    <Button
        title='goto detail screen'
        onPress={()=>props.navigation.push('ProfileDetailScreen')}
    />

<StatusBar style="auto" />
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
