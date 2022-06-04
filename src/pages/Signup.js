import React from 'react'

export default signup;
 function signup()
{
return(

    <React.Fragment>
       
<div className="container">
      <p>
        Don’t Hesitate To Ask
      </p>
      <h2 className="">
        FREE CONSULTATION
      </h2>
    </div>
    <div className="container">

      <div className="row">
        <div className="col-md-6 ">
          <form action="">
            <div className="contact_form-container">
              <div>
                <div>
                  <label>
                    Name
                    <input type="text" />
                  </label>
                </div>
                <div>
                  <label>
                    Email
                    <input type="email" />
                  </label>
                </div>

                <div>
                  <label>
                    Phone Number
                    <input type="text" />
                  </label>
                </div>

                <div>
                  <label>
                    Message
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </label>
                </div>
                <div className="mt-5">
                  <button type="submit">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="contact_img-box">
            <img src="assets/images/form-img.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  
    </React.Fragment>

)

}