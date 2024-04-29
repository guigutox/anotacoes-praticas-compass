## Revertendo commits

git revert (hash do commit) = reverte o commit selecionado;

git revert head = reverte o ultimo commit;

git revert (hash do commit) —no-edit = reversão da reversão → volta ao estago original;

## Desfazer commits

git reset —hard HEAD~1 = vai esquecer 1 commit, ele desfaz e apaga o commit imediatamente anterior;

git reset —mixed HEAD~1 = vai esquecer o ultimo commit e mixar as mudanças na área de trabalho;

git reset —soft HEAD~1 = vai esquecer o ultimo commit e deixar as mudanças na área de preparação;

## Forçando mudanças

git push —force = força o github a aceitar as mudanças que está enviando, sobrescreve o git;

git push —force-with-lease = faz o force apenas se nenhuma alteração for perdida no processo;

## Rebase

Rebase altera o histórico da branch

git rebase (branch de onde quer trazer mudanças) = trás as mudanças da branch selecionada;

git rebase —abort = desiste do rebase;

git pull —rebase = busca os remotos, vai trazer o repositório e escrever em cima dele as suas mudanças;

git rebase -i HEAD~x = x é o numero de commits que você irá juntar;

## Recriando branch SV

git fetch origin (nome da branch) = trará as informações da branch do servidor;

git checkout (nome da branch) = mapeará a branch para o local;

## Cherry pick

git cherry-pick (numero do commit) = trás o commit específico de outra branch direto para a sua atual, trás especificamente alguma coisa.

## Bisect

Auxilia a quando há um erro no repositório;

git bisect start = procurará os que possuem erro;

## Fetch

Trás alterações e coloca no repositório local;

git fetch = mostra as alterações que vem do servidor remoto;
