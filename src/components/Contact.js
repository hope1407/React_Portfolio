import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import { validateEmail } from "../utils/helpers";

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requiredField, setRequiredField] = useState("");

  const handleBlur = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "user_name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }

    if (!name || !message) {
      setRequiredField("Please fill out all fields!");
    } else {
      setRequiredField("");
    }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "user_email") {
      setEmail(inputValue);
    }

    if (!validateEmail(inputValue)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
    }
  };

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_bjvev9x",
        "template_x25p72e",
        form.current,
        "user_ROeYO4BAY97S4vmNFYDEO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const thankyou = () => {
    alert("Thanks for the inquiry!  I'll get back to you soon!");
  };

  return (
    <div>
      <form className="emailform" ref={form} onSubmit={sendEmail}>
        <p>{requiredField}</p>
        <label>Name</label>
        <input
          onBlur={handleBlur}
          type="text"
          name="user_name"
          id="nameemailfield"
        />
        <label>Email</label>
        <input
          value={email}
          onBlur={handleBlur}
          onChange={handleInputChange}
          type="email"
          name="user_email"
          id="nameemailfield"
        />
        <p>{errorMessage}</p>
        <label>Message</label>
        <textarea onBlur={handleBlur} name="message" id="messagefield" />
        <input type="submit" value="Send" id="sendbtn" onClick={thankyou} />
      </form>
    </div>
  );
}
