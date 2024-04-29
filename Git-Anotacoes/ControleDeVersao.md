## Benefícios do controle de versão

- Histórico de alterações
- Pequenos ou grandes projetos
- Histórico:
  Permite alternar entre as versões e restaurar versões antigas caso algum problema ocorra
- Ramos (branches):
  Permite a criação de diferente versões a partir de um único ponto de partida;
  Mesclar funcionalidade após testadas;
- Rastreabilidade:
  Identificar quando uma ou mais mudanças foram executadas;

## Tipos de controle de versão

### Centralizado:

- Servidor contém todo o histórico;
- Padrão por muitos anos Subversion e GIT;
- Defeitos: Servidor conter todo o histórico, caso de problema no servidor impacta o projeto;

### Distribuído:

- Toda máquina possui uma cópia do repositório;
- Mudanças são realizadas localmente;
- Não depende de uma única máquina;

## Características Git

### 1-Ações locais

- Navegação de histórico;
- Criação de branch;

### 2-Intregridade

- Uma vez que um arquivo é adicionado, todo seu histórico é guardado;
- Marca a remoção de arquivo é feito através de uma adição de versão onde diz que o arquivo foi removido;

### 3-Desenvolvimento Linear

- Várias versões a partir de um único ponto;
- Facilidade para diversas pessoas realizarem alterações sem dependência de arquivos;

### 4- Independência da complexidade do projeto

- Eficiência para pequenos ou grandes projetos
- Complexidade de uso permanece a mesma.
