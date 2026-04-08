//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const animalInfoDiv = document.querySelector(".animal-info");
    animalInfoDiv.innerHTML = "";
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    const img = document.createElement("img");
    img.src = `/images/${animal.imageUrl}`;
    imgDiv.appendChild(img);
    const animalName = document.createElement("h1");
    animalName.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    const jobPresentation = document.createElement("h2");
    const employmentStatus = getEmploymentStatus(animal);
    jobPresentation.textContent = `${animal.job} - Currently ${employmentStatus}`;
    const agePresentation = document.createElement("p");
    const animalAge = getAnimalAge(animal);
    agePresentation.textContent = `Age: ${animalAge.toString()} years old.`;
    animalInfoDiv.append(imgDiv, animalName, jobPresentation, agePresentation);
    if (animal.skills !== undefined) {
        const skills = getListOfSkills(animal);
        skills.classList.add("skills-list");
        animalInfoDiv.appendChild(skills);
    }
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
}
function getAnimalAge(animal) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - Number(animal.birthYear);
    return age;
}
function getEmploymentStatus(animal) {
    if (!animal.employmentEndDate) {
        return "employed";
    }
    else {
        return "not employed";
    }
}
function getListOfSkills(animal) {
    const skillsList = document.createElement("ul");
    if (Array.isArray(animal.skills)) {
        const skills = animal.skills;
        for (const skill of skills) {
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
