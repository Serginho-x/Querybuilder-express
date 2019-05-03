const uniqueId = require('uuid/v4');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
    id: {
		type: Schema.Types.String,
		default: 'r-' + uniqueId()
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
    }
})

module.exports = mongoose.model('Rule', ruleSchema);