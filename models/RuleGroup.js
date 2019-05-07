const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleGroupSchema = new Schema({
    id: {
      type: Schema.Types.String,
      required: true
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
      default: ""
    }
})

module.exports = mongoose.model('RuleGroup', ruleGroupSchema);