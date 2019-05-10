const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuidv4 = require('uuidv4')

const ruleGroupSchema = new Schema({
    name: {
      type: Schema.Types.String,
      default: null
    },  
    rules: {
      type: Schema.Types.Array,
      default: []
    },
    combinator: {
      type: Schema.Types.String,
      default: "and"
    },
    parentId: {
      type: Schema.Types.String,
      default: null
    },
    rootId: {
      type: Schema.Types.String,
      default: uuidv4
    }
})

module.exports = mongoose.model('RuleGroup', ruleGroupSchema);