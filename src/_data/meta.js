import { readFileSync } from "node:fs";
const site = JSON.parse(readFileSync(new URL("./site.json", import.meta.url)));

// Endereço final do site: SITE_URL (definido no Netlify) > URL (endereço do Netlify) > site.json
const url = (process.env.SITE_URL || site.url || process.env.URL || "http://localhost:8080").replace(/\/$/, "");

const wa = (msg) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export default {
  url,
  ano: new Date().getFullYear(),
  wa: {
    conversa: wa("Olá, Audrey! Quero agendar a conversa inicial sobre a alfabetização de uma criança."),
    casa: wa("Olá, Audrey! Quero orientação para alfabetizar meu filho em casa."),
    prof: wa("Olá, Audrey! Sou professor(a) e quero orientação para alfabetizar com base na ciência."),
    aviso: wa("Olá, Audrey! Quero ser avisado(a) quando houver novos conteúdos."),
  },
};
