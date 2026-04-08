//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
//Funktionen returnerar ett löfte om att i framtiden returnera antingen en array
//med objekt enligt IAnimal-struktur, eller null om något går fel.
export default async function fetchAnimals() {
    try {
        const response = await fetch("../../data/data.json");
        if (!response.ok) {
            throw new Error("Couldn't get animals");
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
