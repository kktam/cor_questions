export function assignIdToData(data) {
    var modified = data.map(function(val, index, array) {
      if (val != null) {
        val.id = index;
      }
      return val;
    })

    return modified;
}

