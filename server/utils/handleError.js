import {GeneralError} from './Errors';

export default (err,req,res,next) => {
  if(err instanceof GeneralError) {
    return res.status(err.getCode()).json({error: err.getMessage()});
  }

  if(err.name === 'ValidationError') {
    let errors = Object.values(err.errors).map(el => el.message);
    let fields = Object.values(err.errors).map(el => el.path);

    if(errors.length > 1) {
      const formattedErrors = errors.join(' ');
      return res.status(400).json({messages: formattedErrors, fields});
    }

    return res.status(400).json({messages: errors, fields});
  }
   if(err.code && err.code == 11000) {
    const field = Object.keys(err.keyValue);
    return res.status(409).json({error: `An account with that field ${field} already exists.`});
   };


  console.log(err.message);
  return res.status(500).json({error: "Internal server error"});
}