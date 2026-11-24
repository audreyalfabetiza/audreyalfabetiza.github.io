import Image from "@11ty/eleventy-img";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // Arquivos copiados como estão
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });

  // Markdown: imagens do corpo do texto carregam sob demanda
  const md = markdownIt({ html: true, linkify: true, typographer: true });
  const defaultImage = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    tokens[idx].attrSet("loading", "lazy");
    tokens[idx].attrSet("decoding", "async");
    return defaultImage(tokens, idx, options, env, self);
  };
  eleventyConfig.setLibrary("md", md);

  // Imagem otimizada (WebP + JPEG, vários tamanhos) a partir de /uploads ou /assets
  eleventyConfig.addAsyncShortcode("img", async function (src, alt, sizes = "(max-width: 800px) 100vw, 800px", cls = "", eager = false) {
    if (!src) return "";
    const input = "src" + (src.startsWith("/") ? src : "/" + src);
    const meta = await Image(input, {
      widths: [400, 800, 1200],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/",
      sharpWebpOptions: { quality: 78 },
      sharpJpegOptions: { quality: 80 },
    });
    return Image.generateHTML(meta, {
      alt: alt || "",
      sizes,
      class: cls,
      loading: eager ? "eager" : "lazy",
      decoding: eager ? "sync" : "async",
      ...(eager ? { fetchpriority: "high" } : {}),
    });
  });
  eleventyConfig.addAsyncShortcode("imgUrl", async function (src, width = 1200) {
    if (!src) return "";
    const input = "src" + (src.startsWith("/") ? src : "/" + src);
    const meta = await Image(input, { widths: [width], formats: ["jpeg"], outputDir: "./_site/img/", urlPath: "/img/" });
    return meta.jpeg[0].url;
  });

  // Filtros
  eleventyConfig.addFilter("dataBR", (d) =>
    new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(d)));
  eleventyConfig.addFilter("iso", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("json", (v) => JSON.stringify(v));
  eleventyConfig.addFilter("plain", (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("minutos", (content) => {
    const words = String(content || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Conteúdos publicados (campo "publicado" do painel)
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/conteudos/*.md")
      .filter((p) => p.data.publicado !== false)
      .sort((a, b) => b.date - a.date));

  eleventyConfig.addGlobalData("permalinkBase", "");

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
