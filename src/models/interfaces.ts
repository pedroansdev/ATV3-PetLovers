interface InCompany {
    clients: InClient[];
    products: InProduct[];
    services: InService[];
    pets: InPet[];
    prHistSpe: InPrHistSpe[];
    prHistBre: InPrHistBre[];
    seHistSpe: InSeHistSpe[];
    seHistBre: InSeHistBre[];
}

interface InClient {
    id: number;
    name: string;
    socialName: string;
    registrationDate: Date;
    cpf: InCpf;
    rgs: InRg[];
    phones: InPhone[];
    prodConsumed: InProduct[];
    servConsumed: InService[];
    pets: InPet[]; 
}

interface InCpf {
    value: string;
    emissionDate: Date;
}

interface InRg {
    value: string;
    emissionDate: Date;
}

interface InPhone {
    ddd: string;
    number: string;
}

interface InProduct {
    id: number;
    name: string;
    price: number;
    timesCons: number;
}

interface InService {
    id: number;
    name: string;
    type: string;
    price: number;
    timesCons: number;
}

interface InPet {
    id: number;
    name: string;
    size: string;
    breed: string;
    species: string;
    genre: string;
    owner: InClient[];
}

interface InPrHistBre {
    product: InProduct;
    breed: string;
    timesConsumed: number;
}

interface InPrHistSpe {
    product: InProduct;
    species: string;
    timesConsumed: number;
}

interface InSeHistBre {
    service: InService;
    breed: string;
    timesConsumed: number;
}

interface InSeHistSpe {
    service: InService;
    species: string;
    timesConsumed: number;
}

export type {
    InCompany,
    InClient,
    InCpf,
    InPet,
    InPhone,
    InPrHistBre,
    InPrHistSpe,
    InProduct,
    InRg,
    InSeHistBre,
    InSeHistSpe,
    InService,
}