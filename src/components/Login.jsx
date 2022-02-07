import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter, faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

const Login = () =>
{
  return (
    <div className="Login">
      <FontAwesomeIcon icon={faTwitter} className='twitter'></FontAwesomeIcon><br/><br/>
      <h1 className="login-title">Happening now</h1>
      <h3 className="login-info">Join Twitter today.</h3>
      <div className="options">
        <button><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Sign up with Google</button>
        <button><FontAwesomeIcon icon={faApple}></FontAwesomeIcon> Sign up with Apple</button>
      </div>
      <div className="strike">
        <span>or</span>
      </div>
      <button  className="sign-up-button">Sign up with phone or email</button>
      <p className="agreements">By signing up, you agree to the <a href="/tos">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>, including <a href="/cookiepolicy">Cookie Policy</a></p>
      <h4>Already have an account?</h4>
      <button className="sign-in-button">Sign in</button>
    </div>
  );
}

export default Login;