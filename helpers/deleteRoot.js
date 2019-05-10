const Rule = require('../models/Rule');
const RuleGroup = require('../models/RuleGroup');

async function deleteRoot(item) {
    // find all Rule and RuleGroup with needed parent.id
    const childrenRuleGroup = await RuleGroup.find({parentId: item._id});
    const childrenRule = await Rule.find({parentId: item._id});
    // delete all items in 2 arrays from db
    childrenRuleGroup.map(async item => await RuleGroup.findOneAndDelete({_id: item._id}));
    childrenRule.map(async item => await Rule.findOneAndDelete({_id: item._id}));
    // if child has own children - repeat 
    childrenRuleGroup.forEach(child => deleteRoot(child));    
}

module.exports = deleteRoot