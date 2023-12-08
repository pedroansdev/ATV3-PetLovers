import { InService } from "./interfaces";

function Service(service: InService) {
    const setName = (name: string) => {
        service.name = name;
    }

    const setType = (type: string) => {
        service.type = type;
    }

    const setPrice = (price: number) => {
        service.price = price;
    }

    const setTimesCons = () => {
        service.timesCons += 1;
    }

    const getName = () => {
        return service.name;
    }

    const getPriceFormatted = () => {
        return `R$ ${service.price.toFixed(2)}`;
    }

    const getPriceValue = () => {
        return service.price;
    }

    const getType = () => {
        return service.type;
    }

    const getTimesCons = () => {
        return service.timesCons;
    }

    return({
        setName,
        setType,
        setPrice,
        setTimesCons,
        getName,
        getPriceFormatted,
        getPriceValue,
        getType,
        getTimesCons
    })
}

export default Service;