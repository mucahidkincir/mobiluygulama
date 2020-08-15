import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const documentAdd = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex:1, alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>
                    Döküman Ekle
                </Text>
                <Text style={{ fontSize:18}}>
                    Vergi Levhası
                </Text>
                <Text style={{ fontSize:18}}>
                    İmza Beyannamesi
                </Text>
                <Text style={{ fontSize:18}}>
                    Kimlik Fotokopisi
                </Text>
            </View> 
            <View style={{ flex:1}}>
            <TouchableOpacity onPress={() => navigation.navigate('availableCustomerRegister')} style={[styles.button]}><Text style={[styles.buttonText]}> Tamamla </Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default documentAdd

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        backgroundColor: '#92d36e',
        padding: 25,
        width: '80%',
        textAlign: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
    },
})
