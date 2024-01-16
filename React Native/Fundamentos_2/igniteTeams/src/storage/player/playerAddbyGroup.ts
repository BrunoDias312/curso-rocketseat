import AsyncStorage from "@react-native-async-storage/async-storage"

import { AppError } from "@utils/AppError"
import { PLAYER_COLLECTION } from '../storageConfig'
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { PlayerGetByGroup } from "./playerGetByGroup"

export const PlayerAddByGroup = async (newPlayer: PlayerStorageDTO, group: string) => {
    try {
        /* LOGICA
            @ignite-teams:players-Rocket: []
            @ignite-teams:players-amigos: []
            @ignite-teams:players-ignite: []
        */
        const storedPlayers = await PlayerGetByGroup(group)
        const playerAlredyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlredyExists.length > 0) {
            throw new AppError("Esta pessoa ja foi adiciona ao time")
        }

        const stored = JSON.stringify([...storedPlayers, newPlayer])


        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, stored)
    } catch (error) {
        throw error
    }
}