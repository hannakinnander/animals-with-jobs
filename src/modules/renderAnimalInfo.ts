//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
//=====================================================//
//Rendera ut bilden på djuret
//Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
//=====================================================//
//=====================================================//
//Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
//Följ formatet: "Trash Analyst - Currently (not) employed"
//Använd template literals
//=====================================================//
//=====================================================//
//Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
//Följ formatet:  Age: 9 years old.
//Använd template literals
//Bonus om du skriver ut rubriken "Age" med CSS.
//=====================================================//
//=====================================================//
//Skriv ut en lista på djurets färdigheter
//Följ formatet:    Skills:
//                  Flying
//                  Eating
//Bonus om du skriver ut rubriken "Skills" med CSS.
//=====================================================//

import { IAnimal } from "./IAnimal.ts";

export default function renderAnimalInfo(animal: IAnimal) {
  
  const animalInfoDiv = document.querySelector(".animal-info") as HTMLDivElement;
  animalInfoDiv.innerHTML = "";
  
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-div");
  const img = document.createElement("img");
  img.src = `images/${animal.imageUrl}`;
  img.alt = `Picture of ${animal.name} the ${animal.kindOfAnimal}`;
  imgDiv.appendChild(img);

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-div");

  const animalName = document.createElement("h1");
  animalName.textContent = `${animal.name} the ${animal.kindOfAnimal}`;

  //Kallar på funktion för att få employmentstatus
  const jobPresentation = document.createElement("p");
  jobPresentation.classList.add("job-presentation");
  const employmentStatus = getEmploymentStatus(animal); 
  jobPresentation.textContent = `${animal.job} - Currently ${employmentStatus}`;

  //Kallar på funktion som returnerar djurets ålder
  const agePresentation = document.createElement("p");
  agePresentation.classList.add("age-presentation");
  const animalAge: number = getAnimalAge(animal); 
  agePresentation.textContent = `${animalAge.toString()} years old.`;

  textDiv.append(animalName, jobPresentation, agePresentation);
  animalInfoDiv.append(imgDiv, textDiv);

  //Om djuret har propertyn "skills" hämtas den/dem i en funktion som returnerar en lista
  //som läggs till i text-diven.
  if (animal.skills !== undefined) {
    const skills: HTMLUListElement = getListOfSkills(animal); 
    skills.classList.add("skills-list");
    textDiv.appendChild(skills);
  }
}

function getAnimalAge(animal: IAnimal): number {
  const currentYear: number = new Date().getFullYear();
  const age: number = currentYear - Number(animal.birthYear);
  return age;
}

function getEmploymentStatus(animal: IAnimal): string {
  if (!animal.employmentEndDate) {
    return "employed";
  }
  else {
    return "not employed";
  }
}

//Denna funktion kallas bara på om djuret har propertyn "skills". 
function getListOfSkills(animal: IAnimal): HTMLUListElement {
  const skillsList = document.createElement("ul");

  if (Array.isArray(animal.skills)) {
    for (const skill of animal.skills) {
      const skillListItem = document.createElement("li");
      skillListItem.textContent = skill;
      skillsList.appendChild(skillListItem);
    }
  }
  else if (typeof animal.skills === "string") {
    const skillListItem = document.createElement("li");
      skillListItem.textContent = animal.skills;
      skillsList.appendChild(skillListItem);
  }
  return skillsList;
}

