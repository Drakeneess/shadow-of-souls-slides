const slideModules = import.meta.glob("./*.jsx", {
  eager: true,
});

export const slides = Object.entries(slideModules)
  .filter(([path]) => path !== "./index.jsx")
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, module]) => {
    const component = module.default;

    if (!component) {
      throw new Error(`La slide ${path} no tiene export default.`);
    }

    return {
      path,
      component,
    };
  });