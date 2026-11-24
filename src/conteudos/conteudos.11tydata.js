export default {
  layout: "post.njk",
  schemaTipo: "post",
  ogtype: "article",
  eleventyComputed: {
    permalink: (data) => (data.publicado === false ? false : `/conteudos/${data.page.fileSlug}/`),
    eleventyExcludeFromCollections: (data) => data.publicado === false,
    crumbs: (data) => [
      { nome: "Conteúdos", url: "/conteudos/" },
      { nome: data.title, url: `/conteudos/${data.page.fileSlug}/` },
    ],
  },
};
