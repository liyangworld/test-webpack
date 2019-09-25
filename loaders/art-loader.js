const loaderUtils = require("loader-utils");
const template = require("art-template");
module.exports = function loader(source, other) {
  const options = loaderUtils.getOptions(this);

  source = template.render(source, options.data);

  this.callback(null, source, other);
};
