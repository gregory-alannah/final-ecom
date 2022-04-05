import React from "react";

const Contact = () => {
  return (
    <section className="form-container">
      <section>
        <form action="" className="submit-form">
          <h2 className="contact-request">Want More Information?</h2>
          <section id="error-message"></section>
          <p className="contact-text">
            Please submit the form below for further inquires
          </p>
          <hr className="underline" />
          <br />

          <label for="fullname">Full Name:</label>
          <input type="text" id="fullname" required />
          <br />

          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" required />
          <br />

          <label for="email">Email:</label>
          <input type="email" id="email" required />
          <br />
          <br />
          <label>
            Comment:
            <br />
            <textarea></textarea>
          </label>
          <br />
          <input class="submit-button" type="submit" name="submit" />
        </form>
      </section>
    </section>
  );
};

export default Contact;
