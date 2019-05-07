let yup = require('yup');

let schema = yup.object().shape({  
    id: yup.string().length(38).matches(/(g-)/).required(),
    parentId: yup.string().required()
  });
   
const validRuleGroupId = (req, res, next) =>  {
    const isValid = schema.isValidSync(req.body);
    isValid ? next () : res.status(404).json({ message: 'Incorrect Id'});
  };
   
module.exports = validRuleGroupId