import { normalizeArray } from './-utils';

export default normalizeArray({ defaultValue: () => -1 }, (array, value, fromIndex) => {
  return array.lastIndexOf(value, fromIndex);
});
