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
        <div className='bg-light'>
            <div>
                <div className='row mx-auto' style={{ width: 350 }} >
                    <div className='container m-5 border border-dark border border-3 rounded-3 '>
                        <form >
                            <div className='mx-auto ' style={{ width: 175}}>
                                <h5 className='card-title mb-3 mt-3'>Alta de empleado</h5>
                            </div>
                            <div className='mb-3'>
                                <InputName />
                            </div>
                            <div className='mb-3'>
                                <InputLastName />
                            </div>
                            <div className='mb-3'>
                                <InputDateTime />
                            </div>
                            <div className='mb-3'>
                                <InputEmail />
                            </div>
                            <div className='mb-3'>
                                <InputPassword />
                            </div>
                            <div className='mb-3'>
                                <InputConfirmPassword />
                            </div>
                            <div className='mb-3'>
                                <InputRecoveryEmail />
                            </div>
                            <div className='mb-3'>
                                <InputTel />
                            </div>
                        </form>
                        <div className='mx-auto' style={{width: 122}}>
                            <button type="button" className="btn btn-dark mb-3">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulario;