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
export default function renderAnimalInfo(animal) {
    //Hämtar div och tömmer innan rendering
    const animalInfoDiv = document.querySelector(".animal-info");
    animalInfoDiv.innerHTML = "";
    //Skapar div för bild och lägger in bilden
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    const img = document.createElement("img");
    img.src = `/images/${animal.imageUrl}`;
    img.alt = `Picture of ${animal.name} the ${animal.kindOfAnimal}`;
    imgDiv.appendChild(img);
    //Skapar div för textstyckena 
    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    //Skapar "titel" - djurets namn och typ av djur
    const animalName = document.createElement("h1");
    animalName.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    //Skriver ut jobb och anställningsstatus. Kallar på funktion som kollar om datum för avslutad tjänst finns.
    const jobPresentation = document.createElement("p");
    jobPresentation.classList.add("job-presentation");
    const employmentStatus = getEmploymentStatus(animal);
    jobPresentation.textContent = `${animal.job} - Currently ${employmentStatus}`;
    //Skriver ut ålder, använder funktion som räknar ut ålder och returnerar siffran
    const agePresentation = document.createElement("p");
    agePresentation.classList.add("age-presentation");
    const animalAge = getAnimalAge(animal);
    agePresentation.textContent = `${animalAge.toString()} years old.`;
    //Lägger in elementen i sina div:ar
    textDiv.append(animalName, jobPresentation, agePresentation);
    animalInfoDiv.append(imgDiv, textDiv);
    //Om djuret har propertyn "skills" hämtas den/dem i en funktion som returnerar en lista
    //som läggs till i text-diven.
    if (animal.skills !== undefined) {
        const skills = getListOfSkills(animal);
        skills.classList.add("skills-list");
        textDiv.appendChild(skills);
    }
}
//Skapar en variabel som kollar vad det är för år just nu och subtraherar djurets födelseår
//och returnerar åldern
function getAnimalAge(animal) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(animal.birthYear);
    return age;
}
//Om djuret saknar propertyn för slutdatum returnerar funktionen (med sträng) att den fortfarande är anställd,
//finns slutdatum returnerar den att man inte är anställd.
function getEmploymentStatus(animal) {
    if (!animal.employmentEndDate) {
        return "employed";
    }
    else {
        return "not employed";
    }
}
//Denna funktion kallas bara på om djuret har propertyn "skills". 
function getListOfSkills(animal) {
    const skillsList = document.createElement("ul");
    //Om propertyn skills är en array loopas den igenom och skapar ett li-element 
    // för varje skill, och lägger till i listan.
    if (Array.isArray(animal.skills)) {
        for (const skill of animal.skills) {
            const skillListItem = document.createElement("li");
            skillListItem.textContent = skill;
            skillsList.appendChild(skillListItem);
        }
    }
    //Om skills är en sträng så skapas ett li-element för den och lägger till i listan
    else if (typeof animal.skills === "string") {
        const skillListItem = document.createElement("li");
        skillListItem.textContent = animal.skills;
        skillsList.appendChild(skillListItem);
    }
    //returnerar hela listan så den kan renderas ut
    return skillsList;
}
