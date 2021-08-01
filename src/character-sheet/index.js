import React from "react"
import Character from "./character-sheet-example.json";
import { Text, View, ScrollView, FlatList } from "react-native"
import { renderStats } from "./stats/stats.js";
import { styles } from "../../styles";
import { Card } from "react-native-elements/dist/card/Card";

function CharacterSheet() {
    const {
        pathfinder,
        DnD
    } = Character;

    const attributes = pathfinder.attributes;
    const health = pathfinder.health;
    const combat = pathfinder.combat;
    const movement = pathfinder.movement;
    const feats = pathfinder.feats;
    const specialAbilities = pathfinder.specialAbilities;
    const traits = pathfinder.traits;
    const money = pathfinder.money;
    const gear = pathfinder.Gear;
    const magic = pathfinder.Magic;

    return(
        <Card>
                    <Text>Name: {pathfinder.name}</Text>
                    <Text>Class: {pathfinder.class}</Text>
                    <Text>Race: {pathfinder.race}</Text>
                    <Text>Size: {pathfinder.size}</Text>
                    <Text>Alignment: {pathfinder.alignment}</Text>
                    <Text>Attributes:</Text>
                    <FlatList 
                        data={attributes}
                        renderItem={renderStats}
                        keyExtractor={item => item.key}
                    />
        </Card>
    )
}

export default CharacterSheet;