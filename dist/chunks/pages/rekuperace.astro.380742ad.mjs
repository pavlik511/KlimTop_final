/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

const $$Astro$1 = createAstro();
const $$Rekuperace$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Rekuperace$1;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Princip rekuperace</h2>
        <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
          <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            Pro obytný prostor je nutné zajistit výměnu vzduchu. V mnoha případech stačí pouhá infiltrace čerstvého vzduchu z venkovního prostředí netěsnostmi oken a dveří. Pak jsou ale místnosti, kde musíme zajistit výměnu vzduchu nuceně, vzduchotechnickým zařízením. A právě pro tyto prostory je určena řada rekuperačních vzduchotechnických jednotek,které vymění vzduch s minimálními provozními náklady. Odvedou znehodnocený vzduch a současně přivedou čerstvý vzduch potřebný pro zachování optimálního zdraví a komfortu. Navíc dochází k rekuperaci jak citelného, tak i&nbsp;vázaného tepla, což vede k celkovým provozním úsporám na energiích.
          </p>
          <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            Pro zajištění oddělení přívodního a odpadního vzduchu je struktura rekuperačního výměníku uspořádána na principu křížového proudění s deskovým žebrováním. Použitý princip s pomocí speciálně vyvinutého materiálu, ze kterého je samotný výměník vyroben, zajistí vysoce účinný přenos celkové tepelné energie obsažené ve vzduchu (citelná i vázaná). Tato technologie, která umožňuje přísun čerstvého vzduchu při minimální ztrátě vnitřní teploty.
          </p>
          <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            Rekuperační výměníky tepla se nejčastěji osazují přímo do větracích jednotek. Rekuperaci je tak možno využít prakticky ve všech typech objektů při hygienicky nutném větrání – a to od bytů a&nbsp;rodinných domů, přes občanské stavby, bazény až po průmyslové stavby. V poslední době se v&nbsp;souvislosti se stále vzdrůstající cenou energie stále častěji rekuperace využívá i pro rodinné domy a&nbsp;byty.
          </p>
          <p class="text-primary-950/70 dark:text-primary-200/70 text-base sm:text-lg">
            Rekuperační výměníky lze využít i v klimatizovaných objektech – zde dochází v letních měsících k&nbsp;"rekuperaci chladu" – přiváděný teplý vzduch je ochlazován odváděným, klimatizací vychlazeným vzduchem.
          </p>
          <img class="" width="" height="" src="/assets/rekuperace.png" alt="obrázek principu rekuperace">
        </div>
        
        
      </div>
    </div>
    
  </section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/rekuperace/Rekuperace.astro", void 0);

const $$Astro = createAstro();
const $$Rekuperace = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Rekuperace;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Rekuperace" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "PrincipRekuperace", $$Rekuperace$1, {})}
 
  
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/rekuperace.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/rekuperace.astro";
const $$url = "/rekuperace";

export { $$Rekuperace as default, $$file as file, $$url as url };
