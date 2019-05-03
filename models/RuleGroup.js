const uniqueId = require('uuid/v4');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleGroupSchema = new Schema({
    id: {
		type: Schema.Types.String,
		default: 'g-' + uniqueId()
    },
    rules: {
		type: Schema.Types.Array,
		default: []
    },
    combinator: {
		type: Schema.Types.String,
		default: "and"
    }
})

module.exports = mongoose.model('RuleGroup', ruleGroupSchema);