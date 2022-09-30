function InputDateTime() {
    return (
        <>
            <label className='form-label'>Fecha de nacimiento</label>
            <input type="datetime-local" name="dateOfBirth" className="form-control" />
        </>
    );
}

export default InputDateTime;