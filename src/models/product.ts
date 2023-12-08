import { InProduct } from "./interfaces";

function Product(product: InProduct) {
    const setName = (name: string) => {
        product.name = name;
    }

    const setPrice = (price: number) => {
        product.price = price;
    }

    const setTimesCons = () => {
        product.timesCons += 1;
    }

    const getName = () => {
        return product.name;
    }

    const getPriceFormatted = () => {
        return `R$ ${product.price.toFixed(2)}`;
    }

    const getPriceValue = () => {
        return product.price;
    }

    const getTimesCons = () => {
        return product.timesCons;
    }

    return({
        setName,
        setPrice,
        setTimesCons,
        getName,
        getPriceFormatted,
        getPriceValue,
        getTimesCons
    })
}

export default Product;