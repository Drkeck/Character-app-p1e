import React, {useState}from "react"
import { Text, Button, StyleSheet, Alert, Modal, View } from 'react-native'

function GetStarted(btn) {
    const [modalVisible, setModalVisible] = useState(false);

    function buttonHandler (e) {
        setModalVisible(true)
        // Alert.alert(
        //     "you did a thing",
        //     "good Job",
        //     [
        //         {
        //             text: "Cancel",
        //             onPress: () => console.log("cancel pressed"),
        //             style: "cancel"
        //         },
        //         { text: 'ok', onPress: () => console.log('ok pressed')}
        //     ]
        // )
    }

    return(
        <View>
            <Text>You have no characters.</Text>
            <Text>Get started with a new character now</Text>
            <Button
                style={btn}
                onPress={buttonHandler}
                title="Create Character"
            />
            <Modal
            animationType="fade"
            visible={modalVisible}
            style
            onRequestClose={() => {
                setModalVisible(!modalVisible)
            }}
            >
                <View>
                    <Text>this is for picking a Game type</Text>
                </View>
            </Modal>
        </View>
    )
}

const gsStyles = StyleSheet.create({

})

export default GetStarted;