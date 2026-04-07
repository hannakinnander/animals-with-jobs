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