import { Field, Formik, Form, ErrorMessage } from 'formik'
import React from 'react'
import * as yup from 'yup'

function ProductEntry() {

    const initialValues = {
        product: "",
        qt: "",
        disc: "",
        rate: ""
    }

    const submit = (values,formikProps) => {
        console.log(values)
        formikProps.resetForm()
    }

    const validationSchema = yup.object({
        product: yup.string().required("Please Select Product"),
        qt: yup.number().required("Please Enter Quantity"),
        disc: yup.string().required("Please Enter Discount "),
        rate: yup.string().required("Please Enter Rate")

    })
    return (
        <div className="mt-3">
            <h5 className="w3-center pt-3 w3-text-blue" >Product Entry</h5><br/>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="pefield">
                        <div className="form-group">
                            <Field as="select" name="product" className="form-control">
                                <option value="none">Select Product</option>
                                <option value="one">Doineshmjs Startmed Connections</option>
                            </Field>
                            <ErrorMessage name="product" />
                        </div>

                        <div className="form-group">
                            <Field type="number" name="qt" placeholder="Enter Quantity" className="form-control" />
                            <ErrorMessage name="qt" />
                        </div>

                        <div className="form-group">
                            <Field type="number" name="rate" placeholder="Enter Rate" className="form-control" />
                            <ErrorMessage name="rate" />
                        </div>

                        <div className="form-group">
                            <Field type="number" name="disc" placeholder="Enter Discount" className="form-control" />
                            <ErrorMessage name="disc" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </div>


                </Form>
            </Formik>            
        </div>
    )
}

export default ProductEntry
