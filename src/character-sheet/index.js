import React from "react"
import Character from "./character-sheet-example.json";
import { Text, View, ScrollView } from "react-native"

function CharacterSheet() {
    const {
        pathfinder,
        DnD
    } = Character

    return(
        <View>
        <Text>Character Info</Text>
            <ScrollView>    
                    <Text>Name: {pathfinder.name}</Text>
                    <Text>Class: {pathfinder.class}</Text>
                    <Text>Race: {pathfinder.race}</Text>
                    <Text>Size: {pathfinder.size}</Text>
                    <Text>Alignment: {pathfinder.alignment}</Text>
                    <View>
                        <Text>Strength: {pathfinder.attributes.strength} | {(pathfinder.attributes.strength -10)/2}</Text>
                        <Text>Dexterity: {pathfinder.attributes.dextarity} | {(pathfinder.attributes.dextarity -10)/2}</Text>
                        <Text>Constitution: {pathfinder.attributes.constitution} | {(pathfinder.attributes.constitution -10)/2}</Text>
                        <Text>Intelligence: {pathfinder.attributes.inteligence} | {(pathfinder.attributes.inteligence -10)/2}</Text>
                        <Text>Wisdom: {pathfinder.attributes.wisdom} | {(pathfinder.attributes.wisdom -10)/2}</Text>
                        <Text>Charisma: {pathfinder.attributes.charisma} | {(pathfinder.attributes.charisma -10)/2}</Text>
                    </View>

            </ScrollView>
        </View>
    )
}

export default CharacterSheet;