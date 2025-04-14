"use client";

import emailjs from "@emailjs/browser";

import styles from "./styles/contactForm.module.css";

import Link from "next/link";
import { useEffect, useState } from "react";

import FormButton from "./FormButton";
import catGamerThumbsUp from "public/images/ContactsPage/catThumbsUp.png";
import catSomethingWentWrong from "public/images/ContactsPage/catSomethingWentWrong.png";
import Image from "next/image";

const EMAIL_VALIDATOR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function ContactForm() {
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    const allFieldsFilled =
      form.email !== "" &&
      form.message !== "" &&
      form.name !== "" &&
      form.subject !== "" &&
      form.privacy === true;

    setFormValid(!hasErrors && allFieldsFilled);
  }, [form, errors]);

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setErrors((prev) => ({ ...prev, email: "This field is required" }));
      return;
    }
    setErrors((prev) => ({
      ...prev,
      email: EMAIL_VALIDATOR.test(e.target.value) ? "" : "Invalid email format",
    }));
  };
  const validateTextInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: "message" | "name",
  ) => {
    const isFilled = !!e.target.value;
    setErrors((prev) => ({
      ...prev,
      [fieldName]: isFilled ? "" : "This field is required",
    }));
  };

  const validateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setErrors((prev) => ({
      ...prev,
      subject: e.target.value ? "" : "This field is required",
    }));
  };

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();

    const templateParams = {
      subject: form.subject,
      email: form.email,
      name: form.name,
      message: form.message,
    };

    emailjs
      .send("service_6waahub", "template_y94b11v", templateParams, {
        publicKey: "48ajjCnYY08MIu_dl",
      })
      .then(
        (response) => {
          setLoading(false);
          setResult("success");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setLoading(false);
          setResult("error");
          console.log("FAILED...", err);
        },
      );
  }

  return (
    <form
      method="post"
      onSubmit={(e) => sendEmail(e)}
      className="relative pb-3"
    >
      {result === "success" && (
        <div className="text-customWhite bg-customBackground absolute z-[20] flex h-full w-full flex-col items-center justify-center gap-8">
          <h3 className="text-center text-(length:--font-md) font-bold uppercase">
            Thank you!
          </h3>
          <Image
            src={catGamerThumbsUp}
            alt="Cat hoding a controller, giving you the thumbs up!"
            className="h-[310px] w-auto"
          />
          <p className="text-center text-(length:--font-sm)">
            Your message has been received. We will contact you shortly.
          </p>
        </div>
      )}
      {result === "error" && (
        <div className="text-customError bg-customBackground absolute z-[20] flex h-full w-full flex-col items-center justify-center gap-8">
          <h3 className="text-center text-(length:--font-md) font-bold uppercase">
            Something went wrong!
          </h3>
          <Image
            src={catSomethingWentWrong}
            alt="Cat hoding a controller, giving you the thumbs up!"
            className="h-[280px] w-auto"
          />
          <p className="text-center text-(length:--font-sm)">
            Please, try again later.
          </p>
        </div>
      )}
      <div
        tabIndex={result !== null ? -1 : 0}
        aria-hidden={result === null ? false : true}
        className={` relative mb-9 flex  flex-col gap-[35px] ${result !== null && "pointer-events-none opacity-0 select-none"}`}
      >
        <div className="relative pb-1">
          <label
            className={`${styles.inputWrapper}  ${errors.email ? `${styles.error}` : ""}`}
          >
            <input
              disabled={loading || result !== null}
              value={form.email}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, email: e.target.value }));
                validateEmail(e);
              }}
              onBlur={(e) => validateEmail(e)}
              type="text"
              name="email"
              placeholder="Your email"
              required
              className={styles.inputStyling}
            />
          </label>
          <p className="text-customError absolute bottom-[-28px] left-2 z-10 text-[14px]">
            {errors.email}
          </p>
        </div>
        <div className="relative pb-1">
          <label
            className={`${styles.inputWrapper} ${errors.name ? `${styles.error}` : ""}`}
          >
            <input
              disabled={loading || result !== null}
              type="text"
              value={form.name}
              onChange={(e) => {
                validateTextInput(e, "name");
                setForm((prev) => ({ ...prev, name: e.target.value }));
              }}
              onBlur={(e) => validateTextInput(e, "name")}
              name="name"
              placeholder="Your full name"
              required
              className={styles.inputStyling}
            />
          </label>
          <p className="text-customError absolute bottom-[-28px] left-2 z-10 text-[14px]">
            {errors.name}
          </p>
        </div>
        <div className="relative pb-1">
          <label
            className={`${styles.inputWrapper} ${errors.subject ? `${styles.error}` : ""}`}
          >
            <select
              disabled={loading || result !== null}
              name="subject"
              value={form.subject}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, subject: e.target.value }))
              }
              onBlur={(e) => validateSelect(e)}
              required
              className={`${styles.inputStyling} ${styles.select}`}
            >
              <option value="" disabled hidden>
                Subject
              </option>
              <option value="job">Job</option>
              <option value="investment">Investment</option>
              <option value="services">Services</option>
              <option value="other">Other</option>
            </select>
          </label>
          <p className="text-customError absolute bottom-[-28px] left-2 z-10 text-[14px]">
            {errors.subject}
          </p>
        </div>
        <div className="relative pb-1">
          <label
            className={`${styles.inputWrapper} ${errors.message ? `${styles.error}` : ""}`}
          >
            <textarea
              disabled={loading || result !== null}
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={(e) => {
                validateTextInput(e, "message");
                setForm((prev) => ({ ...prev, message: e.target.value }));
              }}
              onBlur={(e) => validateTextInput(e, "message")}
              required
              rows={8}
              className={styles.inputStyling}
            ></textarea>
          </label>
          <p className="text-customError absolute bottom-[-28px] left-2 z-10 text-[14px]">
            {errors.message}
          </p>
        </div>
      </div>
      <div
        tabIndex={result !== null ? -1 : 0}
        inert={result === null ? false : true}
        className={`flex items-center justify-between ${result !== null && "pointer-events-none opacity-0 select-none"}`}
      >
        <label
          className={`${styles.customCheckbox} text-customWhite flex cursor-pointer items-center gap-4 max-md:text-[12px] lg:text-(length:--font-sm-plus)`}
        >
          <input
            disabled={loading || result !== null}
            type="checkbox"
            name="privacy"
            required
            tabIndex={0}
            checked={form.privacy}
            onChange={() =>
              setForm((prev) => ({ ...prev, privacy: !prev.privacy }))
            }
          />
          <div className={styles.checkMark}></div>
          <span>
            I agree to{" "}
            <Link
              href={"/privacy"}
              className="text-customYellow hover:underline"
              tabIndex={result !== null ? -1 : 0}
              aria-hidden={result === null ? false : true}
            >
              {" "}
              <br />
              the privacy policy
            </Link>
          </span>
        </label>
        <FormButton disabled={!formValid} loading={loading} />
      </div>
    </form>
  );
}
