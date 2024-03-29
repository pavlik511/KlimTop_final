/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

const $$Astro$1 = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20">
  <img class="mb-20 h-1/5 w-4/12 rounded-3xl mx-auto" width="1280" height="640" src="/assets/klima.jpg" alt="obrazek, servis kliamtizace">

    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="grid gap-12 lg:grid-cols-3 lg:gap-8">
        <h2 class="text-3xl font-medium tracking-tight sm:text-4xl underline decoration-red decoration-4 underline-offset-4">Servis, možnosti</h2>
        <div class="flex flex-col items-start gap-8 sm:gap-10 lg:col-span-2">
            <h3 class="text-2xl font-medium tracking-tight sm:text-2xl underline decoration-blue decoration-2 underline-offset-2">Servis chladících a klimatizačních zařízení</h3>
          <h4 class="text-xl font-light tracking-tight sm:text-xl pl-5">
            Proč je důležité provádět pravidelný servis zařízení?
          </h4>
          <ul class=" pl-10 list-disc text-xl font-medium tracking-tight sm:text-xl">
            <li>Při pravidelném servisu se předchází častým závadám způsobeným zanešením filtrů</li>
            <li>po vyčištění výparníků a kondenzátorů se zlepšuje účinnost a snižuje spotřeba elektrické energie,</li>
            <li>předchází se možnostem úniku chladiva ze systému,</li>
            <li>kontroluje se stav ložisek ventilátorů,</li>
            <li>kontrolují externí čerpadla kondenzátu.</li>
          </ul>
          <h3 class="text-2xl font-medium tracking-tight sm:text-2xl underline decoration-blue decoration-2 underline-offset-2">Servis vnitřních klimatizačních jednotek
        </h3>
         
          <ul class=" pl-10 list-disc text-xl font-light tracking-tight sm:text-xl">
            <li>Kompletní vyčištění:
                <ul class="py-4 pl-10 list-none">
                    <li>Prachových filtrů,</li>
                    <li>výměníku chladiva,</li>
                    <li>lopatek ventilátoru,</li>
                    <li>odpadní vany kondenzátu,</li>
                    <li>externí plovákové komory čerpadla kondenzátu,</li>
                    <li>celkové povrchové čištění jednotky.</li>
                </ul>
            </li>
            <li>zjištění stavu ložisek u ventilátoru,</li>
            <li>měření provozních teplot,</li>
            <li>kontrola elektrické části zařízení,</li>
            <li>kontrola veškerých možných funkcí daného zařízení.</li>
          </ul>
          <h3 class="text-2xl font-medium tracking-tight sm:text-2xl underline decoration-blue decoration-2 underline-offset-2">Servis venkovní klimatizační jednotky
        </h3>
         
          <ul class=" pl-10 list-disc text-xl font-light tracking-tight sm:text-xl">
            <li>Chemické a tlakové číštění kondenzátoru, ventilátoru, opláštění zařízení,</li>
            <li>měření provozních tlaků chladiva a kontrola množství v systému,</li>
            <li>kontrola odběru proudu kompresoru a celého zařízení při zátěži,</li>
            <li>kontrola elektroinstalace, teplotních čidel, tlakových a proudových ochran zařízení,</li>
            <li>kontrola těsnosti spojů zařízení,</li>
            <li>kontrola celkového chodu zařízení.</li>
          </ul>


        </div>
        
        
      </div>
    </div>
   

  </section>`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/servis/Info.astro", void 0);

const $$Astro = createAstro();
const $$Servis = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Servis;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Servis" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "About", $$Info, {})}
 
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/servis.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/servis.astro";
const $$url = "/servis";

export { $$Servis as default, $$file as file, $$url as url };
