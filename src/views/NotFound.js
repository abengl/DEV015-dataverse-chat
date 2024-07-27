export function NotFound() {
  const rootEl = document.createElement("div");
  rootEl.classList.add("not-found");
  rootEl.innerHTML = `
    <h1 class="not-found__title">404</h1>
    <p class="not-found__text">Página no encontrada</p>
  `;
  const getElementsAndEvents = () => {};
  return { view: rootEl, getElementsAndEvents };
}