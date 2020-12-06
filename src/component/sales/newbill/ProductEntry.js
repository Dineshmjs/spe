import { Field, Formik, Form, ErrorMessage } from 'formik'
import React,{useState} from 'react'
import * as yup from 'yup'
import { http } from '../../../axios'
import ChooseProduct from './ChooseProduct'


function ProductEntry({Reload,reload}) {

    const initialValues = {       
        qt: "",
        rate:"",
        disc:"",
        exp:""       
    }

    const Item = (data)=>{
        console.log("data",data)
        setProductInfo(data)
    }

    const [productInfo,setProductInfo] = useState()

    const submit = (values,formikProps) => {
        console.log(values,productInfo)
        let postdata = {
            input:values,
            custom:productInfo
        } 

        http.post("tempitem",postdata)
        .then(res=>{
            console.log(res.data)
            Reload(res.data)
            formikProps.resetForm()
        })
        .catch(err=>{
            console.log(err)
        })

        
    }

    const validationSchema = yup.object({      
        qt: yup.number().required("Please Enter Quantity"),
        disc: yup.string().required("Please Enter Discount "),
        rate: yup.string().required("Please Enter Rate")

    })

    
    return (
        <div className="mt-3 w3-container">
            <h5 className="w3-center pt-3 w3-text-blue" >Product Entry</h5><br/>
            <ChooseProduct Item={Item} reload={reload} />
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                validationSchema={validationSchema}
                enableReinitialize
            >
                <Form>
                    <div className="pefield">
                        
                        <div className="form-group">
                            <Field type="number" name="qt" placeholder="Enter Quantity" className="form-control" />
                            <ErrorMessage name="qt" />
                        </div>

                        <div className="form-group">
                            <Field type="number" name="rate" placeholder="Enter Rate" className="form-control" />
                            <ErrorMessage name="rate" />
                        </div>

                        <div className="form-group">
                            <Field type="text" name="exp" className="form-control" placeholder="Expiry Date" />
                            <ErrorMessage name="exp" />
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
