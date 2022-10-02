import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';


function Input({ addGoalHAndler, modalIsVisible, endAddGoalHandler }) {


    const [goalsEnteredText, setGoalsEnteredText] = useState("");
    function goalInputHAndler(entertext) {
        setGoalsEnteredText(entertext);
    }

    function onaddGoalHAndler() {
        addGoalHAndler(goalsEnteredText);
        setGoalsEnteredText("");
    }
    return (
        <Modal visible={modalIsVisible} animationType="fade" >
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Your goal"
                    onChangeText={goalInputHAndler}
                    value={goalsEnteredText}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>

                        <Button title="Cancel" onPress={endAddGoalHandler} color="#f31282" />
                    </View>
                    <View style={styles.button}>

                        <Button title="Add Goals" onPress={onaddGoalHAndler} color='#b180f0' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Input
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
        borderWidth: 3,
        // borderRadius:9,
        borderColor: "#f31282",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        width: "100%",
        padding: 18,
        borderRadius: 8,
        color: "#120438",
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: "30%",
        marginHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,

    }


})
