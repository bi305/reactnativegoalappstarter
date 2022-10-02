import React, { useState, useId } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";
import List from "./components/list";
import Input from "./components/input";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHAndler(enterdText) {
		setGoals((currentsgoals) => [
			...currentsgoals,
			{ text: enterdText, key: Math.random().toString() },
		]);
		endAddGoalHandler();
	}

	function deleteGoalHandler(key) {
		setGoals((currentsgoals) => {
			return currentsgoals.filter((goal) => goal.key !== key);
		});
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add  new goal"
					color={"#5e0acc"}
					onPress={startAddGoalHandler}
				/>

				<Input
					addGoalHAndler={addGoalHAndler}
					modalIsVisible={modalIsVisible}
					endAddGoalHandler={endAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						renderItem={(itemData) => {
							return (
								<List
									itemData={itemData}
									deleteGoalHandler={deleteGoalHandler}
									id={itemData.item.key}
								/>
							);
						}}
						keyExtractor={(item, index) => item.key}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
		backgroundColor: "#1e085a",
	},

	goalsContainer: {
		flex: 4,
	},
});
