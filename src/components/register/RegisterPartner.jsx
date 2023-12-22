import "./register.css";
import { frozen1, hotMeal1, hotMeal3 } from "../ImagesImport";
import { useState } from "react";

const RegisterPartner = ({onHandleRegisterPartner}) => {
  //state to manage form data
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    companyDes: "",
    companyName: "",
    address: "",
    password: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    onHandleRegisterPartner(formData);
  };


  return (
    <div className="black-form">
      <h3>
        <span className="member-text">Partner Registration</span>{" "}
      </h3>
      <h5>Welcome to be 🥰 partnership with us🙌!</h5>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter name who Own your Org.."
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          placeholder="Enter your Company Name.."
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter company email.."
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="password"
          value={ formData.password}
          onChange={handleInputChange}
          placeholder="Type of Business.."
          required
        />
        <textarea
          type="textarea"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address..."
          required
        />
        <textarea
          type="textarea"
          name="companyDes"
          value={formData.companyDes}
          placeholder="Describe the mission and objectives of your organization..."
          onChange={handleInputChange}
          required
        />
        <textarea
          type="textarea"
          name="orgActivity"
          placeholder="Provide an overview of your organization's primary programs and activities..."
          required
        />
        <button className="btn form-btn black">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPartner;
