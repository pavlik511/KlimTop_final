/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Heading, a as $$Mission, b as $$Values } from './about.astro.64c2dddb.mjs';
import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

const $$Astro = createAstro();
const $$OFirme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OFirme;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "O firm\u011B" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Heading", $$Heading, {})}
  ${renderComponent($$result2, "Mission", $$Mission, {})}
  ${renderComponent($$result2, "Values", $$Values, {})}
  
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/o-firme.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/o-firme.astro";
const $$url = "/o-firme";

export { $$OFirme as default, $$file as file, $$url as url };
