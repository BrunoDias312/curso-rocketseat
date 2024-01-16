import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";


export const groupsGetAll = async () => {

    try {
        const storage = await AsyncStorage.getItem(GROUP_COLLECTION); //pegamos os dados que tiver no storage 
        const groups: string[] = storage ? JSON.parse(storage) : []; //se tiver algo no storage, armazenamos, caso contrario devolve apenas um array vazio
        return groups;
    }catch(error) {
        throw error;
    }
}