/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent } from '../astro.258d6d1c.mjs';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import ImageGallery from 'react-image-gallery';
import react from '@vitejs/plugin-react';
import 'react-dom';
/* empty css                             */import { $ as $$Layout } from './404.astro.1cf453a8.mjs';

react.preambleCode;

function App() {
  const images = [
    {
      original: "/assets/tepelnacerpadla.jpg",
      thumbnail: "/assets/tepelnacerpadla.jpg"
    },
    {
      original: "/assets/tepelnacerpadla2.jpg",
      thumbnail: "/assets/tepelnacerpadla2.jpg"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "App grid h-screen place-items-center ", children: [
    /* @__PURE__ */ jsx("h2", { className: "decoration-red text-3xl font-medium tracking-tight underline decoration-4 underline-offset-4 sm:text-4xl", children: "Galerie" }),
    /* @__PURE__ */ jsxs("div", { className: "w-1/2 rounded-lg p-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight sm:text-2xl", children: "Tepelná čerpadla" }),
      /* @__PURE__ */ jsx(
        ImageGallery,
        {
          items: images,
          showPlayButton: true,
          slideOnThumbnailOver: true,
          showIndex: true
        }
      ),
      ";"
    ] })
  ] });
}

function App2() {
  const images2 = [
    {
      original: "/assets/klima1.jpg",
      thumbnail: "/assets/klima1.jpg"
    },
    {
      original: "/assets/klima2.jpg",
      thumbnail: "/assets/klima2.jpg"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "App grid h-screen place-items-center ", children: /* @__PURE__ */ jsxs("div", { className: "w-1/2 rounded-lg p-10", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight sm:text-2xl", children: "Klimatizace" }),
    /* @__PURE__ */ jsx(
      ImageGallery,
      {
        items: images2,
        showPlayButton: true,
        slideOnThumbnailOver: true,
        showIndex: true
      }
    ),
    ";"
  ] }) });
}

function App3() {
  const images3 = [
    {
      original: "/assets/mereni.jpg",
      thumbnail: "/assets/mereni.jpg"
    },
    {
      original: "/assets/mereni2.jpg",
      thumbnail: "/assets/mereni2.jpg"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "App grid h-screen place-items-center ", children: /* @__PURE__ */ jsxs("div", { className: "w-1/2 rounded-lg p-10", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight sm:text-2xl", children: "Měření a regulace" }),
    /* @__PURE__ */ jsx(
      ImageGallery,
      {
        items: images3,
        showPlayButton: true,
        slideOnThumbnailOver: true,
        showIndex: true
      }
    ),
    ";"
  ] }) });
}

function App4() {
  const images4 = [
    {
      original: "/assets/rekuperace.jpg",
      thumbnail: "/assets/rekuperace.jpg"
    },
    {
      original: "/assets/rekuperace2.jpg",
      thumbnail: "/assets/rekuperace2.jpg"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "App grid h-screen place-items-center ", children: /* @__PURE__ */ jsxs("div", { className: "w-1/2 rounded-lg p-10", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight sm:text-2xl", children: "Rekuperace" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Informace o tom, jak funguje rekuperace najdete v menu –",
      " ",
      /* @__PURE__ */ jsx("u", { children: /* @__PURE__ */ jsx("a", { href: "/rekuperace", children: "Rekuperace" }) })
    ] }),
    /* @__PURE__ */ jsx(
      ImageGallery,
      {
        items: images4,
        showPlayButton: true,
        slideOnThumbnailOver: true,
        showIndex: true
      }
    ),
    ";"
  ] }) });
}

function App5() {
  const images5 = [
    {
      original: "/assets/topeni.jpg",
      thumbnail: "/assets/topeni.jpg"
    },
    {
      original: "/assets/topeni2.jpg",
      thumbnail: "/assets/topeni2.jpg"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "App grid h-screen place-items-center ", children: /* @__PURE__ */ jsxs("div", { className: "w-1/2 rounded-lg p-10", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium tracking-tight sm:text-2xl", children: "Topení" }),
    /* @__PURE__ */ jsx(
      ImageGallery,
      {
        items: images5,
        showPlayButton: true,
        slideOnThumbnailOver: true,
        showIndex: true
      }
    ),
    ";"
  ] }) });
}

const $$Astro = createAstro();
const $$Galerie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Galerie;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Klimatizace&Tepeln\xE1 \u010Derpadla Jirout", "title": "Kontakt" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "ImageGallery", App, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/gallery/Galerie1.jsx", "client:component-export": "default" })}
  ${renderComponent($$result2, "ImageGallery2", App2, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/gallery/Galerie2.jsx", "client:component-export": "default" })}
  ${renderComponent($$result2, "ImageGallery3", App3, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/gallery/Galerie3.jsx", "client:component-export": "default" })}
  ${renderComponent($$result2, "ImageGallery4", App4, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/gallery/Galerie4.jsx", "client:component-export": "default" })}
  ${renderComponent($$result2, "ImageGallery5", App5, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/components/gallery/Galerie5.jsx", "client:component-export": "default" })}
` })}`;
}, "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/galerie.astro", void 0);

const $$file = "C:/Users/pajap/Desktop/stone/klimtop2_jarda/src/pages/galerie.astro";
const $$url = "/galerie";

export { $$Galerie as default, $$file as file, $$url as url };
