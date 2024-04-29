## Configuração inicial

git config —global [user.name](http://user.name) “nome” = definir o seu nome;

git config —global [user.](http://user.name)email “email” = definir o seu email;

git config —global [user.name](http://user.name)  = exibe qual o nome atual;

git config —global [user.](http://user.name)email  = exibe qual o email atual;

git config —global core.editor “code —wait”;

---
### Comandos gerais

ls = lista todos os arquivos do local;

ls -a = lista até mesmo arquivos ocultos;

git status = mostra o status atual dos arquivos;

git diff = mostra a diferença entre os arquivos, arquivo antes de modificar e depois de modificar;

git diff —cached = mostra a diferença entre o arquivo atual vs o arquivo que está adicionado;

git diff —staged = mostra a diferença entre o arquivo e a área de preparação;

code . = abre o editor de texto na pasta;

---

### Criação de repositório local

git init = inicia um repositório git no local;

---

### Adicionar ou remover arquivo

git add (nome do arquivo) = adiciona o arquivo para o git;

git add —all ou -A ou . = adiciona todos os arquivos para o git;

git rm —cached (nome do arquivo) = remove o arquivo para o git mas não apaga;

git rm —cached -r . = remove todos os arquivos para o git mas não os apaga;

---

### Commit

git commit -m “Mensagem” = cria um commit e insere uma mensagem do commit;

git commit —amend -m “Nova mensagem” = alteram a mensagem do último commit realizado;

git commit —amend —no-edit = adiciona o add ao commit sem trocar mensagem;

git commit —amend = abre o VIM para alterar a mensagem

---

### Log (histórico)

git log = listagem dos commits que foram feitos (apertar Q vai para o fim da página);

git log —oneline = mostra o hash de cada commit e a mensagem;

git log -x = x sendo um número, mostrará a quantidade de commits;

git log -p = mostra as alterações realizadas;

git log —stat = mostra só o que foi alterado;

git log shortstat = mostra so os arquivos alterados e quantas linhas foram add/removidas;

Checkout(alternar versões)

git checkout (hash do commit) = volta numa versão anterior do commit escolhido;

git checkout master = volta para a branch master;

git checkout (nome do arquivo) = volta para a versão imediatamente anterior;

git clean -f  = limpa os arquivos não conhecidos pelo git de forma forçada;

git restore = retorna a um ponto commit

git rm = remove da área de preparação “staged”

git reset —hard = ignora tudo do ultimo commit, independentemente

---


### Ignorar arquivos

touch .gitignore = cria um arquivo que será usado para ignorar no local;

*.(extensão) = vai ignorar arquivos com aquela extensão;

nome do arquivo = ignora o arquivo em específico;

---

### Para de rastrear um arquivo

Caso arquivo tenha sido commitado realize esse comando para que possa ignorar ele;

git update-index —skip-worktree (nome do arquivo) = para de rastrear um arquivo;

---

### Clonar

git clone herda o histórico, arquivos e tudo mais;

git clone (nome do diretório) (nome do novo diretório) = clona o repositório;

git clone (url do github) = clona o repositório;

---

### Linkar repositório

git remote add origin (link do repositório) = Adiciona o link do repositório de origem;

git remote -v = verifica aos repositórios que ele está ligado remotamente;

git remote set-url origin (link do rep) = altera o link do repositorio de origem; 

---

### Atualizar repositório local

git pull = puxa as ultimas atualizações para seu repositório;

### Fork

No github ao usar o FORK cria uma versão para o seu perfil do repositório original;

Botão sync fork sincroniza a sua branch com a original;

### Pull request

Ao realizar uma alteração em um repositório que fez FORK, você pode propor a mudança que você fez no seu repositório para o repositório original;

### Issues

Criar um Issue faz com que seja possível apontar o erro para o repositório;

LABELS = são categorias para categorizar os problemas que ocorrem;

Milestones = Usado para mostrar os issues que precisam ser resolvidos até atingir a meta;

### Read.me

Arquivo de marcação para detalhar o repositório e/ou pasta do repositório;

---

### Chave SSH

É uma maneira de autenticar para ter uma conexão mais segura;

No git bash:

ssh-keygen → use enter até ser criada a pasta ssh

cd ^/.ssh = entrar na pasta ssh

start .  = abre a pasta

Arquivo id_rsa.pub = nele há a key ssh para ser usada no github, copiar ela para usar;

Abrir github, configurações, ssh e cadastrar nova chave ssh;

Acessar manualmente a chave:

eval $(ssh-agente) = starta a conexão;

ssh-add caminho ex(~/.ssh/arquivo) = vai direcionar ao SSH que quer usar;

Para acessar o repositório vc precisa ter a chave SSH no seu pc e no github