const Rule = require('../models/Rule');
const RuleGroup = require('../models/RuleGroup');
const deleteRoot = require('../helpers/deleteRoot');

const getRuleGroup = async (req, res) => {   
     const rules = await Rule.find();
     const ruleGroups = await RuleGroup.find();
     return res.status(200).json(rules.concat(ruleGroups)); 
}

const addRuleGroup = async (req, res) => {
    const {id, parentId} = req.body;
    const ruleGroup = await new RuleGroup({id, parentId}).save();
     return res.status(200).json(ruleGroup); 
}

const addRule = async (req, res) => {
    const {id, parentId} = req.body; 
    const rule = await new Rule({id, parentId}).save();
     return res.status(200).json(rule); 
}

const updateItem = async (req, res) => {
     const {value, name} = req.body;    
     if(req.params.id[0]==='g') { 
          await RuleGroup.findOneAndUpdate({id: req.params.id}, {[name]: value}, {new: true});
          return res.json({id: req.params.id, value, name});          
     } else if (req.params.id[0]==='r') { 
          await Rule.findOneAndUpdate({id: req.params.id}, {[name]: value}, {new: true});
          return res.json({id: req.params.id, value, name});      
     } else { 
          return res.status(404)
     }    
 }
 
const deleteItem = async (req, res) => {
     if(req.params.id[0]==='g') { 
          const item = await RuleGroup.findOneAndDelete({id: req.params.id}); 
          await deleteRoot(item);         
          return res.json(item)
     } else if (req.params.id[0]==='r'){
          const item = await Rule.findOneAndDelete({id: req.params.id});
          return res.json(item);   
     } else {
          return res.status(404)
     }
 }
 
module.exports = {addRuleGroup, getRuleGroup, addRule, updateItem, deleteItem};