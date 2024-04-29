## Crise de 2008 e surgimento da blockchain

Bitcoin surge num contexto pós crise;

Bitcoin é uma unidade de troca;

Bitcoin já possui um serviço de pagamento próprio;

No máximo existirão 21 milhões de bitcoins;

Bitcoin ainda não provém tudo que o sistema bancário tradicional provê;

## Blockchain

Cada bloco na blockchain, possui uma cadeia de dados, sejam videos, musicas, textos e etc;

Propriedade mais importante: Todo bloco tem ligação com seu anterior, logo se mudar uma informação por menor que seja de um bloco anterior, todos os blocos a frente serão alterados;

Utiliza função HASH:

- Função hash transforma um texto de entrada(input) em um texto de saída(output) de tamanho fixo;
- O texto de entrada pode ter qualquer tamanho;
- O texto de saída sempre tem o mesmo tamanho;
- Ex: catálogos;

Função hash criptográfica?

- Fácil de computar;
- Livre de colisão: quase impossível dois inputs com o mesmo output;
- Unidirecional: quase impossível descobrir o input dado seu hash;
- Puzzle friendly = amigável com quebra cabeças, se quiser encontrar um determinado hash ou output, terá de procurar um por um, não há atalho;

### Funcionamento da blockchain

Para criar o hash do novo bloco utiliza:

- Dados do bloco
- Hash do anterior

Assim gera o hash do bloco atual, o próximo realizará o mesmo processo;

É muito dificil falsificar uma transação, pois qualquer alteração geraria uma alteração em cascata. Gerando blocos sequenciais diferentes. O malfeitor teria que alterar o próximo, e o próximo e assim infinitamente alterando.

Falsificar a blockchain consiste em basicamente criar toda uma nova blockchain a partir de onde começou a falsificar;

## Assinaturas digitais

Assinatura digital garante que apena você terá acesso a seus bitcoins;

Quando irá fazer uma transação, tem de assinar ela com sua assinatura digital;

### Características

- Só você pode assinar;
- Qualquer um pode verificar sua assinatura;
- Assinatura atrelada ao documento;

Chave secreta(SK) = apenas o dono conhece;

Chave Pública(PK) = os outros podem ter conhecimento, não precisa ser atrelada a sua identidade;

Assinatura = criada a partir de cálculos com chave secreta e publica;

Utiliza ambas as chaves para gerar o documento e envia;

Para verificar utiliza o documento, a assinatura de quem enviou e a chave publica de quem enviou
