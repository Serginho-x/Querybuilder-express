const router = require('express-promise-router')();
const {getRuleGroup, addRuleGroup, addRule, updateItem, deleteItem} = require('../controllers/rules');
const validRuleGroupId = require('../middlewares/validRuleGroupId');
const validRuleId = require('../middlewares/validRuleId');

router.get('/rules', getRuleGroup);
router.post('/rules/addRuleGroup', validRuleGroupId, addRuleGroup);
router.post('/rules/addRule', validRuleId, addRule);
router.put('/rules/:id', updateItem);
router.delete('/rules/:id', deleteItem);

module.exports = router;
