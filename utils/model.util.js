function convertToId () {
  let obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;

  return obj;
}

function switchPath(item, newPath, oldPath, value = null) {
  let obj = item;
  if (value) {
    obj[newPath] = value;
  } else {
    obj[newPath] = obj[oldPath];
  }
  if (oldPath) delete obj[oldPath];
  return obj;
}

module.exports = {
  convertToId,
  switchPath
};
