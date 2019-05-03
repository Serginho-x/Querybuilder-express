var express = require('express');
var router = express.Router();
const {getRuleGroup, addRuleGroup, addRule} = require('../controllers/rules');

router.post('/rules/getRuleGroup', getRuleGroup);
router.post('/rules/addRuleGroup', addRuleGroup);
router.post('/rules/addRule', addRule);

module.exports = router;
