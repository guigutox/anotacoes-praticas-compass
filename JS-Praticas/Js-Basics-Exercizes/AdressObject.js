const adress = {
    street: "Rua das Laranjeiras",
    number: 123,
    city: "São Paulo"
};

function showAdress(adress) {
    for (let key in adress) {
        console.log(key, adress[key]);
    }
}

showAdress(adress)