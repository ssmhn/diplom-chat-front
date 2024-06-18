// ----------------------------------------------------------------------

export const flattenArray = <T extends Record<any, any>>(list: T[], key = 'children'): T[] => {
  let children: T[] = [];

  const flatten = list.map((item) => {
    if (item[key] && item[key].length) {
      children = [...children, ...item[key]];
    }
    return item;
  });

  return flatten.concat(children.length ? flattenArray(children, key) : children);
}
