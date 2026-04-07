//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar

import { IAnimal } from "./IAnimal.ts";

export default async function fetchAnimals(): Promise<IAnimal[] | null> {
    try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
            throw new Error();
        }
        const data: IAnimal[] = await response.json();
        return data;
    }
    catch (error){
        return null;
    }
}
