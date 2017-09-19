const tv4 = require('tv4');
const refparser = require('json-schema-ref-parser');

const schemaNames = [
  { camel: 'rule', snake: 'rule' },
  { camel: 'flag', snake: 'flag' },
];

const schemas = {};

module.exports = {
  init: async () => {
    if (Object.keys(schemas).length > 0) return;
    for (const name of schemaNames) {
      const dereffed = await refparser.dereference(`./schema/${name.snake}.json`);
      schemas[name.camel] = dereffed;
    }
  },
  validator: tv4,
  schemas,
};
