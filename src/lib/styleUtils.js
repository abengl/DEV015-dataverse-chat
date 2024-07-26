/**
 * This functtion sets the styles for the component adding its own stylesheet and removing all the others except for the base stylesheet.
 * @param {string} stylesheetName - the name of the stylesheet to set
 */
export function setStyles(stylesheetName) {
  const href = `./styles/${stylesheetName}.css`;
  const hrefBase = `./styles/style.css`;
  loadStylesheet(href);
  removeStylesheet([href, hrefBase]);
}

/**
 * This function loads a stylesheet from a given path if it is not already loaded.
 * @param {string} href - the path of the stylesheet to load
 */
function loadStylesheet(href) {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = href;
    document.head.appendChild(linkElement);
  }
}

/**
 * This function removes all stylesheets from the document except those whose href are passed as arguments
 * @param {Array} preserveHrefs - the hrefs of the stylesheets to preserve
 */
function removeStylesheet(preserveHrefs) {
  if (!Array.isArray(preserveHrefs)) {
    console.error("preserveHrefs must be an array");
    return;
  }

  // Get all link elements with rel="stylesheet"
  const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
  
  // Loop through each link element
  linkElements.forEach(link => {
    const href = link.getAttribute('href');
    // If the href of the link element is not in the preserveHrefs array, remove it
    if (!preserveHrefs.includes(href)) {
      link.remove();
    }
  });
}
