const Rule = require('../models/Rule');
const RuleGroup = require('../models/RuleGroup');

async function deleteRoot(item) {  
    // find all Rule and RuleGroup with needed parent.id
    const childrenRuleGroup = await RuleGroup.find({parentId: item.id});
    const childrenRule = await Rule.find({parentId: item.id});
    // delete all items in 2 arrays from db
    childrenRuleGroup.map(async item => await RuleGroup.findOneAndDelete({id: item.id}));
    childrenRule.map(async item => await Rule.findOneAndDelete({id: item.id}));
    // if child has own children - repeat 
    childrenRuleGroup.forEach(child => deleteRoot(child));    
}

module.exports = deleteRoot