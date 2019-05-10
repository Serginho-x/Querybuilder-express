const Rule = require('../models/Rule');
const RuleGroup = require('../models/RuleGroup');
const deleteRoot = require('../helpers/deleteRoot');

const getDataBase = async (req, res) => { 
     const rules = await Rule.find({name: req.query.name, rootId: req.query.rootId});
     const ruleGroups = await RuleGroup.find({name: req.query.name, rootId: req.query.rootId});
     const rootTop = await RuleGroup.find({parentId: null})     
     // response object with 2 arrays: top groups of root and all rules & ruleGroups
     return res.status(200).json({rootTop, rootItems: rules.concat(ruleGroups)}); 
}

const addRuleGroup = async (req, res) => {
    const {parentId, name, rootId} = req.body;    
    const ruleGroup = await new RuleGroup({parentId, name, rootId}).save();
     return res.status(200).json(ruleGroup); 
}

const addRule = async (req, res) => {
    const {parentId, name, rootId} = req.body;
    const rule = await new Rule({parentId, name, rootId}).save();
     return res.status(200).json(rule); 
}

const updateRuleGroup = async (req, res) => {
     const {value, name} = req.body; 
     const ruleGroup = await RuleGroup.findOneAndUpdate({_id: req.params.id}, {[name]: value}, {new: true});
     if (ruleGroup) {
          return res.json({_id: req.params.id, value, name})
     } else {
          return res.status(404)
     }  
} 

const updateRule = async (req, res) => {
     const {value, name} = req.body;
     const rule = await Rule.findOneAndUpdate({_id: req.params.id}, {[name]: value}, {new: true});
     if (rule) {
          return res.json({_id: req.params.id, value, name})
     } else {
          return res.status(404)
     }    
 }
 
const deleteRuleGroup = async (req, res) => {    
     const ruleGroup = await RuleGroup.findOneAndDelete({_id: req.params.id}); 
     await deleteRoot(ruleGroup);         
     if (ruleGroup) { 
          return res.json(ruleGroup);   
     } else {
          return res.status(404)
     }
}
const deleteRule = async (req, res) => {
     const rule = await Rule.findOneAndDelete({_id: req.params.id});
     if (rule) { 
          return res.json(rule);   
     } else {
          return res.status(404)
     }
 }
 
module.exports = {getDataBase, addRuleGroup, addRule, updateRuleGroup, updateRule, deleteRuleGroup, deleteRule};