import * as joi from 'joi';
import 'dotenv/config';

//ReturnEnvironmentVars: Define el tipo datos de las variables de entorno que la app usará
export type ReturnEnvironmentVars = {
    PORT:number;
}

//ValidationEnvironmentVars: Estrucura  que almacena el resultado de la validación de las variables de entorno
type ValidationEnvironmentVars ={
    error: joi.ValidationError | undefined,
    value: ReturnEnvironmentVars
}

function validateEnvVars(vars:NodeJS.ProcessEnv):ValidationEnvironmentVars{
    const envSchema = joi.object({
        PORT: joi.number().required()
    }).unknown(true);
    const {error,value}=envSchema.validate(vars);
    return {error,value};
}

const loadEnvVars = (): ReturnEnvironmentVars => {
    const result = validateEnvVars(process.env);
    if(result.error){
        throw new Error(result.error.message);
    }
    const value = result.value
    return{
        PORT: value.PORT
    }
}
const envs = loadEnvVars();
 export default envs;