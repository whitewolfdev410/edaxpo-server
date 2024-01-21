import isEqual  from 'lodash/isEqual'
import transform from 'lodash/transform'
// https://gist.github.com/Yimiprod/7ee176597fef230d1451

export default function differences(values, baseObject) {
  const changes = (object, base) =>
    transform(
      object,
      (result, value, key) => {
        if (!isEqual(value, base[key])) {
          // todo: valutare se serve il nested support (tolto per opzione interview in candidate)
          /* if(isArray(value)){
            result[key] = value
          }else{
            result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value
          } */
          result[key] = value
        }
      },
      {},
    )
  return changes(values, baseObject)
}
