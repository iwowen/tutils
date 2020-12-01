import { CloneDeep } from "../types";

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
const cloneDeep: CloneDeep = (obj, map = new WeakMap()) => {
  if (isObject(obj)) {
    const newObj = obj instanceof Array ? [] : {};
    if (map.get(obj)) {
      return obj;
    }
    map.set(obj, true);
    for (const key in obj) {
      newObj[key] = cloneDeep(obj[key], map);
    }
    return newObj;
  } else {
    return obj;
  }
};

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

export default cloneDeep;