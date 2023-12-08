import { InPrHistBre, InProduct } from "./interfaces";

function PrHistBreed(prHistBre: InPrHistBre) {
    const setProduct = (product: InProduct) => {
        prHistBre.product = product;
    }

    const setBreed = (breed: string) => {
        prHistBre.breed = breed;
    }

    const setTimesCons = () => {
        prHistBre.timesConsumed += 1;
    }

    const getProduct = () => {
        return prHistBre.product;
    }

    const getBreed = () => {
        return prHistBre.breed;
    }

    const getTimesCons = () => {
        return prHistBre.timesConsumed;
    }

    return({
        setProduct,
        setBreed,
        setTimesCons,
        getProduct,
        getBreed,
        getTimesCons
    })
}

export default PrHistBreed;