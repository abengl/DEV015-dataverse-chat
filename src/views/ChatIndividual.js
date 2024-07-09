export function ChatIndividual(props) {
  const viewEl = document.createElement("h1");
  viewEl.textContent = `Bienvenido al chat individual ${props.id}!`;
  return viewEl;
}
