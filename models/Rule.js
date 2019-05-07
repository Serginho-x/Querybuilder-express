const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
    id: {
      type: Schema.Types.String,
      required: true
    },
    field: {
      type: Schema.Types.String,
      default: "firstName"
    },
    value: {
      type: Schema.Types.String,
      default: ""
    },
    operator: {
      type: Schema.Types.String,
      default: "null"
    },  
    parentId: {
      type: Schema.Types.String,
      default: ""
    }
})

module.exports = mongoose.model('Rule', ruleSchema);