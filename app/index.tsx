import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "@/components/PokemonCard";

export default function Index() {
	const charmanderData = {
		name: "Charmander",
		image: require("@/assets/images/charmander.png"),
		type: "Fire",
		hp: 39,
		moves: ["Stratch", "Ember", "Growl", "Leer"],
		weaknessess: ["Water", "Rock"],
	};

	const squirtleData = {
		name: "Squirtle",
		image: require("@/assets/images/squirtle.png"),
		type: "Water",
		hp: 44,
		moves: ["Tackle", "Water Gun", "Tail whip", "Withdraw"],
		weaknessess: ["Electric", "Grass"],
	};
	const bulbasaurData = {
		name: "Bulbasaur",
		image: require("@/assets/images/bulbasaur.png"),
		type: "Grass",
		hp: 45,
		moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
		weaknessess: ["Fire", "Ice", "Flying", "Psychic"],
	};
		const pikachuData = {
			name: "Pikachu",
			image: require("@/assets/images/pikachu.png"),
			type: "Electric",
			hp: 35,
			moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
			weaknessess: ["Ground"],
		};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<PokemonCard {...charmanderData} />
				<PokemonCard {...squirtleData} />
				<PokemonCard {...bulbasaurData} />
				<PokemonCard {...pikachuData} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
});
