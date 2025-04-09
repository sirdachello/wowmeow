"use client";

import Link from "next/link";
import LittleButton from "./LittleButton";
import styles from "./styles/contactForm.module.css";

export default function ContactForm() {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const privacy = formData.get("privacy");
    const email = formData.get("email");
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    console.log(privacy, email, name, subject, message);
  };

  return (
    <form action="" onSubmit={submitForm}>
      <div className="relative mb-9 flex flex-col gap-[40px]">
        <div className="relative pb-1">
          <label className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className={styles.inputStyling}
            />
          </label>
        </div>
        <div className="relative pb-1">
          <label className={styles.inputWrapper}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className={styles.inputStyling}
            />
          </label>
        </div>
        <div className="relative pb-1">
          <label className={styles.inputWrapper}>
            <select
              name="subject"
              required
              defaultValue={""}
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
        </div>
        <div className="relative pb-1">
          <label className={styles.inputWrapper}>
            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={8}
              className={styles.inputStyling}
            ></textarea>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <label
          className={`${styles.customCheckbox} text-customWhite flex cursor-pointer items-center gap-4 text-(length:--font-sm-plus)`}
        >
          <input type="checkbox" name="privacy" required />
          <div className={styles.checkMark}></div>
          <span>
            I agree to{" "}
            <Link href={"/TOS"} className="text-customYellow hover:underline">
              {" "}
              <br />
              the privacy policy
            </Link>
          </span>
        </label>
        <LittleButton type="submit" text="send" />
      </div>
    </form>
  );
}
