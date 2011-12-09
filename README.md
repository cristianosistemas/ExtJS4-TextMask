MaskText for ExtJS 4
====================

**Author:** Rodrigo Krummenauer do Nascimento

**Site:** www.rkn.com.br

**Email:** rodrigoknascimento@gmail.com

**Version:** 4.3

**License:** GPLv3


CHANGE LOG
----------
###2.3

- Problema resolvido que ocorrria no Chrome quando se digitava um mesmo numero 3 vezes na mascara do tipo Money
- Adicionada funcionalidade de poder iniciar o componente com um valor usando a propriedade value fazendo mascara do valor

###2.4

  - Resolvido BUG do IE, nenhuma mascara funcionava no IE

###2.5

  - Problema ao setvar valores sem decimais resolvido

###2.6

  - Problema de disparar o validade do campo ao apagar tudo selecionando todo o campo e dando um BACKSPACE resolvido.

###2.7

  - Adicionado suporte a propriedade readOnly

###2.8

  - Adicionado Ext.util.Format.MoneyMask

###2.9

  - Adicionada funcionalidade useMask quer ativa ou desativa o uso da classe de mascara.

###3.0

  - Adicionada funcionalidade de negativar ou positivar o valor da mascara monetária.

###4.0

  - Compatibildade com ExtJS 4.x 

###4.1

  - Mapeado o método setMask do plugin para o Field usuário do plugin

###4.2

  - Mapeado o método getRawValue do plugin para o Field usuário do plugin, permitindo validação usando o valor sem mascara

###4.3

  - Resolvido o erro que acontecia quando o campo usava uma mascara e returnWithMask sendo o primeiro do formuário
  - Agora o campo é marcado como inválido se possui mascara e está setado returnWithMask: true quando não contém valor


TODO
----

- Selection para o IE
- Copy e Paste