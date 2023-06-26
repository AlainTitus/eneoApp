import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
    nomderiv: 'Bonando',
    depart: '',
    troncon: '',
    exploitation: '',
    type: '',
    nbrPoste: '',
    puistotale: '',
    tension: '',
    etat: '',
    dateprotect: '',
    coordx: '',
    coordy: '',
    connectique: '',
    typesupport: '',
    longueur: '',
    position: ''
}
const onSubmit = values => {
    console.log('Form data', values);
}
const validate = values => {
    let errors = {}
    if (!values.nomderiv) {
        errors.nomderiv = 'Remplir le nom de la derivation'
    }
    if (!values.depart) {
        errors.depart = 'Remplir le nom du départ'
    }
    if (!values.troncon) {
        errors.troncon = 'Remplir le nom du tronçon MT'
    }
    if (!values.exploitation) {
        errors.exploitation = 'Remplir le nom de l\'exploitation'
    }
    if (!values.type) {
        errors.type = 'Donnez le type de dérivation'
    }
    if (!values.tension) {
        errors.tension = 'Donnez le niveau de tension'
    }

    return errors
}

const validationSchema = Yup.object({
    nomderiv: Yup.string().required('Nom dérivation!'),
    depart: Yup.string().required('Nom du départ!'),
    troncon: Yup.string().required('Nom du tronçon!'),
    exploitation: Yup.string().required("Nom de l'exploitation!"),
    type: Yup.string().required('Type Mono ou Tri!'),
    tension: Yup.string().required('Tension du départ!')
})

const OldFormProtectDerivation = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate
    })

    console.log('visited fields: ', formik.touched);
    return (
        <form action="" className='form-protect-deriv' onSubmit={formik.handleSubmit}>
            <div className='container1'>
                <div className='form-protect-deriv-container-field'>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="nomderiv">Nom derivation:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='nomderiv' id='nomderiv' onChange={formik.handleChange} value={formik.values.nomderiv}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.nomderiv && formik.errors.nomderiv && <div className='form-protect-deriv-formik-error'>{formik.errors.nomderiv}</div>}
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="depart">Depart:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='depart' id='depart' onChange={formik.handleChange} value={formik.values.depart}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.depart && formik.errors.depart && <div className='form-protect-deriv-formik-error'>{formik.errors.depart}</div>}
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="troncon">Tronçon:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='troncon' id='troncon' onChange={formik.handleChange} value={formik.values.troncon}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.troncon && formik.errors.troncon && <div className='form-protect-deriv-formik-error'>{formik.errors.troncon}</div>}
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="exploitation">Exploitation:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='exploitation' id='exploitation' onChange={formik.handleChange} value={formik.values.exploitation}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.exploitation && formik.errors.exploitation && <div className='form-protect-deriv-formik-error'>{formik.errors.exploitation}</div>}
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="type">Type:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='type' id='type' onChange={formik.handleChange} value={formik.values.type}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.type && formik.errors.type && <div className='form-protect-deriv-formik-error'>{formik.errors.type}</div>}
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="nbrPoste">Nombre poste:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='nbrPoste' id='nbrPoste' onChange={formik.handleChange} value={formik.values.nbrPoste} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="puistotale">Puis installée:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='puistotale' id='puistotale' onChange={formik.handleChange} value={formik.values.puistotale} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="tension">Tension:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='tension' id='tension' onChange={formik.handleChange} value={formik.values.tension}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        {formik.touched.tension && formik.errors.tension && <div className='form-protect-deriv-formik-error'>{formik.errors.tension}</div>}
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="etat">Protégé:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='etat' id='etat' onChange={formik.handleChange} value={formik.values.etat} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="dateprotect">Date protection:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='dateprotect' id='dateprotect' onChange={formik.handleChange} value={formik.values.dateprotect} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="coordx">Coord_X:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='coordx' id='coordx' onChange={formik.handleChange} value={formik.values.coordx} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="coordy">Coord_Y:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='coordy' id='coordy' onChange={formik.handleChange} value={formik.values.coordy} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="connectique">Connectique:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='connectique' id='connectique' onChange={formik.handleChange} value={formik.values.connectique} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="longueur">Longueur en m:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='longueur' id='longueur' onChange={formik.handleChange} value={formik.values.longueur} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="position">Position:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='position' id='position' onChange={formik.handleChange} value={formik.values.position} />
                        </div>
                    </div>
                    <div className='div-protect-deriv-input-label'>
                        <div className='div-protect-deriv-label'>
                            <label htmlFor="typesupport">Type support:</label>
                        </div>
                        <div className='div-protect-deriv-input'>
                            <input type="text" name='typesupport' id='typesupport' onChange={formik.handleChange} value={formik.values.typesupport} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='form-protect-deriv-btn'>
                <button type='submit'>ENREGISTREZ</button>
            </div>
        </form>

    )
}

export default OldFormProtectDerivation
