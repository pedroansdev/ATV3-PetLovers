import { InClient, InCpf, InPet, InRg, InPhone, InProduct, InService } from "./interfaces";

function Client(client: InClient) {
    let registrationDate = new Date();

    const setName = (name: string) => {
        client.name = name;
    }

    const setSocialName = (socialName: string) => {
        client.socialName = socialName;
    }

    const setCpf = (cpf: InCpf) => {
        client.cpf = cpf;
    }

    const setRgs = (rgs: InRg[]) => {
        client.rgs = rgs;
    }

    const setPhones = (phones: InPhone[]) => {
        client.phones = phones;
    }

    const setPets = (pets: InPet[]) => {
        client.pets = pets;
    }

    const getId = () => {
        return client.id;
    }

    const getName = () => {
        return client.name;
    }

    const getSocialName = () => {
        return client.socialName;
    }

    const getCpf = () => {
        return client.cpf;
    }

    const getRgs = () => {
        return client.rgs;
    }

    const getPhones = () => {
        return client.phones;
    }

    const getPets = () => {
        return client.pets;
    }

    const getConsProd = () => {
        return client.prodConsumed;
    }

    const getConsServ = () => {
        return client.servConsumed;
    }

    const consumeProduct = (product: InProduct) => {
        client.prodConsumed.push(product);
    }

    const consumeService = (service: InService) => {
        client.servConsumed.push(service);
    }

    return({
        setName,
        setSocialName,
        setCpf,
        setRgs,
        setPhones,
        setPets,
        consumeProduct,
        consumeService,
        getName,
        getSocialName,
        getCpf,
        getRgs,
        getPhones,
        getPets,
        getConsProd,
        getConsServ
    })
}

export default Client;