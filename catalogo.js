// Catalogo da area de membros Receitas de Chef. Tudo que a home e o leitor mostram sai daqui.
//
// Ao trocar um livro de lugar ou acrescentar paginas, mexa SO neste arquivo:
// nem a home nem o leitor tem conteudo escrito no HTML.
//
// `paginas` e a CONTAGEM, e os arquivos precisam existir como
// assets/livros/<slug>/pag-001.webp ate pag-<paginas>.webp, com 3 digitos.

const CATALOGO = {
  // o acesso grande da home. 201 = capa + 100 receitas x 2 paginas (ficha e passo a passo).
  principal: {
    slug: 'principal',
    titulo: '100 Receitas que Marcaram o MasterChef',
    paginas: 201,
    capa: 'assets/capas/principal.webp',
    pdf: 'pdf/100-receitas-masterchef.pdf',
  },

  // os bonus do plano completo. `paginas` inclui a capa, que e a pagina 1 de cada um.
  //
  // embreve: true = o bonus aparece com a capa e a faixa EM BREVE, mas nao abre, nao
  // conta como liberado e fica fora da biblioteca.
  // Quando um ficar pronto: gerar as paginas em assets/livros/<slug>/, o PDF em pdf/,
  // acertar `paginas` e trocar embreve para false (ou apagar a linha).
  bonus: [
    { slug: 'b1', titulo: '30 Sobremesas do MasterChef', sub: 'As sobremesas que marcaram o programa, passo a passo',
      paginas: 0, embreve: true, capa: 'assets/capas/b1.webp', pdf: 'pdf/bonus-1-sobremesas.pdf' },
    { slug: 'b2', titulo: 'Lista de Compras das 100 Receitas', sub: 'Tudo o que levar ao mercado, receita por receita',
      paginas: 0, embreve: true, capa: 'assets/capas/b2.webp', pdf: 'pdf/bonus-2-lista-de-compras.pdf' },
    { slug: 'b3', titulo: 'Guia de Temperos do Chef', sub: 'As combinações que dão sabor de restaurante',
      paginas: 0, embreve: true, capa: 'assets/capas/b3.webp', pdf: 'pdf/bonus-3-temperos.pdf' },
    { slug: 'b4', titulo: '10 Cardápios Prontos para Receber', sub: 'Entrada e prato principal para cada ocasião',
      paginas: 0, embreve: true, capa: 'assets/capas/b4.webp', pdf: 'pdf/bonus-4-cardapios.pdf' },
  ],

  // "Produtos Extras" (orderbumps do checkout). liberado: true = aparece aberto para todo
  // mundo (o app ainda nao sabe quem comprou o bump), como nos outros apps.
  // `paginas` inclui a capa. Formato: { slug, titulo, sub, paginas, de, por, liberado, capa, pdf, checkout }
  ofertas: [
    { slug: 'molhos', titulo: '30 Molhos Secretos MasterChef',
      sub: 'Os molhos que transformam qualquer prato.',
      paginas: 0, de: 'R$ 19,90', por: 'R$ 4,90', liberado: true, embreve: true,
      capa: 'assets/capas/molhos.webp',
      pdf: 'pdf/extra-molhos.pdf', checkout: '' },
    { slug: 'saladas', titulo: '20 Saladas Irresistíveis de Chef',
      sub: 'Até quem não gosta de salada vai querer repetir!',
      paginas: 0, de: 'R$ 19,90', por: 'R$ 4,90', liberado: true, embreve: true,
      capa: 'assets/capas/saladas.webp',
      pdf: 'pdf/extra-saladas.pdf', checkout: '' },
  ],

  // A aba de VÍDEOS. Vazia = a aba mostra o cadeado e o aviso de "Em breve".
  // Formato de cada item: { id: '<id do Wistia>', seg: <duração em segundos> }.
  videos: [],
};

// o leitor acha qualquer material pelo slug: principal, bonus liberado ou extra liberado.
// Bonus em breve nao abre nem por link direto.
CATALOGO.porSlug = (slug) =>
  slug === 'principal' ? CATALOGO.principal
    : CATALOGO.bonus.find(b => b.slug === slug && !b.embreve)
    || CATALOGO.ofertas.find(o => o.slug === slug && o.liberado && !o.embreve);
