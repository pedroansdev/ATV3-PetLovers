import { InSeHistBre, InService } from "./interfaces";

function seHistBreed(seHistBre: InSeHistBre) {
    const setService = (service: InService) => {
        seHistBre.service = service;
    }

    const setBreed = (breed: string) => {
        seHistBre.breed = breed;
    }

    const setTimesCons = () => {
        seHistBre.timesConsumed += 1;
    }

    const getService = () => {
        return seHistBre.service;
    }

    const getBreed = () => {
        return seHistBre.breed;
    }

    const getTimesCons = () => {
        return seHistBre.timesConsumed;
    }

    return({
        setService,
        setBreed,
        setTimesCons,
        getService,
        getBreed,
        getTimesCons
    })
}

export default seHistBreed;