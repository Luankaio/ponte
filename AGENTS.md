# Ponte — contexto para agentes

## O que é
Mockup de teste (sem backend) de uma plataforma de agência de marketing. O influenciador navega por lojas que querem divulgação, vê as propostas de cada uma (quanto pagam por conteúdo), confere os pré-requisitos e aceita enviando a proposta. O objetivo é **validar a ideia**, não ser produção.

- Usuário logado fixo: `@ju.testa`.
- Idioma: português do Brasil.
- Origem: design feito no Claude Design (`Ponte.dc.html`), reproduzido aqui em React. Referência original em `_design/` (HTML + `support.js` do runtime proprietário `x-dc` + imagens de referência). Não editar `_design/`; serve só de comparação.

## Stack e como rodar
- React 18 + Vite 5, JavaScript puro, sem roteador, sem backend, sem testes.
- `npm install` · `npm run dev` (http://127.0.0.1:5173) · `npm run build`.
- Estilo: quase tudo em `style={{...}}` inline, igual ao design. Só hover/animação ficam em `src/styles.css` (`.store-card`, `.prop-card`, `.back-btn`, `.accept-btn`, `.example`, `@keyframes pop`).
- Fontes (Google Fonts, em `index.html`): Bricolage Grotesque (títulos) e DM Sans (texto).

## Estrutura
```
index.html            fontes + #root
src/main.jsx          entrada
src/App.jsx           UI inteira (lista, página da loja, modal da proposta)
src/data.js           dados mockados (lojas, propostas, tipos) + paleta
src/styles.css        hover, animação
public/lojas/         logos das lojas (PNG baixados + PNG gerados por IA)
public/reels/         capas de Reels geradas por IA, <slug>-1..4.jpg (4 por loja)
_design/              export do Claude Design (referência, não editar)
```

## Telas e estado (`App.jsx`)
Duas telas, trocadas por estado (`view`: `'list' | 'store'`), sem rotas:
1. **Lista**: título, chips de categoria (filtro), grid de cards. O topo do card é só o logo da loja (fundo `logoBg`), com selo de categoria.
2. **Loja**: cabeçalho colorido com logo, descrição, Instagram, lista de propostas, "Conteúdo que a loja curte", "Evite", exemplos de influenciadores (placeholders).
3. **Modal da proposta**: valor, detalhe, pré-requisitos, botão "Aceitar proposta e enviar →". Depois de enviar mostra "Proposta enviada!".

Estado: `view`, `sid` (índice da loja), `filter`, `open` (índice da proposta aberta), `sent`.
Propostas enviadas ficam em `localStorage['ponte-sent']`, com chave `"<nome da loja>-<índice da proposta>"` (por nome, não por posição, para a ordem das lojas poder mudar).

## Dados (`src/data.js`)
- Tipos de proposta (`KINDS`): `reels`, `story`, `feed`, `views` (por 1.000 views), `permuta`, `comissao`, cada um com cor.
- Loja: `name, category, city, handle, followers, color, fg, logo, logoBg, tagline, about, likes[], avoid[], props[], ex[]`.
- Proposta (helper `p(kind, title, num, unit, reqs, detail, valueText)`): `num` é o valor numérico usado em "a partir de R$ X"; `value` é o texto exibido (ex. `'12%'`, `'Brunch'` para permuta/comissão).
- `STORES` = Poke Nordestino, 6 lojas fictícias originais (`BASE`) e 7 restaurantes do grupo Menu Brands (`MENU_BRANDS`, criados pelo helper `rest()`; cada um tem propostas próprias em `RP` (tipos, valores e exigências diferentes). `restProps` é só fallback).
- Seguidores, `@` de Instagram, valores e influenciadores de exemplo são **inventados**.

## Imagens (`public/lojas/`)
- Poke Nordestino: logo enviado pelo usuário.
- Buoni Amici's, Buk, Zack Smash's, Típico, Soodeli, Sooveggie, Ginger: PNGs baixados do site oficial menubrands.com.br (Menu Brands, Fortaleza).
- Casa Brasa, Lume, Verde Raiz, Pedal, Doce Ateliê, Tramas: logos PNG gerados por IA (OpenAI `gpt-image-2`) para o mockup (lojas fictícias, sem logo real).
- Logos reais são de terceiros: ok para teste interno ou com poucas pessoas; pedir autorização ou trocar por genéricos antes de qualquer link público.

## Capas de Reels (`public/reels/`)
- 56 imagens (14 lojas x 4) geradas com a API de imagens da OpenAI (`gpt-image-2`, 1024x1536, qualidade low), simulando influenciadores com o produto de cada loja. Depois convertidas para JPEG 640x960.
- Ligadas por `REEL_SLUGS`/`withCovers` em `data.js`: cada exemplo em `ex` ganha o 4º item (caminho da capa). `App.jsx` usa como `backgroundImage` do card, com gradiente por cima.
- Pessoas são geradas por IA (não existem). Loja nova: gerar 4 capas `<slug>-1..4.jpg` e incluir o slug em `REEL_SLUGS`.

## Convenções
- Manter o visual do design: fundo creme `#FFF4E0`, tinta `#1A141C`, bordas pretas de 2,5 px, sombras duras sem blur, adesivos levemente rotacionados, cantos bem arredondados. Cores: laranja `#FF4000`, roxo `#8000FF`, amarelo `#FFDD20`, verde `#00D68F`, rosa `#FF8AD0`.
- Mudanças de dado vão em `data.js`; `App.jsx` só renderiza.
- Sem dependências novas sem necessidade; é um mockup.

## Pendências e ideias (ordem sugerida)
1. Link público (Vercel/Netlify) + métricas simples de uso (abre loja, abre proposta, aceita) para validar com influenciadores reais.
2. Pré-requisitos com ✓/✕ conforme o perfil do `@ju.testa` (hoje todos aparecem ✓).
3. Tela "Minhas propostas" com status (enviada, aprovada, em produção, paga).
4. Busca, ordenação e filtro por tipo de proposta na lista.
5. Lado da loja (criar proposta, ver quem aceitou), se for validar os dois lados.
6. Trocar dados inventados das lojas do Menu Brands pelos reais, imagens reais nos exemplos (hoje capas geradas por IA) e links reais de Instagram (hoje `#`).
