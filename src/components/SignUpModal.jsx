import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const SignUpModal = () => {
  const [users_name, set_users_name] = useState('');
  const [phone_number, set_phone_number] = useState('');
  const isUsingPhoneNumber = true;
  const useEmailInstead = () =>
  {
    isUsingPhoneNumber = false;
  };

  return (
    <div className="SignUpModal">
      <FontAwesomeIcon icon={faTwitter} className="SignUpTwitterLogo"></FontAwesomeIcon>
      <form>
        <h2>Create your account</h2>
        <input
          type="text"
          required
          placeholder="Name"
          value={users_name}
          onChange={e => set_users_name(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder={isUsingPhoneNumber ? "Phone" : "Email"}
          value={phone_number}
          onChange={e => set_phone_number(e.target.value)}
        />
        <button onClick={useEmailInstead}>Use email instead</button>
      </form>
    </div>
  );
}

export default SignUpModal;