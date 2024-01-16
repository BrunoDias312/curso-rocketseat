import { PlayerGetByGroup } from "./playerGetByGroup";



export const playGetByGroupAndTeam = async (group: string, team: string) => {
    try {
        const storage = await PlayerGetByGroup(group)
        const players = storage.filter(player => player.team === team)

        return players;
    } catch (error) {
        throw error;
    }
}