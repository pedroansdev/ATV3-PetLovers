import { InPrHistSpe, InProduct } from "./interfaces";

function PrHistSpecies(prHistSpe: InPrHistSpe) {
    const setProduct = (product: InProduct) => {
        prHistSpe.product = product;
    }

    const setSpecies = (species: string) => {
        prHistSpe.species = species;
    }

    const setTimesCons = () => {
        prHistSpe.timesConsumed += 1;
    }

    const getProduct = () => {
        return prHistSpe.product;
    }

    const getSpecies = () => {
        return prHistSpe.species;
    }

    const getTimesCons = () => {
        return prHistSpe.timesConsumed;
    }

    return({
        setProduct,
        setSpecies,
        setTimesCons,
        getProduct,
        getSpecies,
        getTimesCons
    })
}

export default PrHistSpecies;