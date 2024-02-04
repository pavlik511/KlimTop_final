/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

const $$Astro$4 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">O nás</h2>
      <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
        <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
          Specializujeme se na montáž tepelných čerpadel a klimatizačních systémů, zejména od renomovaných značek LG a Toshiba. I přesto, že jsme menší firma, naše odhodlání a zkušenosti nás dělají spolehlivým partnerem pro vaše potřeby v oblasti klimatizace a vytápění.
          
        </p>
        <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg"><b>Vaše pohodlí je naším cílem.</b> S Klim–Topem můžete počítat na cestě k optimálnímu klimatickému prostředí pro vaši domácnost nebo podnik. Kontaktujte nás pro další informace a konzultace.</p>
        <a href="/about" class="bg-blue dark:bg-primary-400 hover:bg-blue2 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Více o nás
        </a>
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/home/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="bg-red dark:bg-primary-400/10 flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10">
      <div class="flex flex-col gap-4 sm:gap-6">
        <h2 class="mx-auto max-w-sm text-3xl text-white font-medium tracking-tight sm:text-4xl">
          Spojte se s námi pro pohodlný klimatický komfort
        </h2>
        <p class="text-primary-950/70 dark:text-primary-200/70 text-white mx-auto max-w-2xl text-lg">
          Zajímá vás montáž klimatizací a tepelných čerpadel? Máte otázky ohledně našich služeb? Rádi vám odpovíme a poskytneme veškeré informace, které potřebujete. Stačí použít náš kontaktní formulář níže a my se ozveme co nejdříve.
        </p>
      </div>
      <a href="/contact" class="bg-blue dark:bg-primary-400 hover:bg-blue2 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        Kontaktujte nás
      </a>
    </div>
  </div>
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/home/Cta.astro", void 0);

const $$Astro$2 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-16">
      <div class="flex flex-col items-start gap-8 sm:gap-10">
        <div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6">
          <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Vítáme Vás na stránkách firmy
          </h1>
          <p class="text-primary-950/70 dark:text-primary-200/70 text-lg sm:text-xl">
            Zabýváme se kompletní dodávkou a montáží
klimatizačního zařízení a tepelných čerpadel značek Toshiba a LG.
          </p>
        </div>
        <a href="/kontakt" class="bg-blue dark:bg-primary-400 hover:bg-blue2 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 text-base font-medium text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
          Mám zájem
        </a>
      </div>
      <img class="h-a w-1/2 rounded-3xl mx-auto" width="1280" height="640" src="/assets/klima_uvodni.png" alt="Hero picture">
      
    </div>
  </div>
  
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/home/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      step: "01",
      name: "Servis chlad\xEDc\xEDch a klimatiza\u010Dn\xEDch za\u0159\xEDzen\xED",
      description: "Kompletn\xED vy\u010Di\u0161t\u011Bn\xED a servis za\u0159\xEDzen\xED."
    },
    {
      step: "02",
      name: "Servis vnit\u0159n\xEDch klimatiza\u010Dn\xEDch jednotek",
      description: "Kompletn\xED vy\u010Di\u0161t\u011Bn\xED a servis za\u0159\xEDzen\xED."
    },
    {
      step: "03",
      name: "Servis venkovn\xEDch klimatiza\u010Dn\xEDch jednotek",
      description: "Kompletn\xED vy\u010Di\u0161t\u011Bn\xED a servis za\u0159\xEDzen\xED."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
    <div class="flex flex-col gap-12 sm:gap-16">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Servis</h2>
      <div class="grid gap-8 lg:grid-cols-3">
        ${services.map((service) => renderTemplate`<div class="bg-red text-white dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8">
              <p class="text-sm">${service.step}</p>
              <div class="flex flex-col gap-4">
                <h3 class="text-xl font-medium">${service.name}</h3>
                <p class="text-white dark:text-primary-200/70 text-base sm:text-lg">
                  ${service.description}
                </p>
              </div>
            </div>`)}
      
      </div>
      
    </div>
      <a href="/servis" class="bg-blue dark:bg-primary-400 hover:bg-blue2 dark:hover:bg-primary-300 focus-visible:outline-primary-600 dark:focus-visible:outline-primary-400 dark:text-primary-950 inline-flex items-center justify-center rounded-full border border-transparent px-5 py-3 mt-10 text-base font-medium text-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
      Více o servisu
    </a>
    
  </div>
  
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/home/Services.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Klim\u2013Top" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Hero", $$Hero, {})}
  ${renderComponent($$result2, "Services", $$Services, {})}
  
  ${renderComponent($$result2, "About", $$About, {})}
  
  
  ${renderComponent($$result2, "Cta", $$Cta, {})}
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/index.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
