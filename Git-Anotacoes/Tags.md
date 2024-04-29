## Conceito de tag

Tag aponta para um commit especifico que foi importante por exemplo, marca apenas alguns commits, não todos. Geralmente são commits de versões grandes exemplo: 1.0, 2.0;

Tags marcam versões lançadas;

## Comandos

git tag (nome da tag) = cria a tag no ultimo commit realizado;

git tag -a -m “mensagem” = cria uma tag anotada com quem fez e mensagem;

git tag = mostra todas as tags;

git tag -n = mostra as mensagens das tags;

git tag -a -m (mensagem) (nome) (codigo do commit) = vai colcoar tag num commit antigo;

git push origin (nome da tag) = envia para o servidor

git push —tags = envia todas as tags para o servidor, não é aconcelhado;

git checkout (nome da tag) = vai direto para o commit;

git diff (nome da tag 1) (nome da tag 2) = compara as tags;

git tag -d (nome da tag) = deleta a tag;

git push —delete origin (nome da tag) = deleta a tag no servidor;
