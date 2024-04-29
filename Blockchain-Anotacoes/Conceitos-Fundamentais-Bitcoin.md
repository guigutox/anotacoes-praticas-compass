## Rede por trás do bitcoin

Rede de computadores distribuída;

Rede não possuí hierarquia;

Protocolo de consenso = todos os computadores da rede precisam estar de acordo;

Qualquer pessoa pode criar um nó dessa rede, basta usar um bitcoin client;

2 tipos de nós diferentes:

FULL NODES:

- Validam todas as transações emitidas pela rede;
- Mantêm a consistência da blockchain;
- Mineradores;

LITE NODES:

- Não armazenam toda a blockchain;
- Necessitam de informação de outros nós;
- Carteiras de bitcoin;

## Processo de transferencia

1- Notifica o nó que quer realizar a transferencia para algum destinatário;

2- O nó verifica se esta tudo certo com o pedido;

3- Se estiver ele começa a espalhar o pedido para outros nós (protocolo de fofoca);

## Mineradores

- Validam as transações recebidas e criam novos blocos;
- Competem entre si pelo direito de adicionar o próximo bloco na blockchain;
- Verificam blocos obtidos por outros mineradores e adicionam a blockchain quando válidos;
- Sempre estendem o ramo mais longo da blockchain;

## Proof of Work

Hash é calculado a partir do NONCE + Dados + Hash do anterior

NONCE = um número, um algarismo sem significado que é adicionado a cada bloco da blockchain, os mineradores alteram o valor do nonce tentando cumprir com o requisito do proof of work.

O minerador que pode registrar o próximo bloco na blockchain é aquele que descobrir o Nonce do bloco mais atual da blockchain;

É necessário achar um Nonce que com o hash do bloco seja encontrado com uma quantidade de zeros;

Quantidade de zeros define a dificuldade;

1- Todos os mineradores começam a procurar o que irá resultar em uma cadeia de zeros;

2- Mineradores aceitam e começam a minerar a partir do novo ;

3- Caso neguem, apenas continuam minerando no antigo;

Mineradores recebem a partir das taxas de transação e com a COINBASE TRANSACTION

Coinbase Transaction: quando minerador encontra o bloco, ele ganha o direito de por uma quantidade de bitcoins dentro do bloco, existe um limite para quando pode colocar a cada bloco;

Dificuldade da mineração:

Computador convencional demoraria 146 bilhões de anos para minerar bloco novo;

Mineração é um negócio profissional, com investimento nos hardwares;

Mineração de bitcoins corresponde a 0,16% do gasto total de eletricidade no mundo;

### Mining pools

Um nó coordena vários mineradores;

Nó cria o bloco e os mineradores começam a minerar;

Quando um minerador encontra ele envia para o coordenador e envia para cada um a parte de cada um;

A quantia recebida é proporcional ao trabalho feito por eles;

## GASTO DUPLO

Gasto duplo consiste em gastar o mesmo dinheiro 2 vezes;

Proof of work evita este problema;

Conceito importante: Mineradores sempre estendem o ramo mais extenso da blockchain;

DOIS BLOCOS PODEM SER INCLUIDOS AO MESMO TEMPO

Caso ocorra serão criadas 2 ramificações, a que crescer mais primeiro será a continuação, porém a que não foi continuada terá suas operações incluídas na que foi continuada;

Pra enganar o sistema, quem está tentando enganar precisará de 51% do hash power da rede, para assim ultrapassar a mineração que está estendendo o maior ramo.

- Funciona por que Funciona;
- Não existe nada forçando os mineradores a se comportar da forma correta;
- Seguindo o protocolo, os mineradores são remunerados e mantêm a segurança do sistema;
- Praticamente impossível um minerador agir de forma maliciosa e lucrar pois precisaria de muito poder computacional e destruiria a confiança no sistema;

Foco dos hackers é descobrir as chaves secretas dos usuários pois é mais fácil.
