import { StyleSheet, View, Text, Pressable } from 'react-native'
function List({ itemData, id, deleteGoalHandler }) {
    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#dddddd' }} onPress={deleteGoalHandler.bind(this, id)}>
                <Text style={styles.text}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
}

export default List
const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#5e0acc",
        margin: 8,
        borderRadius: 8,
    },
    text: {
        padding: 8,

        color: "#ffffff",
    }
})