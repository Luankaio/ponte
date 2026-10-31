export const INK = '#1A141C', O = '#FF4000', P = '#8000FF', Y = '#FFDD20', G = '#00D68F', K = '#FF8AD0';
export const R = n => 'R$ ' + n.toLocaleString('pt-BR');

export const KINDS = {
  reels: { l: 'Reels', bg: O, fg: '#fff' }, story: { l: 'Story', bg: Y, fg: INK },
  feed: { l: 'Post no feed', bg: G, fg: INK }, views: { l: 'Por visualizações', bg: P, fg: '#fff' },
  permuta: { l: 'Permuta', bg: K, fg: INK }, comissao: { l: 'Comissão', bg: '#fff', fg: INK }
};

const p = (kind, title, num, unit, reqs, detail, valueText) => ({ kind, title, num, unit, reqs, detail, value: valueText || R(num) });

const BASE = [
  { name: 'Casa Brasa Café', category: 'Alimentação', city: 'Belo Horizonte', handle: '@casabrasacafe', followers: '48 mil', color: Y, fg: INK,
    tagline: 'Cafés especiais e brunch artesanal no coração da cidade.',
    about: 'Cafeteria de torra própria com três unidades em BH. Queremos mostrar o preparo, o ambiente e o brunch de domingo com gente de verdade.',
    likes: ['Degustação em vídeo', 'Bastidores do preparo', 'Reels com trilha leve', 'Luz natural', 'Tom descontraído'],
    avoid: ['Filtros pesados', 'Comparar com concorrentes'],
    props: [
      p('reels', '1 Reels de até 45 s no café', 350, 'por Reels', ['Mínimo de 5 mil seguidores', 'Perfil público no Instagram', 'Morar em BH ou região', 'Marcar @casabrasacafe e usar #CasaBrasa', 'Entregar o roteiro 3 dias antes'], 'Visite uma das unidades, grave o preparo de um café e o brunch. Pagamento em até 7 dias após a publicação.'),
      p('story', '3 Stories com link da reserva', 120, 'por sequência', ['Mínimo de 3 mil seguidores', 'Perfil público', 'Usar o link de reserva fornecido', 'Manter no ar por 24 h'], 'Sequência de 3 stories mostrando o ambiente e o cardápio, com figurinha de link.'),
      p('views', 'Pagamento por visualizações do Reels', 30, 'a cada 1.000 views', ['Mínimo de 5 mil seguidores', 'Reels com no mínimo 20 s', 'Enviar print das métricas após 14 dias', 'Teto de R$ 900 por Reels'], 'Valor variável conforme o alcance. Contagem de visualizações em 14 dias após a postagem.'),
      p('permuta', 'Brunch para 2 pessoas + Reels', 0, 'em produtos · vale R$ 180', ['Mínimo de 2 mil seguidores', 'Agendar com 5 dias de antecedência', 'Publicar em até 7 dias da visita'], 'Troca por 1 Reels e 2 stories, sem pagamento em dinheiro.', 'Brunch')
    ],
    ex: [['@ju.testa', 'Reels', '84 mil'], ['@lucas.provacafe', 'Reels', '61 mil'], ['@bh.nafome', 'Story', '12 mil'], ['@mari.cafe', 'Feed', '9,4 mil']] },
  { name: 'Lume Cosméticos', category: 'Beleza', city: 'São Paulo', handle: '@lumecosmeticos', followers: '212 mil', color: K, fg: INK,
    tagline: 'Skincare vegano com foco em pele brasileira.',
    about: 'Marca de skincare vegano e cruelty free. Buscamos criadores que mostrem rotina real de pele, antes e depois e resenhas sinceras.',
    likes: ['Review de produto', 'Antes e depois', 'Rotina de skincare', 'Close na textura', 'Depoimento'],
    avoid: ['Promessas médicas', 'Pele retocada demais'],
    props: [
      p('reels', 'Reels de rotina com 3 produtos', 600, 'por Reels', ['Mínimo de 10 mil seguidores', 'Público majoritariamente do Brasil', 'Mostrar aplicação dos produtos', 'Divulgar o cupom do criador', 'Aprovação do roteiro pela marca'], 'Receba o kit, grave a rotina por 7 dias e publique um Reels de 30 a 60 s.'),
      p('story', 'Story de unboxing', 180, 'por sequência', ['Mínimo de 8 mil seguidores', 'Mostrar a embalagem aberta', 'Marcar @lumecosmeticos'], 'Sequência de até 4 stories no dia do recebimento do kit.'),
      p('feed', 'Carrossel de review no feed', 450, 'por post', ['Mínimo de 10 mil seguidores', '5 a 8 slides', 'Legenda com opinião própria', 'Marcar a marca e o cupom'], 'Carrossel com fotos da textura, resultado e prós e contras.'),
      p('comissao', 'Comissão sobre vendas com seu cupom', 12, 'por venda', ['Mínimo de 5 mil seguidores', 'Cupom exclusivo gerado pela marca', 'Pagamento mensal'], 'Ganhe sobre cada venda feita com o seu cupom, sem limite.', '12%')
    ],
    ex: [['@helena.emcasa', 'Reels', '142 mil'], ['@pele.da.rosa', 'Reels', '98 mil'], ['@dani.skin', 'Feed', '21 mil'], ['@rafa.filma', 'Story', '17 mil']] },
  { name: 'Verde Raiz Plantas', category: 'Casa e decoração', city: 'Porto Alegre', handle: '@verderaizplantas', followers: '31 mil', color: G, fg: INK,
    tagline: 'Plantas, vasos e cuidado para apartamentos pequenos.',
    about: 'Loja online e física de plantas de interior. Adoramos conteúdo de decoração, tutoriais de cuidado e transformações de cantinhos.',
    likes: ['Tutorial de cuidado', 'Casa e decoração', 'Transformação de cantinho', 'Unboxing de pedido'],
    avoid: ['Plantas fora do vaso original', 'Música com direitos autorais'],
    props: [
      p('reels', 'Reels tutorial de cuidado', 250, 'por Reels', ['Mínimo de 3 mil seguidores', 'Mostrar a planta recebida', 'Citar 2 dicas de cuidado', 'Marcar @verderaizplantas'], 'Grave um tutorial curto de rega, luz ou replante com a planta enviada.'),
      p('views', 'Pagamento por visualizações', 25, 'a cada 1.000 views', ['Mínimo de 3 mil seguidores', 'Print das métricas após 10 dias', 'Teto de R$ 500'], 'Complemento ao Reels. Contagem em 10 dias.'),
      p('permuta', 'Kit com 2 plantas e vaso', 0, 'em produtos · vale R$ 140', ['Mínimo de 1,5 mil seguidores', 'Entrega apenas no Sul do Brasil', 'Publicar em até 10 dias'], '1 Reels e 3 stories em troca do kit.', 'Kit plantas')
    ],
    ex: [['@helena.emcasa', 'Reels', '73 mil'], ['@jardim.da.bia', 'Reels', '28 mil'], ['@apto.verde', 'Feed', '6 mil'], ['@lu.decora', 'Story', '4,2 mil']] },
  { name: 'Pedal Bikes', category: 'Esporte', city: 'Curitiba', handle: '@pedalbikes', followers: '64 mil', color: P, fg: '#fff',
    tagline: 'Bicicletas urbanas e acessórios para o dia a dia.',
    about: 'Loja de bikes urbanas e elétricas. Procuramos criadores que usem a bike na rotina: trabalho, passeio e treino leve.',
    likes: ['Rotina na bike', 'Review de produto', 'Trajetos da cidade', 'Vídeo UGC'],
    avoid: ['Andar sem capacete', 'Manobras arriscadas'],
    props: [
      p('reels', 'Reels de trajeto com a bike', 480, 'por Reels', ['Mínimo de 8 mil seguidores', 'Usar capacete no vídeo', 'Morar em Curitiba ou região', 'Marcar @pedalbikes'], 'Grave um trajeto real da sua rotina com a bike emprestada por 7 dias.'),
      p('story', 'Story de test ride', 150, 'por sequência', ['Mínimo de 5 mil seguidores', 'Mostrar a loja ou o ponto de retirada'], 'Sequência de até 5 stories durante o test ride.'),
      p('comissao', 'Comissão por bike vendida', 5, 'por venda', ['Mínimo de 5 mil seguidores', 'Link rastreado', 'Pagamento em até 30 dias'], 'Ganhe sobre cada bike vendida pelo seu link.', '5%')
    ],
    ex: [['@rafa.filma', 'Reels', '57 mil'], ['@ctba.pedala', 'Reels', '44 mil'], ['@lu.nobike', 'Story', '8 mil'], ['@tomas.urb', 'Feed', '5 mil']] },
  { name: 'Doce Ateliê', category: 'Confeitaria', city: 'Fortaleza', handle: '@doceatelie', followers: '87 mil', color: O, fg: '#fff',
    tagline: 'Brigadeiros gourmet e caixas de presente.',
    about: 'Confeitaria artesanal com entrega em Fortaleza. Queremos receitas com nossos produtos, degustações e caixas de presente.',
    likes: ['Receita com a marca', 'Degustação em vídeo', 'Unboxing de caixa', 'Close nos doces'],
    avoid: ['Receitas de concorrentes', 'Ambientes escuros'],
    props: [
      p('reels', 'Reels de receita com nossos doces', 400, 'por Reels', ['Mínimo de 6 mil seguidores', 'Morar em Fortaleza', 'Usar produtos da marca na receita', 'Marcar @doceatelie'], 'Crie uma receita simples usando os doces enviados, de 30 a 60 s.'),
      p('feed', 'Foto + legenda no feed', 200, 'por post', ['Mínimo de 4 mil seguidores', 'Foto em luz natural', 'Marcar a marca'], 'Post único com a caixa de presente em destaque.'),
      p('views', 'Pagamento por visualizações', 35, 'a cada 1.000 views', ['Mínimo de 6 mil seguidores', 'Print das métricas em 14 dias', 'Teto de R$ 700'], 'Valor variável conforme o alcance do Reels.'),
      p('permuta', 'Caixa com 12 brigadeiros', 0, 'em produtos · vale R$ 95', ['Mínimo de 2 mil seguidores', 'Retirada ou entrega em Fortaleza'], '1 Reels e 2 stories em troca da caixa.', 'Caixa 12')
    ],
    ex: [['@rosangela.nacozinha', 'Reels', '120 mil'], ['@doces.da.ana', 'Reels', '66 mil'], ['@fortal.gourmet', 'Feed', '11 mil'], ['@ju.testa', 'Story', '9 mil']] },
  { name: 'Tramas Moda', category: 'Moda', city: 'Recife', handle: '@tramasmoda', followers: '129 mil', color: '#fff', fg: INK,
    tagline: 'Moda autoral com tecidos regionais.',
    about: 'Marca de moda feminina e unissex com tecidos regionais. Buscamos looks do dia, provadores e styling com peças da coleção.',
    likes: ['Look do dia', 'Provador', 'Styling com 3 peças', 'Vídeo UGC'],
    avoid: ['Misturar com outras marcas na legenda', 'Edição que altera as cores'],
    props: [
      p('reels', 'Reels de styling com 3 peças', 520, 'por Reels', ['Mínimo de 10 mil seguidores', 'Mostrar as 3 peças enviadas', 'Cores fiéis às peças', 'Marcar @tramasmoda'], 'Monte 3 looks com as peças recebidas em um Reels de até 45 s.'),
      p('story', 'Story de provador', 160, 'por sequência', ['Mínimo de 5 mil seguidores', 'Link da coleção no story'], 'Sequência de 3 stories com o provador e o link.'),
      p('feed', 'Carrossel look do dia', 380, 'por post', ['Mínimo de 8 mil seguidores', 'Mínimo de 5 fotos', 'Citar tamanho e tecido'], 'Carrossel com detalhes das peças e do caimento.'),
      p('comissao', 'Comissão sobre vendas', 10, 'por venda', ['Mínimo de 5 mil seguidores', 'Cupom exclusivo'], 'Ganhe sobre cada venda com o seu cupom.', '10%')
    ],
    ex: [['@helena.emcasa', 'Reels', '91 mil'], ['@rec.look', 'Reels', '53 mil'], ['@bia.veste', 'Feed', '14 mil'], ['@lucas.provacafe', 'Story', '6 mil']] }
];

