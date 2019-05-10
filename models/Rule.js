const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
    name: {
      type: Schema.Types.String,
      default: null
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
      default: ">"
    },  
    parentId: {
      type: Schema.Types.String,
      default: null
    },
    rootId: {
      type: Schema.Types.String,
      default: null
    }
})

module.exports = mongoose.model('Rule', ruleSchema);