const router = require('express-promise-router')();
const { getDataBase,
        addRuleGroup,
        addRule,
        updateRuleGroup,
        updateRule,
        deleteRuleGroup,
        deleteRule} = require('../controllers/rules');

router.get('/rules', getDataBase);
router.post('/rules/addRuleGroup', addRuleGroup);
router.post('/rules/addRule', addRule);
router.put('/rules/updateRuleGroup/:id', updateRuleGroup);
router.put('/rules/updateRule/:id', updateRule);
router.delete('/rules/deleteRuleGroup/:id', deleteRuleGroup);
router.delete('/rules/deleteRule/:id', deleteRule);

module.exports = router;

