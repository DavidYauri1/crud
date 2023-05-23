import { extend } from 'vee-validate';
import { required, email, min_value } from 'vee-validate/dist/rules';


extend('required',{
    ...required,
    message:"is required",

});

extend('email', {
    ...email,
    message: 'is not a valid email',
  });

  extend('min_value', {
    ...min_value,
    message: 'ingresar cantidad mayor que 0',
  });

