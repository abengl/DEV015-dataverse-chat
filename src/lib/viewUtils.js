/**
 * This function removes unnecesary components for the actual view.
 * @param {array} arrayOfTags - the tags of the components to remove
 */
export function clearComponents(arrayOfTags) {
    arrayOfTags.forEach((tag) => {
    const component = document.querySelector(tag);
    if (component) {
      component.remove();
    }
  });
}
