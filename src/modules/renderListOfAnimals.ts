//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter

import { IAnimal } from "./IAnimal.ts";
import renderAnimalInfo from "./renderAnimalInfo.ts";

export default function renderListOfAnimals(animals: IAnimal[]) :void {
    const listOfAnimals = document.querySelector(".list-of-animals ul") as HTMLUListElement;
    
    for (const animal of animals) {
        const listItem = document.createElement("li");
        listItem.textContent = animal.name;
        listOfAnimals.appendChild(listItem);
        listItem.addEventListener("click", () => renderAnimalInfo(animal));
    }
}
