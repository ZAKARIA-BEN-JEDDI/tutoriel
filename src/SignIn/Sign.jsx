import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { GoogleOAuthProvider , GoogleLogin} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

// client id : 1006794321127-55ah51qka93g9dtoodu37oaou5lm2ovl.apps.googleusercontent.com
// Client secret  : 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
export default function Sign() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_czhqt3d', 'template_imead78', form.current, {
        publicKey: 'dp04Gb9KSneA-IyZn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
      <div className="login-root">
      <div className="box-root flex-flex flex-direction--column" style={{ minHeight: '100vh', flexGrow: 1 }}>
        <div className="loginbackground box-background--white padding-top--64">
          <div className="loginbackground-gridContainer">
            <div className="box-root flex-flex" style={{ gridArea: 'top / start / 8 / end' }}>
              <div className="box-root" style={{ backgroundImage: 'linear-gradient(white 0%, rgb(247, 250, 252) 33%)', flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '4 / 2 / auto / 5' }}>
              <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '6 / start / auto / 2' }}>
              <div className="box-root box-background--blue800" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '7 / start / auto / 4' }}>
              <div className="box-root box-background--blue animationLeftRight" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '8 / 4 / auto / 6' }}>
              <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '2 / 15 / auto / end' }}>
              <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '3 / 14 / auto / end' }}>
              <div className="box-root box-background--blue animationRightLeft" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '4 / 17 / auto / 20' }}>
              <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{ flexGrow: 1 }}></div>
            </div>
            <div className="box-root flex-flex" style={{ gridArea: '5 / 14 / auto / 17' }}>
              <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{ flexGrow: 1 }}></div>
            </div>
          </div>
        </div>
        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
          <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Stackfindover</a></h1>
          </div>
          <div className="formbg-outer">
            <div className="formbg">
              <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15">Sign in to your account</span>
                <GoogleOAuthProvider clientId='1006794321127-55ah51qka93g9dtoodu37oaou5lm2ovl.apps.googleusercontent.com'>
                  <GoogleLogin
                    onSuccess={credentialResponse => {
                      const creden = jwtDecode(credentialResponse.credential)
                      console.log(creden.email)
                      console.log(creden.name)
                      console.log(creden.family_name)
                      console.log(creden.given_name)
                      console.log(creden.picture)
                      console.log(creden.sub)
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
              </GoogleOAuthProvider>
              </div>
            </div>
            <div className="footer-link padding-top--24">
              <span>Don't have an account? <a href="#">Sign up</a></span>
              <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span><a href="#">© Stackfindover</a></span>
                <span><a href="#">Contact</a></span>
                <span><a href="#">Privacy & terms</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
  )
}
