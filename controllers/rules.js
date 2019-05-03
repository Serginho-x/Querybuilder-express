const Rule = require('../models/Rule');
const RuleGroup = require('../models/RuleGroup');

const getRuleGroup = async (req, res) => {   
     return res.status(200).json("get"); 
}

const addRuleGroup = async (req, res) => {   
    const ruleGroup = await new RuleGroup().save();
     return res.status(200).json(ruleGroup); 
}

const addRule = async (req, res) => {   
    const rule = await new Rule().save();
     return res.status(200).json(rule); 
}

module.exports = {addRuleGroup, getRuleGroup, addRule};