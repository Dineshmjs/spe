import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './index.css'
import { http } from '../../../axios'

function InputEntry({ Reload, updateValues, Update, update, insert, initialValues }) {

    const submit = (values, submitProps) => {
        console.log("form values", values)
        http.post("buyeraddress", values)
            .then(res => {
                console.log(res.data)
                Reload(res.data._id)

            })
            .catch(err => {
                console.log(err)
            })
        submitProps.resetForm()
    }


    const validationSchema = yup.object({
        name: yup.string().required("Please Enter Name"),
        address: yup.string().required("Please Enter Address")
    })
    return (
        <div className="m-3">
            <div className="w3-card p-3">
                <h4 className="w3-center w3-text-blue">Buyers Entry</h4>
                <Formik
                    initialValues={updateValues}
                    onSubmit={submit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                    {
                        (formikProps) => {
                            console.log("formikProps", formikProps)


                            return (

                                <Form className="form" autoComplete="off" >
                                    <div className="form-group">
                                        <Field name="name" type="text" placeholder="Enter Name Of The Company" className="form-control" />
                                        <ErrorMessage name="name" />
                                    </div>

                                    <div className="form-group">
                                        <Field name="address" type="text" placeholder="Eg : Door No, Street, Area Name" className="form-control" />
                                        <ErrorMessage name="address" />
                                    </div>

                                    <div className="form-group">
                                        <Field name="gstin" type="text" placeholder="Company GSTIN NO" className="form-control" />
                                        <ErrorMessage name="gstin" />
                                    </div>

                                    <div className="form-group">
                                        <Field name="dlno" type="text" placeholder="Company DL NO" className="form-control" />
                                        <ErrorMessage name="dlno" />
                                    </div>

                                    <div className="form-group w3-center">
                                        <button className="w3-button w3-indigo mr-3" type="reset" onClick={() => Update(initialValues, false)}>Reset</button>
                                        {
                                            insert && <button className="w3-button w3-purple" type="submit">Submit</button>
                                        }
                                        {

                                            update && <button className="w3-button w3-purple" type="button" onClick={() => Update(initialValues, false, formikProps.values)}>Update</button>

                                        }

                                    </div>
                                </Form>

                            )
                        }
                    }


                </Formik>
            </div>
            <br></br>
        </div>

    )
}

export default InputEntry
