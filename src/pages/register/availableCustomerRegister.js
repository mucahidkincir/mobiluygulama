import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item, CheckBox, ListItem, Body, } from 'native-base';

const availableCustomerRegister = ({navigation}) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex: .8, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>
                    Üye Ol
                </Text>
                <Item style={[styles.loginInputContainer]}>
                    <Input style={[styles.loginInput]} placeholder="Telefon Numaranız" />
                </Item>
                <Item style={[styles.loginInputContainer]}>
                    <Input style={[styles.loginInput]} placeholder="E-Posta Adresiniz" />
                </Item>
            </View>
            <View style={{ flex: 1, }}>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>Kullanıcı Sözleşmesi</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>KVKK Aydınlatma Metni</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>KVKK Açık Rıza Sözleşmesi</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>Çerçeve Sözleşmesi</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <CheckBox checked={true} />
                    <Body>
                        <Text>Kampanyalardan Haberdar Ol</Text>
                    </Body>
                </ListItem>
            </View>
            <View style={{ flex: .5 }}>
                <TouchableOpacity onPress={() => navigation.navigate('managerInfo')} style={[styles.button]}><Text style={[styles.buttonText]}> Devam </Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default availableCustomerRegister

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
