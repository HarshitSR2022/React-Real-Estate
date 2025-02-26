import React from "react";
import "./Contact.css";
import { motion } from "motion/react";
import { toast } from "react-toastify";

const Contact = () => {
  // Web3 Forms
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "43089c99-5b62-4c51-aee7-1dd47cb43b7d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      id="Contact"
      className="about"
      initial={{opacity:0, y:200}} transition={{duration:1.5}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
    >
      <h1>
        Contact <span>With Us</span>
      </h1>
      <p>
        Ready to Make a Move ? Let's Build Your
        <br /> Future Together
      </p>

      <form onSubmit={onSubmit}>
        <div className="contentt">
          <div className="one">
            <p>Your Name</p>
            <input type="text" name="Name" placeholder="Your Name" required />
          </div>
          <div className="two">
            <p>Your Email</p>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="msg">
          <p>Message</p>
          <textarea
            name="Message"
            placeholder="Enter Your Message"
            required
          ></textarea>
        </div>
        <button className="bkc">{result ? result : "Send Message"}</button>
      </form>
    </motion.div>
  );
};

export default Contact;
