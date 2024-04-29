## Como definir?

Bitcoin com uma rede computadorizada;

Ethereum usa assinaturas digitais;

Smart contracts (bitcoin não possui);

Blockchain imutável;

## O ETHEREUM

- Blockchain;
- Mineração;
- Criptografia;
- Decentralizado;
- Consenso;
- Projetado para diversas aplicações possíveis;
- Moeda nativa é o ether;
- 1 ether pode ser dividido em um quintilhão de partes;
- Mineração memory hard;
- Transações envolvem processamento e transferências;
- Smart contracts;
- Origens mais claras;
- Qualquer algoritmo pode ser executado na rede ethereum;
- Ethereum virtual machine;

### Fundação ethereum

- Opera com fundos vindos da criação do ethereum;
- Coordena, financia e advoga;
- Não detem poder decisório oficialmente;
- Opera em conjunto com os outros agentes importantes e com core developers;
- Consenso guiado e subtraction mindset;

## Account and states

- Externally Owned Accounts (EOA): Controladas por usuários detentores de uma chave secreta;
- Contract Accounts: São ativadas por EOAs, mas controladas apenas por sua programação interna;

States de todas as accounts ficam armazenados fora da blockchain, em uma estrutura de dados chamada STATE TREE;

States trás simplicidade conceitual e é eficiente trabalhar desta forma;

## Ethereum Virtual Machine

Todos os nós da rede ethereum executam todo o código em todos os blocos;

Ethereum virtual machine é instalado no computador que se comunica com a rede ethereum;

Ao instalar, cria uma máquina virtual, logo padroniza em relação a rede e pode rodar em diferentes dispositivos com diversos sistemas;

A EVM se comunica diretamente com a rede ethereum;

Todo nó da rede possuí a EVM;

EVM permite que linguagens de alto nível sejam usadas para criar algoritmos executáveis em qualquer máquina com um nó Ethereum;

Linguagem da rede = solidity;

## GAS

Tudo que roda na rede ethereum tem que ser capaz em todo tipo de hardware que estiver na rede;

Problemas:

- Custo de processamento;
- Vulnerável a ataques DOS
- Algoritmos com problema;
- Loops infinitos;

Solução:

GAS = toda transação na rede tem um custo em GAS;

+Complexo = +Caro;

Toda operação será executada até:

- Finalizar normalmente;
- Atingir GAS limit = máximo que pode gastar em casa operação;
- Usar todo o GAS enviado na transação;

Para uma mesma operação, o custo em GAS é sempre o mesmo;

O preço do GAS varia em função da demanda;

## Smart Contracts

Definição = Um conjunto de regras combinadas entre duas ou mais partes, traduzida em código computacional, verificável e auto executável;

No Ethereum: um conjunto de código e dados que reside em uma account;

Possuem um endereço e um balanço;

Entrada = ETH + dados;

Saída = Output predefinido;

Podem se comunicar cm outros contratos e endereços;

Podem se autodestruir e criar novos contratos;

No smart contract tudo que foi programado para acontecer, irá acontecer;

Lógica interna do smart contract que ordena o que irá acontecer;

### Criando um smart contract

Insere as instruções e a quantidade de ether necessária;

Minerador vai processar o código;

Adiciona-lo a blockchain;

Smart contract está criado;

Exemplo do que podem fazer:

Possível guardar o ETH e requisitar que só possa sacar o dinheiro se tiver assinatura de duas partes;

Contrato de governança: parecido com uma ação, dá o ETH para a empresa e ela devolve um token no qual quem tem os tokes podem participar de votações e decisões;
