export interface IAnimal {
    name: string,
    kindOfAnimal: string,
    job: string,
    skills?: string | string[],
    birthYear: string,
    imageUrl: string,
    employmentStartDate: string,
    employmentEndDate?: string
}

//Skills finns inte med på alla animals(optional), och kan både stå som sträng eller strängar i en array
//EmploymentEndDate är också optional och finns inte med på alla.