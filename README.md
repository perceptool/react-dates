# Gauge React Dates
O Gauge React Dates é um fork do componente de datas do Airbnb. Foi preciso fazer este fork pois o componente original não permite que o usuário selecione, além da data, um horário de início e fim.

> Esse fork está hospedado dentro da organização [GaugerBrasil](https://github.com/GaugeBrasil).

# Instalação

## Clonando o repositório
```
git clone git@github.com:GaugeBrasil/gauge-react-dates.git
```

> Obs.: O comando acima faz o clone via ssh, mas para isso funcionar você precisa ter [configurado sua chave ssh](https://help.github.com/articles/connecting-to-github-with-ssh).

## Instalando dependências
No diretório raiz do projeto, execute:
```
npm install
```

## Rodando localmente
No diretório raiz do projeto, execute:
```
npm run storybook
```
Ele irá servir a aplicação localmente na porta `9001`. A cada modificação salva, a aplicação será atualizada automaticamente no navegador. Acesse: [http://localhost:9001](http://localhost:9001).

# Desenvolvimento
Ok, já estamos com a aplicação rodando. Agora, como faço alterações na aplicação? Bom, aqui entra basicamente o dia a dia de trabalho, mas vamos só evidenciar alguns pontos importantes:

## Um pouco sobre a estrutura e a customização que fizemos
O React Dates está dividido em vários componentes menores que compõem um todo. Estes componentes se localizam dentro da pasta `src/components`. O que a Gauge fez foi criar um novo componente chamado `DateTimeRangePicker` que permite o usuário selecionar um horário de início e fim. Para isso funcionar em conjunto com os outros componentes, foi preciso modificar um pouco o funcionamento original.

O funcionamento original tinha como saída duas datas, uma de início e outra de fim, com horários prefixados (12h00). Com a customização é possível, além das datas, selecionar também os horários. Ou seja, agora o componente faz um "merge" do horário de início com a data de início, fazendo deles um dado só. Faz o mesmo para o horário fim e a data fim. Como saída, continuamos tendo duas datas, porém com os horários escolhidos pelo usuário.

## Customizando o React Dates

As customizações feitas pela Gauge **estão reunidas em uma branch específica chamada `DateTimeRangePicker`**. Toda alteração que você precisar fazer, faça nessa branch. A publicação é feita a partir dessa branch também. Veja como no tópico seguinte.

## Publicando uma nova versão do componente
Uma vez feita a implementação necessária prosseguimos normalmente para a publicação do pacote. No diretório raiz do projeto – e estando na branch `DateTimeRangePicker` –, execute:

```sh
# faz o commit das alterações
git add -A
git commit -m "My changes' description"

# incrementa versão
npm run version:patch 	# pode ser também: version:minor ou version:major

# faz o commit da versão
git commit -am "Incrementa versão no package.json"

# faz push das alterações
git push origin DateTimeRangePicker

# faz a construçao do pacote
npm run build

# faz a publicação
npm publish
```

## E se eu precisar baixar atualizações do repositório original?

Há um artigo do próprio github ensinando a sincronizar um fork com o repositório original. Em suma, o que é necessário fazer é: trazer as alterações da branch `master` do repositório original (chamada de `upstream/master`) para a branch `master` do nosso fork (chamada apenas de `master`). Feito isso, o próximo passo é fazer o merge da `master` na branch `DateTimeRangePicker`.

> Vale lembrar que, passado muito tempo sem sincronizar o repositório, pode haver *break changes* implementadas e isso é mais trabalhoso de resolver, embora ainda possível. 

Segue link para o artigo: <br/>
[https://help.github.com/articles/syncing-a-fork](https://help.github.com/articles/syncing-a-fork)