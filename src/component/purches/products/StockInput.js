import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './index.css'
import { http } from '../../../axios'

function StockInput({ Reload, insert, update, Update, formValues, initialValues }) {

    

    const submit = (values, submitProps) => {
        
        // console.log("values", values)
        http.post("goods", values)
            .then(res => {
                // console.log(res.data)
                Reload(res.data)
                Update(initialValues,false)
            })
            .catch(err => {
                console.log(err)
            })
        submitProps.resetForm()    
        
    }

    const validationSchema = yup.object({
        product: yup.string().required("Enter Product Name"),
        hsnno: yup.number().required("Enter HSNNO"),
        mrp: yup.number().required("Enter MRP"),
        gst: yup.number().required("Enter GST")        
    })

    return (
        <div className="container mt-3">
            <Formik
                initialValues={formValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {
                    formikProps => (
                        <Form autoComplete="off">

                            <div className="form-group">
                                <Field name="product" type="text" className="form-control" placeholder="Enter Product Name" />
                                <ErrorMessage name="product" />
                            </div>

                            <div className="inputRow">
                                <div className="form-group">
                                    <Field name="hsnno" type="number" className="form-control" placeholder="Enter HSNNO" />
                                    <ErrorMessage name="hsnno" />
                                </div>
                                <div className="form-group">
                                    <Field name="mrp" type="number" className="form-control" placeholder="Enter MRP" />
                                    <ErrorMessage name="mrp" />
                                </div>                                
                                <div className="form-group">
                                    <Field name="gst" type="number" className="form-control" placeholder="Enter GST" />
                                    <ErrorMessage name="gst" />
                                </div>
                            </div>

                            <div className="w3-center">
                                <button className="w3-button w3-blue mr-3" type="reset" onClick={() => Update(initialValues,false)} >Reset</button>
                                {insert && <button className="w3-button w3-blue" type="submit" >Insert</button>}
                                {update && <button className="w3-button w3-blue" type="button" onClick={() =>Update(initialValues,false,formikProps.values)}>Update</button>}
                            </div>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default StockInput
