const getCapitalizedPathName = (pathName: string) => {
  if (pathName !== "/") {
    const splitedPathName = pathName.split("/");
    const currentPathName = splitedPathName[splitedPathName.length - 1];
    const capitalizedPathName =
      currentPathName.split("")[0].toUpperCase() +
      currentPathName.slice(1, currentPathName.length);
    return capitalizedPathName;
  }
  return "Dashboard";
};

export default getCapitalizedPathName;
