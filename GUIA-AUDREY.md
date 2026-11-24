# Guia: colocar o site no ar (GitHub Pages) e começar a postar

## Parte 1: publicar (uma vez só, feita pela Fabiane)
1. No GitHub, crie o repositório. Com domínio próprio, qualquer nome serve. Sem domínio, use exatamente `seuusuario.github.io` (se for outro nome, os links e as imagens quebram).
2. Envie todos os arquivos desta pasta para o repositório (branch `main`), incluindo a pasta oculta `.github`. Pelo site do GitHub: **Add file → Upload files** e arraste tudo (a pasta `.github` pode ficar de fora do arrastar; nesse caso crie o arquivo `.github/workflows/deploy.yml` com **Add file → Create new file** e cole o conteúdo).
3. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. **Settings → Secrets and variables → Actions → aba Variables → New repository variable**: nome `SITE_URL`, valor = endereço final com https:// (ex.: `https://seuusuario.github.io` ou `https://www.seudominio.com.br`).
5. Na aba **Actions**, aguarde o fluxo "Publicar site" ficar verde (1 a 2 minutos). O endereço aparece em Settings → Pages.
6. Domínio próprio (opcional): em Settings → Pages, campo *Custom domain*, e aponte o DNS conforme o GitHub indicar. Atualize `SITE_URL`.

## Parte 2: dar acesso à Audrey
1. A Audrey cria uma conta gratuita no GitHub.
2. No repositório: **Settings → Collaborators → Add people**, convide a conta dela. Ela aceita o convite pelo e-mail.

## Parte 3: como a Audrey posta
1. Abra https://app.pagescms.org e entre com a conta do GitHub. Escolha o repositório do site.
2. Em **Conteúdos (textos) → Add an entry**: título (de preferência a pergunta que a família faria no Google), data, descrição para o Google, resposta rápida, foto de capa com a descrição da foto, e o texto.
3. Ligue **Publicar no site** e salve. O site atualiza em cerca de 2 minutos.
4. Os 3 textos iniciais estão como rascunho (Publicar no site desligado). Ela revisa, ajusta e liga quando aprovar.
5. Perguntas frequentes, depoimentos e contato também são editados no painel.

## Parte 4: o que fazer fora do site para subir no Google
- Criar e verificar o **Perfil da Empresa no Google** (mesmo endereço e telefone do site) e pedir avaliações às famílias. Depois colocar o link em *Contato e endereço*.
- Cadastrar o site no **Google Search Console** e enviar `/sitemap.xml`. Fazer o mesmo no Bing Webmaster.
- Preencher os **bairros próximos** que ela realmente atende.
- Depoimentos só com autorização por escrito das famílias.
- Publicar um texto novo a cada 2 a 3 semanas, respondendo perguntas reais das famílias.
- Confirmar o CEP (80710-610 no Google; 80710-550 em outra fonte).