const LOGOS = {
  'Casa Brasa Café': '/lojas/casa-brasa-cafe.svg',
  'Lume Cosméticos': '/lojas/lume-cosmeticos.svg',
  'Verde Raiz Plantas': '/lojas/verde-raiz-plantas.svg',
  'Pedal Bikes': '/lojas/pedal-bikes.svg',
  'Doce Ateliê': '/lojas/doce-atelie.svg',
  'Tramas Moda': '/lojas/tramas-moda.svg'
};

// Restaurantes do grupo Menu Brands (Fortaleza). Propostas mockadas, mesmo modelo das demais lojas.
const restProps = (handle, item, worth) => [
  p('reels', '1 Reels de até 45 s no restaurante', 350, 'por Reels', ['Mínimo de 5 mil seguidores', 'Perfil público no Instagram', 'Morar em Fortaleza ou região', 'Marcar ' + handle, 'Entregar o roteiro 3 dias antes'], 'Visite uma unidade, grave o preparo e a degustação de ' + item + '. Pagamento em até 7 dias após a publicação.'),
  p('story', '3 Stories com link do cardápio', 120, 'por sequência', ['Mínimo de 3 mil seguidores', 'Perfil público', 'Usar o link do cardápio fornecido', 'Manter no ar por 24 h'], 'Sequência de 3 stories mostrando o ambiente e o cardápio, com figurinha de link.'),
  p('views', 'Pagamento por visualizações do Reels', 30, 'a cada 1.000 views', ['Mínimo de 5 mil seguidores', 'Reels com no mínimo 20 s', 'Enviar print das métricas após 14 dias', 'Teto de R$ 900 por Reels'], 'Valor variável conforme o alcance. Contagem de visualizações em 14 dias após a postagem.'),
  p('permuta', 'Refeição para 2 pessoas + Reels', 0, 'em produtos · vale R$ ' + worth, ['Mínimo de 2 mil seguidores', 'Agendar com 5 dias de antecedência', 'Publicar em até 7 dias da visita'], 'Troca por 1 Reels e 2 stories, sem pagamento em dinheiro.', 'Refeição')
];
const restEx = [['@ju.testa', 'Reels', '84 mil'], ['@lucas.provacafe', 'Reels', '61 mil'], ['@bh.nafome', 'Story', '12 mil'], ['@mari.cafe', 'Feed', '9,4 mil']];
const rest = (o) => ({ logoBg: o.logo.includes('poke') ? '#F1E5CF' : '#fff', city: 'Fortaleza', fg: INK, ex: restEx, props: restProps(o.handle, o.item, o.worth), ...o });

