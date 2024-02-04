/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$ContactInfo, a as $$ContactForm } from './contact.astro.972e725b.mjs';
import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

const $$Astro = createAstro();
const $$Kontakt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kontakt;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Kontakt" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ContactInfo", $$ContactInfo, {})}
  ${renderComponent($$result2, "ContactForm", $$ContactForm, {})}
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/kontakt.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/kontakt.astro";
const $$url = "/kontakt";

export { $$Kontakt as default, $$file as file, $$url as url };
