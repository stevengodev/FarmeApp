import React, { useState } from 'react';

const StaffRegistrationForm = () => {

    const [staffName, setStaffName] = useState('');
    const [birthDateStaff, setBirthDateStaff] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="staffName"
                    value={staffName}
                    onChange={(e) => setStaffName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Fecha de nacimiento</label>
                <input
                    type="date"
                    className="form-control"
                    id="birthDateStaff"
                    value={birthDateStaff}
                    onChange={(e) => setBirthDateStaff(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">ID FARM</label>
                <input
                    type="text"
                    className="form-control"
                    id=""
                    readOnly
                    value="id de la finca (solo lectura)"
                />
            </div>

            <div className="mb-3">
                <input
                    type="hidden"
                    className="form-control"
                    id="isDeleted"
                    readOnly
                    value="false"
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="reset" className="btn btn-secondary">Cancelar</button>

        </form>
    )
}

export default StaffRegistrationForm;