let adress = createAdress('rua a', 'São Paulo', 123);

/////////////// Factory function
function createAdress(street, city, number) {
    return {
        street,
        city,
        number
    };
}


/////////////// Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

