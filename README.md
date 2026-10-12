# Receitas de Chef — app de membros das 100 Receitas que Marcaram o MasterChef

Entrega do produto **100 Receitas que Marcaram o MasterChef** (link cadastrado na Wiapy).
Cópia do app dos Brincos de Arame (`apps/arame-membros`), que vem do app da Juh
(`apps/micanga-membros`): mesma estrutura, leitor, virada de página, lupa e guia.

    node servidor.cjs     # http://localhost:4220

## O que muda em relação ao de arame

- **marca** Receitas de Chef, logo redondo com o prato da capa, paleta verde-oliva, vinho e dourado do livro
- **guia "Dúvidas?"** reescrito para "Como usar uma receita"
- **missão 1**: Omelete Francesa (receita 03, páginas 6 e 7)
- **aba Vídeos trancada** com "Em breve"

## Conteúdo

| slug | material | páginas | estado |
|---|---|---|---|
| principal | 100 Receitas que Marcaram o MasterChef | 201 | liberado |
| b1 | 30 Sobremesas do MasterChef | — | em breve |
| b2 | Lista de Compras das 100 Receitas | — | em breve |
| b3 | Guia de Temperos do Chef | — | em breve |
| b4 | 10 Cardápios Prontos para Receber | — | em breve |
| molhos | 30 Molhos Secretos MasterChef (order bump) | — | em breve |
| saladas | 20 Saladas Irresistíveis de Chef (order bump) | — | em breve |

O principal tem 201 páginas: a capa + 100 receitas × 2 (ficha e passo a passo).

## Para liberar um bônus ou extra

1. gerar as páginas em `assets/livros/<slug>/pag-001.webp` … (a 1 é a capa em pé)
2. gerar o PDF em `pdf/`
3. no `catalogo.js`, acertar `paginas` e trocar `embreve` para `false`

## Ainda não ligado

Igual aos outros apps: o login só confere o formato do e-mail, e o link de suporte do perfil
aponta para `https://wa.me/` sem número.
