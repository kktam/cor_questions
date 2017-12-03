/*
 * assignIdToData - add meta data to data set, to support Calendar events operations
 * @param data - original data array
 * @returns modified data array, with meta data embedded
 */
export function assignIdToData(data) {
    var modified = data.map(function(val, index, array) {
      if (val != null) {
        // item position id in array
        val.id = index;
        // item is currently open in UI
        val.isOpened = false;
      }
      return val;
    })

    return modified;
}

