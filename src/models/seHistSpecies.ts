import { InSeHistSpe, InService } from "./interfaces";

function seHistSpecies(seHistSpe: InSeHistSpe) {
    const setService = (service: InService) => {
        seHistSpe.service = service;
    }

    const setSpeed = (species: string) => {
        seHistSpe.species = species;
    }

    const setTimesCons = () => {
        seHistSpe.timesConsumed += 1;
    }

    const getService = () => {
        return seHistSpe.service;
    }

    const getSpecies = () => {
        return seHistSpe.species;
    }

    const getTimesCons = () => {
        return seHistSpe.timesConsumed;
    }

    return({
        setService,
        setSpeed,
        setTimesCons,
        getService,
        getSpecies,
        getTimesCons
    })
}

export default seHistSpecies;