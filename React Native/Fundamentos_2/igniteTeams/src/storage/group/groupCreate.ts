import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./grupsGetAll";
import { AppError } from "@utils/AppError";

export const groupCreate = async (newGroup: string) => {
    try {
        const storedGroups = await groupsGetAll();

        const groupAlredyExists = storedGroups.includes(newGroup)

        if (groupAlredyExists) {
            throw new AppError('Já existe um grupo cadastrado com este nome');
        }
        const storage = JSON.stringify([...storedGroups, newGroup]);

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (error) {
        throw error;
    } 

}