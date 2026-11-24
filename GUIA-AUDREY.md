# Guia: colocar o site no ar e começar a postar

## Parte 1: colocar no ar (uma vez só, feita pela Fabiane)
1. Crie uma conta gratuita no GitHub e um repositório (ex.: `site-audrey`). Envie todos os arquivos desta pasta (exceto `node_modules` e `_site`).
2. No Netlify: **Add new site → Import an existing project → GitHub** e escolha o repositório. O Netlify lê o `netlify.toml` sozinho (build: `npm run build`, publicação: `_site`). **Não use arrastar e soltar**, porque assim o painel de postagens não funciona.
3. **Site configuration → General → Change site name** para escolher o endereço `nome.netlify.app`.
4. **Site configuration → Environment variables**: crie `SITE_URL` com o endereço final (com https://). Faça um novo deploy.
5. **Project configuration → Identity → Enable Identity**. Em **Registration**, escolha *Invite only*. Em **Services → Git Gateway**, clique em *Enable*.
6. **Identity → Invite users**: convide o e-mail da Audrey. Ela recebe um link para criar a senha.

## Parte 2: como a Audrey posta
1. Abra `endereço-do-site/admin/` e entre com e-mail e senha.
2. Em **Conteúdos → Novo conteúdo**, preencha: título (de preferência a pergunta que a família faria no Google), descrição para o Google, resposta rápida, foto de capa com a descrição da foto, e o texto.
3. Deixe **Publicar no site** ligado, clique em **Publicar → Publicar agora**. O site atualiza em cerca de 1 minuto.
4. Os 3 textos iniciais estão como rascunho. Leia, ajuste e ligue **Publicar no site** quando aprovar.
5. Em **Configurações do site** dá para trocar endereço, telefone, perguntas frequentes e depoimentos.

## Parte 3: o que fazer fora do site para subir no Google
- Criar e verificar o **Perfil da Empresa no Google** (mesmo endereço e telefone do site) e pedir avaliações às famílias. Depois colocar o link em Configurações.
- Cadastrar o site no **Google Search Console** e enviar `/sitemap.xml`. Fazer o mesmo no Bing Webmaster.
- Preencher **bairros próximos** que ela realmente atende.
- Depoimentos só com autorização por escrito das famílias.
- Publicar um texto novo a cada 2 a 3 semanas, respondendo perguntas reais das famílias.
- Confirmar o CEP (80710-610 no Google; 80710-550 em outra fonte).
