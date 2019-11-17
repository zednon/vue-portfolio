const schema = require('../../../schema.json')

export default {
  namespaced: true,

  state: {
    schema,
    initials: schema.basics.name.split(' ').map(name => name.charAt(0)).join(''),
  },
}
