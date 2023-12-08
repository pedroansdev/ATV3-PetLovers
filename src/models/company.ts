import { InClient, InCompany, InPet, InPrHistBre, InPrHistSpe, InProduct, InSeHistBre, InSeHistSpe, InService } from "./interfaces";

function Company(company: InCompany) {
    const setClients = (clients: InClient[]) => {
        company.clients = clients;
    }
    
    const addClient = (client: InClient) => {
        company.clients.push(client);
    }

    const setProducts = (products: InProduct[]) => {
        company.products = products;
    }

    const addProduct = (product: InProduct) => {
        company.products.push(product);
    }

    const setServices = (services: InService[]) => {
        company.services = services;
    }

    const addService = (service: InService) => {
        company.services.push(service);
    }

    const setPets = (pets: InPet[]) => {
        company.pets = pets;
    }

    const addPet = (pet: InPet) => {
        company.pets.push(pet);
    }

    const addProdHistBre = (prod: InPrHistBre) => {
        company.prHistBre.push(prod);
    } 

    const addProdHistSpe = (prod: InPrHistSpe) => {
        company.prHistSpe.push(prod);
    }

    const addServHistBre = (serv: InSeHistBre) => {
        company.seHistBre.push(serv);
    }

    const addServHistSpe = (serv: InSeHistSpe) => {
        company.seHistSpe.push(serv);
    }

    const getClients = () => {
        return company.clients;
    }

    const getProducts = () => {
        return company.products;
    }

    const getServices = () => {
        return company.services;
    }

    const getPets = () => {
        return company.pets;
    }

    const getHistProdBreed = () => {
        return company.prHistBre;
    }

    const getHistProdSpecies = () => {
        return company.prHistSpe;
    }
    
    const getHistServBreed = () => {
        return company.seHistBre;
    }

    const getHistServSpecies = () => {
        return company.seHistSpe;
    }

    return({
        setClients,
        addClient,
        setProducts,
        addProduct,
        setServices,
        addService,
        setPets,
        addPet,
        addProdHistBre,
        addProdHistSpe,
        addServHistBre,
        addServHistSpe,
        getClients,
        getProducts,
        getServices,
        getPets,
        getHistProdBreed,
        getHistProdSpecies,
        getHistServBreed,
        getHistServSpecies
    })
}