const MENU_BRANDS = [
  rest({ name: 'Poke Nordestino', category: 'Restaurante', handle: '@poke.nordestino', followers: '23 mil', color: Y, logo: '/lojas/poke-nordestino.png', item: 'um poke com ingredientes nordestinos', worth: 90,
    tagline: 'Poke 100% nordestino, do Ceará pra você.',
    about: 'Poke com ingredientes e sabores da região: carne de sol, queijo coalho, tapioca e frutas locais. Queremos mostrar a montagem do bowl e o frescor do prato.',
    likes: ['Montagem do bowl', 'Close nos ingredientes', 'Degustação em vídeo', 'Luz natural', 'Tom descontraído'],
    avoid: ['Filtros pesados', 'Comparar com outros pokes'] }),
  rest({ name: "Buoni Amici's", category: 'Pizzaria', handle: '@buoniamicis', followers: '41 mil', color: G, logo: '/lojas/amicis.png', item: 'pizza no forno', worth: 120,
    tagline: 'Pizzaria com massa leve e sabores clássicos.',
    about: 'Pizzaria do grupo Menu Brands com delivery em Fortaleza. Buscamos conteúdo com a pizza saindo do forno, o corte e o queijo esticando.',
    likes: ['Corte da pizza', 'Queijo esticando', 'Unboxing de pedido', 'Degustação em vídeo'],
    avoid: ['Pizza fria ou murcha', 'Receitas de concorrentes'] }),
  rest({ name: 'Buk Burger & Beer', category: 'Hamburgueria', handle: '@bukburgerbeer', followers: '58 mil', color: O, fg: '#fff', logo: '/lojas/buk.png', item: 'burgers artesanais', worth: 110,
    tagline: 'Hambúrguer artesanal e cerveja gelada.',
    about: 'Hamburgueria com burgers autorais e cervejas. Queremos vídeos com o burger montado, o primeiro bite e o brinde com amigos.',
    likes: ['Primeiro bite', 'Montagem do burger', 'Brinde com amigos', 'Vídeo UGC'],
    avoid: ['Consumo de álcool por menores', 'Dirigir após beber'] }),
  rest({ name: "Zack Smash's", category: 'Hamburgueria', handle: '@zacksmashs', followers: '36 mil', color: P, fg: '#fff', logo: '/lojas/zack.png', item: 'smash burgers old school', worth: 85,
    tagline: 'Old school American burger, direto na chapa.',
    about: 'Smash burger estilo americano, crocante nas bordas e suculento no meio. Procuramos vídeos da chapa, do smash e do queijo derretendo.',
    likes: ['Smash na chapa', 'Queijo derretendo', 'ASMR de preparo', 'Review de produto'],
    avoid: ['Edição acelerada demais', 'Músicas com direitos autorais'] }),
  rest({ name: 'Típico', category: 'Restaurante', handle: '@tipicomenu', followers: '29 mil', color: K, logo: '/lojas/tipico.png', item: 'pratos da culinária brasileira', worth: 100,
    tagline: 'Comida brasileira de panela, com cara de casa.',
    about: 'Culinária brasileira com pratos de todas as regiões. Queremos mostrar o prato do dia, os acompanhamentos e a experiência de comida caseira.',
    likes: ['Prato do dia', 'Comida de panela', 'Degustação em vídeo', 'Depoimento'],
    avoid: ['Filtros que mudam a cor do prato', 'Comparar com concorrentes'] }),
  rest({ name: 'Soodeli', category: 'Saudável', handle: '@soodeli', followers: '19 mil', color: G, logo: '/lojas/soodeli.png', item: 'pratos saudáveis e marmitas', worth: 80,
    tagline: 'Comida saudável, prática e saborosa.',
    about: 'Marmitas e pratos saudáveis para o dia a dia. Buscamos conteúdo de rotina fitness, preparo de marmitas e rotina de almoço.',
    likes: ['Rotina fitness', 'Marmita da semana', 'Close nos ingredientes', 'Unboxing de pedido'],
    avoid: ['Promessas de emagrecimento', 'Comparar corpos'] }),
  rest({ name: 'Sooveggie', category: 'Saudável', handle: '@sooveggie', followers: '14 mil', color: Y, logo: '/lojas/sooveggie.png', item: 'pratos vegetarianos', worth: 80,
    tagline: 'Cozinha vegetariana cheia de sabor.',
    about: 'Cardápio vegetariano com pratos criativos e coloridos. Queremos conteúdo de degustação, receitas e quebra de mitos sobre comida sem carne.',
    likes: ['Prato colorido', 'Quebra de mitos', 'Degustação em vídeo', 'Depoimento'],
    avoid: ['Tom de julgamento', 'Promessas médicas'] }),
  rest({ name: 'Ginger', category: 'Restaurante', handle: '@gingerfusionfood', followers: '25 mil', color: O, fg: '#fff', logo: '/lojas/ginger.png', item: 'pratos fusion', worth: 110,
    tagline: 'Fusion food com sabores de vários países.',
    about: 'Cozinha fusion que mistura sabores de diferentes países. Procuramos vídeos de degustação, montagem dos pratos e descoberta de sabores.',
    likes: ['Descoberta de sabores', 'Montagem do prato', 'Degustação em vídeo', 'Close nos ingredientes'],
    avoid: ['Comparar com outras culinárias', 'Ambientes escuros'] })
];

export const STORES = [...MENU_BRANDS.slice(0, 1), ...BASE.map(s => ({ ...s, logo: LOGOS[s.name], logoBg: s.color })), ...MENU_BRANDS.slice(1)];
