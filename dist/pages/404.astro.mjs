export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import '../chunks/astro.258d6d1c.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../chunks/pages/404.astro.1cf453a8.mjs').then(n => n._);

export { page };
