import React from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com'

const Contact = () => {

    const showSuccess = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Message sent successfully',
            showConfirmButton: false,
            timer: 750
        })
    }
    const sendEmail=(e)=>{
        emailjs.sendForm("service_hchkurk","template_7s85rwf",e.target,"ToNje3WeXYAsml3yi",).then(res=>{
            // console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        
    }


    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/contact.png" alt="Contact Us" height="400px" width="600px" />
                    </div>
                    <div className="col-md 6">
                        <form onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleInput" className="form-label">Full Name</label>
                                <input type="text" name='name' className="form-control" id="exampleInput" placeholder='John Adams...' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='examle:john@adams.org' />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your message</label>
                                <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-dark" onClick={showSuccess}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;