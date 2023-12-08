import { InClient, InPet } from "./interfaces";

function Pet(pet: InPet) {
    const setName = (name: string) => {
        pet.name = name;
    }

    const setSize = (size: string) => {
        pet.size = size;
    }

    const setBreed = (breed: string) => {
        pet.breed = breed;
    }

    const setSpecies = (species: string) => {
        pet.species = species;
    }

    const setGenre = (genre: string) => {
        pet.genre = genre;
    }

    const setOwner = (owner: InClient) => {
        pet.owner.push(owner);
    }

    const getName = () => {
        return pet.name;
    }

    const getSize = () => {
        return pet.size;
    }

    const getBreed = () => {
        return pet.breed;
    }

    const getSpecies = () => {
        return pet.species;
    }

    const getGenre = () => {
        return pet.genre;
    }

    const getOwner = () => {
        return pet.owner;
    }

    return({
        setName,
        setSize,
        setBreed,
        setSpecies,
        setGenre,
        setOwner,
        getName,
        getSize,
        getBreed,
        getSpecies,
        getGenre,
        getOwner
    })
}

export default Pet;