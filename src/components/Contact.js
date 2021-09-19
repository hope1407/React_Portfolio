import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {

  const email = useState("");
  const name = useState("");

  const form = useRef();

  const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if (inputType !== "email") {

      }
  }
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
    <form className="emailform" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" id="nameemailfield" />
      <label>Email</label>
      <input type="email" name="user_email" id="nameemailfield" />
      <label>Message</label>
      <textarea name="message" id="messagefield" />
      <input type="submit" value="Send" id="sendbtn" onClick={thankyou} />
    </form>
  );
}
