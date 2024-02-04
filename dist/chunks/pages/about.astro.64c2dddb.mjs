/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

const $$Astro$3 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-4 sm:gap-6">
      <h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">O firmě</h1>
      <p class="text-primary-950/70 dark:text-primary-200/70 mx-auto max-w-xl text-lg sm:text-xl">
        Vítejte na našem webu, kde se specializujeme na montáž tepelných čerpadel a klimatizací značek LG a Toshiba. Jsme malou firmou s vášní pro vytváření příjemného prostředí ve vašich prostorách. Naše služby jsou zaměřené na jednoduchost, efektivitu a spolehlivost.
      </p>
    </div>
  </div>
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/about/Heading.astro", void 0);

const $$Astro$2 = createAstro();
const $$Mission = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Mission;
  const stats = [
    {
      name: "Let na trhu",
      value: "xxx"
    },
    {
      name: "Projekt\u016F",
      value: "xxx"
    },
    {
      name: "Spokojen\xFDch z\xE1kazn\xEDk\u016F",
      value: "'xxx'"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
      <img class="mx-auto h-auto w-full max-w-xl rounded-3xl" width="576" height="864" src="/assets/klimtop_air_conduct.png" alt="obrazek KlimTop">
      <div class="flex flex-col gap-10">
        <!-- Mission description -->
        <div class="space-y-8 sm:space-y-12">
          <h2 class="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Firma KlimTop</h2>
          <div class="space-y-6">
            <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
              Jsme malá a dynamická firma s bohatými zkušenostmi v oblasti servisu, montáže a údržby 
              klimatizačních a tepelných čerpadel. Naše vášeň pro inovace a spokojenost zákazníků nás 
              posouvá kupředu, abychom vám poskytli špičkové služby v oblasti klimatizace a&nbspvytápění.
            </p>
            <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
              S hrdostí pracujeme s renomovanými značkami, jako jsou Toshiba a&nbspLG, abychom vám přinesli
               nejlepší ve světě klimatizace a&nbsptepelných čerpadel. Naše zkušenosti a odbornost jsou zárukou
                kvalitního servisu a precizní montáže. Oceňujeme důvěru našich zákazníků a&nbsps&nbspláskou ke svému
                 řemeslu vám přinášíme profesionální služby, které jdou ruku v ruce s efektivitou a&nbspúsporou
                  energie. Ať už potřebujete osvěžení nebo teplo, jsme tu pro vás s otevřeným srdcem a 
                  moderním přístupem k&nbsptechnologiím.
            </p>
            <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
              Bez zbytečných frází vám přinášíme pohodlí a spolehlivost v&nbspoblasti klimatizace. Jsme tady,
               abychom vám zajistili optimální prostředí, aniž byste si museli dělat starosti.
            </p>
          </div>
        </div>

        <!-- Stats -->
        <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          ${stats.map((stat) => renderTemplate`<div class="border-primary-900/10 dark:border-primary-300/10 rounded-3xl border p-6">
                <dt class="text-base">${stat.name}</dt>
                <dd class="text-3xl font-medium tracking-tight">${stat.value}</dd>
              </div>`)}
        </dl>
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/about/Mission.astro", void 0);

const $$Astro$1 = createAstro();
const $$Values = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Values;
  const values = [
    [
      {
        ref: "01",
        name: "Mont\xE1\u017E Klimatiza\u010Dn\xEDch Jednotek:",
        description: "Pom\u016F\u017Eeme v\xE1m vytvo\u0159it optim\xE1ln\xED klima ve va\u0161em prostoru prost\u0159ednictv\xEDm profesion\xE1ln\xED mont\xE1\u017Ee klimatiza\u010Dn\xEDch jednotek. Bez ohledu na to, zda je va\u0161e za\u0159\xEDzen\xED pro byt nebo kancel\xE1\u0159, jsme zde, abychom zajistili efektivn\xED a spolehliv\xFD v\xFDkon."
      },
      {
        ref: "02",
        name: "Servis a \xDAdr\u017Eba",
        description: "Jsme tu, abychom zajistili, \u017Ee va\u0161e klimatiza\u010Dn\xED jednotky a tepeln\xE1 \u010Derpadla pracuj\xED na sv\u016Fj optim\xE1ln\xED v\xFDkon. Nab\xEDz\xEDme pravideln\xFD servis a \xFAdr\u017Ebu, abychom prodlou\u017Eili \u017Eivotnost va\u0161ich za\u0159\xEDzen\xED a minimalizovali potenci\xE1ln\xED poruchy."
      }
    ],
    [
      {
        ref: "03",
        name: "Tepeln\xE1 \u010Cerpadla",
        description: "Zab\xFDv\xE1me se nejen klimatizac\xED, ale tak\xE9 tepeln\xFDmi \u010Derpadly. Pom\u016F\u017Eeme v\xE1m vyu\u017E\xEDt \xFA\u010Dinn\xE9 vyt\xE1p\u011Bn\xED a chlazen\xED pro va\u0161e domovy a podniky."
      },
      {
        ref: "04",
        name: "Profesion\xE1ln\xED Poradenstv\xED",
        description: "Ch\xE1peme, \u017Ee ka\u017Ed\xFD projekt je jedine\u010Dn\xFD. Na\u0161i odborn\xEDci v\xE1m poskytnou individu\xE1ln\xED poradenstv\xED, kter\xE9 odpov\xEDd\xE1 va\u0161im pot\u0159eb\xE1m a p\u0159edstav\xE1m."
      }
    ]
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="flex flex-col gap-8 lg:gap-12">
      <h2 class="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Naše hodnoty</h2>
      <div class="grid gap-8 lg:grid-cols-2">
        ${values.map((column, index) => renderTemplate`<div${addAttribute(["space-y-8", index === 1 && "lg:mt-16"], "class:list")}>
              ${column.map((value) => renderTemplate`<div class="bg-red dark:bg-primary-400/10 flex flex-col gap-12 rounded-3xl px-6 py-8">
                  <p class="text-sm text-white">${value.ref}</p>
                  <div class="flex flex-col gap-4">
                    <h3 class="text-xl font-medium text-white">${value.name}</h3>
                    <p class="text-white dark:text-primary-200/70 text-base sm:text-lg">
                      ${value.description}
                    </p>
                  </div>
                </div>`)}
            </div>`)}
      </div>
    </div>
  </div>
</section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/about/Values.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Klim\u2013Top" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Heading", $$Heading, {})}
  ${renderComponent($$result2, "Mission", $$Mission, {})}
  ${renderComponent($$result2, "Values", $$Values, {})}
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/about.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Heading as $, $$Mission as a, $$Values as b, about as c };
