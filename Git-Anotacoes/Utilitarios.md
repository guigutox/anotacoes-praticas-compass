## Alias

git config —global alias.s status = agora o status é conhecido como s apenas;

git config —global alias.l log = agora o log é conhecido como l;

git config —global alias.line ‘log —oneline’ = agora reconhece o log —oneline como line;

git config —global —unset alias.s = agora não é mais reconhecido;

## Grep

Case sensitive!

git branch | grep (nome) = filtra a pesquisa;

git log —oneline | grep commit = filtra a pesquisa de log
