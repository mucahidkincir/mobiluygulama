import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Button, Input, Item, CheckBox, ListItem, Body, Picker, Form, Icon } from 'native-base';

const companyInfo = ({navigation}) => {
    return (
        <Container styles={{ flex: 1, }}>
        <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Firma Bilgileri</Text>
        </View>
        <View style={{ flex: 2, }}>
            <Content>
                <Form>
                    <Picker
                        style={[styles.input]}
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={"key0"}
                        onValueChange={"Wallet"}
                    >
                        <Picker.Item label="İşletme Türü" value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                    </Picker>
                    <Picker
                        style={[styles.input]}
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={"key0"}
                        onValueChange={"Wallet"}
                    >
                        <Picker.Item label="Bulunduğu Şehir" value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                    </Picker>
                    <Picker
                        style={[styles.input]}
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={"key0"}
                        onValueChange={"Wallet"}
                    >
                        <Picker.Item label="Bulunduğu İlçe" value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                    </Picker>
                </Form>
                <Item style={[styles.input]}>
                    <Input placeholder="İşyeri Ünvanı" />
                </Item>
                <Item style={[styles.input]}>
                    <Input placeholder="IBAN Numarası" />
                </Item>
                <Item style={[styles.input]}>
                    <Input placeholder="İşyeri Telefon Numarası" />
                </Item>
                <Form>
                    <Picker
                        style={[styles.input]}
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={"key0"}
                        onValueChange={"Wallet"}
                    >
                        <Picker.Item label="Vergi Dairesi" value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                    </Picker>
                </Form>
                <Item style={[styles.input]}>
                    <Input placeholder="Vergi Numarası" />
                </Item>
                <Form>
                    <Picker
                        style={[styles.input]}
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="arrow-down" />}
                        style={{ width: undefined }}
                        selectedValue={"key0"}
                        onValueChange={"Wallet"}
                    >
                        <Picker.Item label="Kategori Kodu" value="key0" />
                        <Picker.Item label="1" value="key1" />
                        <Picker.Item label="2" value="key2" />
                        <Picker.Item label="3" value="key3" />
                        <Picker.Item label="4" value="key4" />
                    </Picker>
                </Form>
                <Item style={[styles.input]}>
                    <Input placeholder="Adres" />
                </Item>
            </Content>
        </View>
        <View style={{ flex: .4, }}>
            <TouchableOpacity onPress={() => navigation.navigate('documentAdd')} style={[styles.button]}><Text style={[styles.buttonText]}> Tamam </Text></TouchableOpacity>
        </View>
    </Container>
    )
}

export default companyInfo

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
