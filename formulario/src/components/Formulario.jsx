import InputName from './InputName';
import InputLastName from './InputLastName'
import InputDateTime from './InputDateTime';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputConfirmPassword from './InputConfirmPassword';
import InputRecoveryEmail from './InputRecoveryEmail';
import InputTel from './InputTel';

function Formulario() {
    return (
        <form>
            <InputName />
            <InputLastName/>
            <InputDateTime/>
            <InputEmail/>
            <InputPassword/>
            <InputConfirmPassword/>
            <InputRecoveryEmail/>
            <InputTel/>
        </form>
    );
}

export default Formulario;