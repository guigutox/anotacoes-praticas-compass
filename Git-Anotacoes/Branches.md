## O que é?

Branch é uma ramificação no projeto que permite que funcionalidade sejam desenvolvidas separadamente sem impactar funcionalidade estáveis no projeto.

## Merge

Merge consiste em mesclar a branch alternativa para a branch main/master. Logo levar suas alterações para ela;

## Comandos

git branch = mostra qual branch está;

git branch —list = mostra as branchs do repositório;

git branch (nome) = cria uma nova branch;

git checkout (nome) = trocar para a branch indicada pelo nome inserido;

git checkout -b (nome) = cria a branch e já altera para ela;

git switch (nome da branch) = troca de branch;

git switch - = volta para a ultima branch utilizada;

git switch -c (nome) = cria branch e alterna para ela;

QUANDO TROCAR DE BRANCH COMMITE SE NÃO AS ALTERAÇÕES MUDAM JUNTO DE BRANCH

git checkout -f (nome da branch) = limpa as alterações antes de trocar de branch

### Datached Head

Ao usar o checkout ele muda o head para outra branch e entra em detached head;

Criar branch de um commit do passado, sem ser o commit mais recente.

### Criar branch no servidor

Quando uma branch local não está mapeada no servidor, logo precisa criar uma para o servidor com o comando abaixo

git push —set-upstream origin (nome branch) = trackei para o servidor;

git push -u origin (nome branch);

### Deletar branch

git branch -d (nome da branch) = deleta local a branch que for passada;

git branch -D (nome da branch) = força a deletar local a branch que for passada;

git push —delete origin (nome da branch) = apaga a branch no servidor;

### Renomear branch

git branch -m (novo nome) = altera o nome da branch em que está checkado;

git branch -m (nome antigo) (novo nome) = altera o nome da branch sem estar checkado nela;

### Alternativa de histórico de branch

git log (nome da branch) -oneline = lista os commits da branch passada no parâmetro;
