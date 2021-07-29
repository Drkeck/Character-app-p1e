import React from "react"
import { View, Text } from 'react-native'

const Stats = ({name, score, key}) => {
    const mod = Math.floor((score - 10)/2)
    let negative

    if (mod < 1) {
        negative = true
    }

    return (
        <View key={key}>
            <Text>  {name}: {score} </Text>
            <Text>  Mod: {negative ? mod : "+" + mod}  </Text>
        </View>

)}

export const renderStats = ({ item }) => (
    <View>
        <Stats name={item.name} score={item.score} />
    </View>
)
