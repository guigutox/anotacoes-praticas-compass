## INICIANDO PROJETO

COMANDOS:

- truffle init
- npm init -y
- echo "node_modules" > .gitignore

MAIS DETALHES:

 https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/03-truffle-setup/ 

---

### Truffle migrations

Caso o construtor necessite de algum parametro, como por exemplo:

```jsx
    constructor(address initialOwner)
        ERC721("Spacebear", "SBR")
        Ownable(initialOwner)
    {}

```

Basta adicionar no migrations os parametros desta forma, no deploy, separados por virgula:

```jsx
const SpaceBear = artifacts.require("Spacebear");

module.exports = function (deployer, network, accounts) {
    const initialOwner = accounts[0];  // Usar o primeiro endereço disponível como proprietário inicial
    deployer.deploy(SpaceBear, initialOwner, agr 3, arg4);
};

```

Utilizar o ganache:

- Utilize o comando: npm install —global ganache

Vá até o truffle config.js

```jsx
    // options below to some value. insira abaixo dessa linha
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
```

Para rodar o truffle na rede ganache utilize no terminal:

```jsx
truffle migrate --network ganache
```

### Encontrar endereço do contrato:

- Entre no arquivo json do contrato;
- procure pelo campo preenchido por numeros aleatorios;
- O address estará no campo address:

```jsx
    "1721240138515": {
      "events": {},
      "links": {},
      "address": "0x88A5542739e5d74f5ea9423bD4D46a7476F89d9B",
      "transactionHash": "0xeba67a2d41c6d7eba0929a6fd548e82ecaddd0256709e54665f5a1109a25ad02"
    }
```

MAIS DETALHES:  

https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/04-truffle-migrations/

---

### Usando truffle para interagir com os smart contracts

https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/05-truffle-javascript-console/

Para testar se está conectado a rede use:

```jsx
web3.eth.getAccounts();
```

Após isso crie uma nova instancia, exemplo:

```jsx
const spacebear = await Spacebear.deployed()
```

Teste se deu certo usando tentando verificar um campo do objeto, exemplo:

```jsx
spacebear.name()
```

Por fim, instancie um novo objeto usando as contas, exemplo:

```jsx
const accounts = await web3.eth.getAccounts();
await spacebear.safeMint(accounts[1], "spacebear_1.json");
```

Acesse a URI ou detalhes usando:

```jsx
spacebear.ownerOf(0);
spacebear.tokenURI(0);
```

---

## Test unitário com truffle

https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/06-truffle-unit-testing/

---

## Implantar smartcontracts em redes reais

https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/07-truffle-deployment-methods/

---

## Debugging smart contracts com truffle

https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/08-truffle-debugging-development/

---

### ERC20 vs. ERC777

### ERC20

- **Interface de Token Padrão**: Um dos padrões de token mais amplamente utilizados no Ethereum.
- **Simplicidade**: Implementação direta, fácil de entender e usar.
- **Funções Básicas**: Inclui funções para transferência de tokens (`transfer`, `transferFrom`), verificação de saldos (`balanceOf`) e aprovação de permissões (`approve`, `allowance`).
- **Eventos**: Inclui eventos para `Transfer` e `Approval`, usados para registrar transferências de tokens e permissões.
- **Adoção**: Extremamente popular e amplamente adotado em várias plataformas e exchanges.
- **Limitações**:
    - **Problemas de segurança**: Vulnerável a erros como a função `approve` e a possível race condition.
    - **Funcionalidades limitadas**: Não suporta funções avançadas como hooks de pré/pós-transação.

### ERC777

- **Interface Avançada**: Um padrão de token mais recente com recursos avançados.
- **Compatibilidade Retroativa**: Compatível com ERC20, permitindo que seja usado em sistemas existentes.
- **Hooks de Transação**: Suporta hooks que permitem a execução de código personalizado antes e depois das transferências de tokens, melhorando a flexibilidade e a segurança.
- **Funções Básicas**: Mantém as mesmas funções básicas do ERC20, com melhorias.
- **Controle de Operador**: Introduz a ideia de operadores que podem gerenciar tokens em nome do titular, semelhante à funcionalidade de permissão de ERC20, mas mais flexível.
- **Eventos**: Inclui eventos mais ricos para maior transparência nas transações.

---

### ERC721 vs. ERC1155

### ERC721

- **Tokens Não Fungíveis (NFTs)**: Projetado para tokens únicos, onde cada token tem um identificador exclusivo.
- **Individualidade**: Cada token é distinto e não intercambiável com outros tokens.
- **Funções Básicas**: Inclui funções para transferir, verificar saldo e aprovar transferências de tokens individuais.
- **Eventos**: Inclui eventos para transferências e aprovações.
- **Adoção**: Amplamente utilizado em casos de uso de NFTs, como arte digital, colecionáveis e imóveis virtuais.
- **Limitações**:
    - **Eficiência**: Não é eficiente para transferir múltiplos tokens em uma única transação.
    - **Complexidade**: Cada token único requer uma entrada separada.

### ERC1155

- **Tokens Multi-ativos**: Suporta tanto tokens fungíveis quanto não fungíveis dentro de um único contrato.
- **Flexibilidade**: Permite a criação de múltiplos tipos de tokens, cada um com seu próprio ID.
- **Transferências em Massa**: Suporta transferências em massa de vários tipos de tokens em uma única transação, aumentando a eficiência.
- **Funções Básicas**: Inclui funções para transferir, verificar saldo e aprovar transferências de múltiplos tokens.
- **Eventos**: Inclui eventos para transferências e aprovações, com suporte para transferências em massa.
- **Adoção**: Popular em jogos e aplicativos onde múltiplos tipos de ativos são necessários, como itens de jogo, moedas e recursos.

---

### Resumo

- **ERC20** é simples e amplamente adotado para tokens fungíveis.
- **ERC777** oferece funcionalidades avançadas e maior flexibilidade, mantendo compatibilidade com ERC20.
- **ERC721** é ideal para tokens únicos e não fungíveis.
- **ERC1155** combina fungibilidade e não fungibilidade em um único contrato, oferecendo eficiência e flexibilidade para casos de uso complexos.

---

## Teste unitário com hardhat

https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/12-hardhat-testing/

---