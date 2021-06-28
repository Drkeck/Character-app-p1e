import React, {useState}from "react"
import { Text, Button, StyleSheet, Alert, Modal } from 'react-native'
function GetStarted() {

    const [modalVisible, setModalVisible] = useState(false);

    function buttonHandler (e) {
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
        <>
            <Text>You have no characters.</Text>
            <Text>Get started with a new character now</Text>
            <Button
                style={gsStyle.buttons}
                onPress={buttonHandler}
                title="Create Character"
            />
            <Modal
            >

            </Modal>
        </>
    )
}

const gsStyle = StyleSheet.create({
    buttons: {
        margin: 100
    }
})

export default GetStarted;