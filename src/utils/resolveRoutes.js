const resolveRoutes = (route) => {
  if (route.length <= 3) {
    // home or id... depending on the number of elements.
    let validRoute = route === "/" ? route : "/:id";
    // if ths is true, we return the home, otherwise, this would be an id.
    return validRoute;
  }
  // but if we have a route like About, we need to return the actual route we have in "route"
  return `/${route}`;
};

export default resolveRoutes;
