import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please complete the reCAPTCHA!");
      return;
    }
    alert("Form submitted successfully");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-2xl bg-base-100 p-8 rounded-2xl shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">
                <span className="label-text font-medium">Name*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-medium">Email*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Phone*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="label">
              <span className="label-text font-medium">Message*</span>
            </label>
            <textarea
              placeholder="Write your message here"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-start">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your site key
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-yellow-700 hover:bg-yellow-800 text-white px-8"
            >
              Send Message 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
