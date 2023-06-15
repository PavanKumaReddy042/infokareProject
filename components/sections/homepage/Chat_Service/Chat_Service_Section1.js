import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


class Chat_Service_Section1 extends Component {
  state = {
    email: '',
    isValidEmail: '',
    buttonClicked: true,
    apiStatus: false,
    checkboxActive: false,
    isModalOpen: false,
  };

  getUserEmail = (e) => {
    const { email, isValidEmail } = this.state;
    this.setState({ email: e.target.value ,buttonClicked: true});
    if (e.target.value === '') {
      this.setState({ isValidEmail: '' });
    }
    if (this.validateEmail(email)) {
      this.setState({ isValidEmail: true, apiStatus: false });
    } else {
      if (e.target.value === '') {
        this.setState({ isValidEmail: '' });
      } else {
        this.setState({ isValidEmail: false, apiStatus: false });
      }
    }
  };

  validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  postUserData = async () => {
    const { email } = this.state;

    try {
      const url = 'https://dev-api.infokare.com/v1/api/subscribe';
      const data = {
        email: email,
      };

      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };

      const response = await axios.post(url, data, { headers });

      // Handle the response or perform any necessary actions
      if (response.data.status) {
        toast.success('You have successfully subscribed', {
          position: toast.POSITION.TOP_CENTER,
          // Add any other desired options or styling properties here
        });
        this.setState({ buttonClicked: true ,});
      }
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occurred during the request
      //const msgShow = error.response.data.message
      this.setState({ apiStatus: true });
    }
  };

  subBtnTriggered = async (e) => {
    const { email, isValidEmail } = this.state;
    e.preventDefault();
    if (isValidEmail) {
      this.postUserData();
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClick = () => {
    const button = document.getElementById('button');
    button.classList.add('onclic');

    setTimeout(() => {
      button.classList.remove('onclic');
      button.classList.add('validate');

      setTimeout(() => {
        button.classList.remove('validate');
        this.setState({buttonClicked: false})
      }, 1850);
    }, 2000);
  };

  render() {
    const {
      email,
      isValidEmail,
      buttonClicked,
      apiStatus,
      checkboxActive,
      isModalOpen,
    } = this.state;

    const sample = buttonClicked === true && isValidEmail === true
    console.log(sample)
    return (
      <>
        <section
          className="section background-cover-right opt120 spdb "
          style={{ backgroundImage: 'url(/assets/images/hcs-02.png)' }}
        >
          <div className="container ">
            <div className="row flex-align-c">
              <div className="col-lg-6">
                <div className="heading mb32">
                  <h2 className="heading-title size-xl">
                    We care for<br /> what{' '}
                    <span className="color-navy no-underline">You Share</span>
                  </h2>
                  <div className="heading-desc">
                    We handle your sensitive data with the highest level of care, using advanced
                    security protocols and regularly auditing our processes.
                  </div>
                </div>
                <div>
                  <form onSubmit={this.subBtnTriggered}>
                    <input
                      type="email"
                      onChange={this.getUserEmail}
                      value={email}
                      className="email"
                      placeholder="Enter Your E-mail"
                    />

                    {sample ?(
                      <>
                      <button id="button" onClick={this.handleClick}>
                      
                    </button>
                      <ToastContainer className="Toastify__toast-container" />
                    </>
                    ):(
                      <>
                      <button id="button" onClick={this.handleClick} disabled>
                    
                    </button>
                      
                    </>
                    )}
                  </form>

                  {isValidEmail === false && <p className='privacy-text-pad'>Please enter a valid email address.</p>}
                  {apiStatus && <p className='privacy-text-pad'>Email already exists</p>}
                </div>
                <div className="my-checkbox-container">
                  <p className='privacy-text-pad' > Your privacy matters to us, and we are committed to safeguarding your personal information with utmost care and security. <span className='privacy-text' onClick={this.openModal}>Privacy Policy</span></p>
                </div>
              </div>
              <div className="col-lg-6">
              <div className="col-lg-6">
                <img className="img-jump side-image" src="https://img.freepik.com/free-vector/woman-sending-resume-via-mail_74855-6719.jpg?w=1480&t=st=1686803369~exp=1686803969~hmac=ea311f5360115b56bea93aaac6c6468038d826527c8df948bde709f2bddf82f6" alt="pic"/>
              </div>
              </div>
            
            </div>
          </div>
        </section>

        {/* <button onClick={this.openModal}>Open Modal</button> */}
        

        <ReactModal isOpen={isModalOpen} onRequestClose={this.closeModal}>
        <h1>Privacy statement</h1>
            <ul className='unorder-list-data'>
                <li>Information Collection:
                    When you subscribe to our service using the subscription form, we collect your email address. The email address you provide is used solely for the purpose of sending you updates, newsletters, or other relevant information related to our services.</li>
                <li>Consent:
                    By submitting the subscription form and providing your email address, you explicitly consent to the collection, use, and processing of your personal information as described in this Privacy Statement.</li>
                <li>Information Use:
                    We use your email address to deliver the requested content or information and to keep you informed about our products, services, or promotional offers. We may also use your email address to improve our services or customize the content based on your preferences.</li>
                <li>Information Sharing:
                    We do not sell, trade, or otherwise transfer your email address to third parties without your consent, except as required by law or with explicit consent. We may share your email address with trusted service providers who assist us in managing our subscriptions and delivering content to you.</li>
                <li>Data Security:
                    We implement appropriate technical and organizational measures to protect the personal information we collect and maintain. We use industry-standard security protocols to safeguard your email address and ensure its confidentiality. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</li>
            </ul>
          <button className='close-my-btn' onClick={this.closeModal}>Close</button>
        </ReactModal>
      </>
    );
  }
}

export default Chat_Service_Section1;


{/* <div className="col-lg-6">
                <div className="images lg-mt32 layout-03">
                  <div className="inner">
                    <img className="img01   img-jump" src="/assets/images/hcs-01.png" alt="Image" />
                    <img className="img21" src="/assets/images/hcs-03.png" alt="Image" />
                    <img className="img22" src="/assets/images/hcs-04.png" alt="Image" />
                  </div>
                </div>
              </div> */}


              // {isValidEmail ? (
              //   <>
              //     <button className={buttonClicked ? 'active' : undefined}>
              //       <p>{buttonClicked ? 'THANKS' : 'SUBSCRIBE'}</p>
              //       <div className="checked">
              //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              //           <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
              //         </svg>
              //       </div>
              //     </button>
              //     <ToastContainer className="Toastify__toast-container" />
              //   </>
              // ) : (
              //   <button className="disableBtn" disabled>
              //     <p>{isValidEmail ? 'THANKS' : 'SUBSCRIBE'}</p>
              //     <div className="checked">
              //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              //         <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
              //       </svg>
              //     </div>
              //   </button>
              // )}