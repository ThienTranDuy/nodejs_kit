const ifCond = (v1, operator, v2, options) => {
  switch (operator) {
    case "==":
      return (v1 == v2) ? options.fn(this) : options.inverse(this);

    case "!=":
      return (v1 != v2) ? options.fn(this) : options.inverse(this);

    case "===":
      return (v1 === v2) ? options.fn(this) : options.inverse(this);

    case "!==":
      return (v1 !== v2) ? options.fn(this) : options.inverse(this);

    case "&&":
      return (v1 && v2) ? options.fn(this) : options.inverse(this);

    case "||":
      return (v1 || v2) ? options.fn(this) : options.inverse(this);

    case "<":
      return (v1 < v2) ? options.fn(this) : options.inverse(this);

    case "<=":
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);

    case ">":
      return (v1 > v2) ? options.fn(this) : options.inverse(this);

    case ">=":
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);

    default:
      return eval("" + v1 + operator + v2) ? options.fn(this) : options.inverse(this);
  }
}

/**
 * Trạng thái
 */
const Status = {
  _InActive: 0, // Chưa kịch hoạt
  _Active: 1, // Kích hoạt
  _Block: 2 // block
}

module.exports = {
  ifCond,
  Status
}
