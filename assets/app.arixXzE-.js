import{d as i,v as s,a1 as u,u as c,j as l,z as f,a2 as d,a3 as m,a4 as h,a5 as A,a6 as g,a7 as v,a8 as P,a9 as w,aa as y,ab as C,ac as R,ad as _,ae as b,af as E}from"./chunks/framework.4SL9xGU4.js";import{t as D}from"./chunks/theme.WetsvN7a.js";const T={...D};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=p(T),j=i({name:"VitePressApp",setup(){const{site:e}=c();return l(()=>{f(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&d(),m(),h(),o.setup&&o.setup(),()=>A(o.Layout)}});async function L(){const e=S(),a=O();a.provide(g,e);const t=v(e.route);return a.provide(P,t),a.component("Content",w),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function O(){return R(j)}function S(){let e=s,a;return _(t=>{let n=b(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=E(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),r},o.NotFound)}s&&L().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{L as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}