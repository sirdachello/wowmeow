import styles from "../components/styles/privacystyles.module.css";
import TableOfContentsButton from "../components/TableOfContentsButton";
import { privacyLinks } from "../lib/privacyLinks";

export default function Privacy() {
  return (
    <article className={`${styles.privacyRoot}  text-customBlack 950:px-[70px] 1300:px-[150px] 1900:px-[240px] relative px-[40px] pt-[80px] pb-[100px]`}>
      <h1 className="mb-[45px] text-center text-(length:--font-md) md:text-(length:--font-lg) font-bold uppercase">
        privacy Policy
      </h1>
      <TableOfContentsButton links={privacyLinks}/>
      <div className="relative flex flex-row-reverse justify-between gap-[20px]">
        <aside className="max-950:hidden sticky top-4 h-fit shrink-0 self-start">
          <h3 className="mb-[30px] text-(length:--font-sm-plus) xl:text-(length:--font-md)">
            Table of contents
          </h3>
          <nav role="section-navigation">
            <ol className="list-decimal pl-6 underline max-xl:text-[12px]">
              {privacyLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="max-w-[910px]">
          <p className="mb-[30px] text-(length:--font-sm) font-bold uppercase sm:text-(length:--font-sm-plus) lg:text-(length:--font-md)">
            This Privacy Policy will help you better understand how we collect,
            use, and share your personal information.
          </p>

          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              WowMeow games (or WowMeow, “Company”, “We”, “Us”, “Our”) takes
              your privacy seriously. This Privacy policy (“Privacy policy”)
              explains our data protection policy and describes the types of
              information we may process when you use one or more of our mobile
              applications (the “App”, “our App”) and explains how we and some
              of the companies we cooperate processing that information. When we
              refer to personal data (or personal information) we mean any
              information of any kind relating to an identified or identifiable
              natural person. It is a natural person who can be identified
              directly or indirectly, in particular by reference to an
              identification number or to one or more factors specific to his or
              her physical, physiological, mental, economic, cultural or social
              status. Our Privacy policy applies to all users, and others who
              access the App (“Users”).For the purposes of the GDPR, we are the
              data controller. PLEASE READ THE FOLLOWING PRIVACY POLICY, FOR
              INFORMATION REGARDING THE WAYS YOUR PERSONAL INFORMATION MAY BE
              PROCESSED, CAREFULLY. WHEN YOU USE THE APP YOU ACKNOWLEDGE THAT
              YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS.
              BY ACCESSING OR USING THE APP, YOU AGREE TO PROCESSING OF YOUR
              PERSONAL DATA WHICH IS PROVIDED TO US IN LINE WITH THE TERMS OF
              THIS PRIVACY POLICY.
            </p>
          </section>
          <section id="data-submit">
            <h2>Information that you submit</h2>
            <p>
              We ask for and collect the following personal information about
              you when you use the App. This information is necessary for the
              adequate performance of the contract between you and us. Without
              such information it is impossible to provide complete
              functionality of the App all perform the requested services.
              Authorization and/or Account Information. When you sign up for an
              account, we require certain information such as your email address
              or Facebook ID or Google ID – depending on the App settings.
              Content Information, i.e. photos, pictures, video and audio files,
              documents and other data that you upload using the App. Personal
              Information which you may fill in by yourself when the App is
              designed for tracking your info, storing your records and/or
              managing them for your convenience and upon your explicit request.
            </p>
          </section>
          <section id="data-process">
            <h2>INFORMATION WE PROCESS</h2>
            <p>
              There are two general categories of information we can process.
            </p>
            <p>THE PURPOSES OF PROCESSING YOUR PERSONAL DATA</p>
            <p>
              Our mission is to constantly improve our App and provide you with
              new experiences. As part of this mission, we use your information
              for the following purposes:
            </p>
            <ol className="list-decimal pl-6">
              <li>
                To make our service available. We use information that you
                submit and information that is processed automatically to
                provide you with all requested services.
              </li>
              <li>
                To improve, test and monitor the effectiveness of our App. We
                use information that is processed automatically to better
                understand user behaviour and trends, detect potential outages
                and technical issues, to operate, protect, improve, and optimize
                our App.
              </li>
              <li>
                To provide you with interest-based (behavioural) advertising or
                other targeted content. We may use information that is processed
                automatically for marketing purposes (to show ads that may be of
                interest to you based on your preferences). We provide
                personalized content and information to you, which can include
                online ads or other forms of marketing.
              </li>
              <li>
                To communicate with you. We use the information we have to
                communicate with you through newsletters, i.e. to send you
                marketing notifications, receive your feedback about our App
                experience, and let you know about our policies and terms. We
                also use your information to respond to you when you contact us.
              </li>
              <li>
                To prevent fraud and spam, to enforce of law. We really want our
                App to be free of spam and fraudulent content so that you feel
                safe and free. We may use your information to prevent, detect,
                and investigate fraud, security breaches, potentially prohibited
                or illegal activities, protect our trademarks and enforce our
                Terms of Use.
              </li>
            </ol>
            <p>
              If any new purposes for processing your personal data arise, we
              will let you know we start to process information on that other
              purpose by introducing the corresponding changes to this Privacy
              policy.
            </p>
          </section>
          <section id="data-sharing">
            <h2>SHARING OF YOUR INFORMATION</h2>
            <p>
              We will share your information with third parties only in the ways
              that are described in this Privacy policy. We collect the
              following categories of your personal information and may share it
              to third parties: identifiers, commercial information, internet or
              other electronic network activity information, geolocation data,
              and inferences drawn from these categories. We will not rent or
              sell your personal data to third parties, but we may share your
              information from tools like cookies, log files, and device
              identifiers and location data, with third-party organizations that
              provide automatic data processing technologies for the App. We do
              not control or influence these third parties’ tracking
              technologies or how they may be used.We may also share certain
              information such as cookie data with third-party advertising
              partners. This information allows third-party ad networks, inter
              alia, to deliver targeted advertisements that they believe will be
              of most interest to you. We may use one or more of the following
              third-party advertising services and analytics tools:
            </p>
            <ul className="list-disc pl-6">
              <li>Adjust</li>
              <li>AdMob</li>
              <li>Apple SearchAds</li>
              <li>AppLovin</li>
              <li>AppsFlyer</li>
              <li>Facebook</li>
              <li>Firebase</li>
              <li>Flurry</li>
              <li>Unity</li>
              <li>Fabric</li>
              <li>Google AdWords</li>
              <li>IronSource</li>
              <li>MoPub</li>
              <li>Appcalibre</li>
              <li>OneSignal</li>
              <li>Kochava</li>
              <li>Inmobi</li>
              <li>Ogury</li>
              <li>Startapp</li>
            </ul>
            <p>
              In case you want to learn more about the services and privacy
              options please consult their websites and privacy policies.
            </p>
            <p>
              Our App may contain links to third-party websites/services or you
              may access the App from a third-party site. We are not responsible
              for the privacy practices or the content of these third-party
              sites or services linked to or from our App, including the
              information or content contained within them. We may disclose your
              personal information if it needed for objective reasons, due to
              public interest or in other unforeseen circumstances:
            </p>
            <ol className="list-decimal pl-6">
              <li>as required by law;</li>
              <li>
                when we believe in good faith that disclosure is necessary to
                protect our rights, protect your safety or the safety of others,
                investigate fraud, or respond to a government request;
              </li>
              <li>
                if we are involved in a merger, acquisition, or sale of all or a
                portion of its assets, you will be notified via email and/or a
                prominent notice in our App of any change in ownership or uses
                of your personal information, as well as any choices you may
                have regarding your personal information.
              </li>
            </ol>
          </section>
          <section id="data-transfers">
            <h2>INTERNATIONAL DATA TRANSFERS</h2>
            <p>
              We work in the international space and provide our App to our
              Users around the world.
            </p>
            <p>
              We and third-party organizations that provide automatic data
              processing technologies for the App or our third-party advertising
              partners may transfer the automatically processed information
              across borders and from your country or jurisdiction to other
              countries or jurisdictions around the world.
            </p>
            <p>
              If you are located in the European Union, US or other regions with
              laws governing data processing that may differ from England &
              Wales law, please note that we may transfer information, including
              personal information, to a country and jurisdiction that does not
              have the same data protection laws as in your jurisdiction.
            </p>
            <p>
              This means that your personal information can be transferred to a
              third country, a territory or one or more specified sectors within
              that third country, or to the international organization where
              data protection and confidentiality regulations may not provide
              the same level of protection of a personal data as your country
              does. We try to make sure that the recipient of any personal data
              provides a proper protection of the personal data received, in
              accordance with the current legislation on the protection of such
              information. By using the App, you agree that we may transfer your
              personal data to any third country, a territory or one or more
              specified sectors within that third country, or to the
              international organization.
            </p>
            <p>
              For the purposes of data storage, we recourse to the services of
              the hosting organizations. We take your privacy seriously and,
              therefore, encrypt your personal data before sending it to the
              hosting organizations for the purposes of its storage. Please note
              that we cooperate only with those hosting organizations that have
              passed our security and reliability check.
            </p>
          </section>
          <section id="data-storage-duration">
            <h2>HOW LONG WE USE YOUR PERSONAL DATA</h2>
            <p>
              We generally retain your personal information for as long as is
              necessary for the performance of the contract between you and us
              and to comply with our legal obligations. If you no longer want us
              to use your information that we physically access and store, you
              can request that we erase your personal information and close your
              account.
            </p>
            <p>
              However, some data may still be stored for a certain time period
              if information is necessary to comply with legal obligation
              (taxation, accounting, audit) or in order to maintain safety and
              data backup settings, prevent fraud or other malicious acts.
            </p>
          </section>
          <section id="your-rights">
            <h2>HOW LONG WE USE YOUR PERSONAL DATA</h2>
            <p>
              For the data we store and access you are entitled to address us
              regarding the following issues:
            </p>
            <p>
              Data Access and Portability. You can request copies of your
              personal information held by us.
            </p>
            <p>
              Change or Correct Data. Where you cannot update data by yourself
              through your account, you have the right to ask us to correct
              change, update or rectify your data.
            </p>
            <p>
              Data Retention and Deletion. We generally retain data for as long
              as your account is in existence or as needed to provide the App.
              However, specific retention times can vary based on context of the
              processing we perform and on our legal obligations. You have the
              right to ask us to delete all or some of the personal data we hold
              about you. If you have an account, you can also delete your
              account at any time. We may need to retain some of your personal
              data even after you have closed your account if reasonably
              necessary to comply with our legal obligations, or where we have a
              legitimate interest in doing so (e.g. to prevent fraud and abuse
              and maintain and enhance security).
            </p>
            <p>
              Restriction of Processing. Under certain circumstances, you may
              have the right to limit the ways in which we use your personal
              information.
            </p>
            <p>
              Please bear in mind that we ensure the above mentioned rights only
              with respect to the information that you submit.
            </p>
            <p>
              When your personal information that is processed automatically you
              may object to such processing in some circumstances. Where your
              personal information is processed for direct marketing purposes,
              you may ask to cease processing your data for these direct
              marketing purposes. In order to exercise your right please contact
              the third party services listed in the Section IV of this Privacy
              Policy to learn how you can object to processing your data. Most
              of them have clear instructions on their privacy pages, functional
              API or other options.
            </p>
            <p>
              Please note that you can opt-out of marketing tracking by emailing
              the developer account.
            </p>
          </section>
          <section id="security">
            <h2>SECURITY</h2>
            <p>
              The security of your personal information is important to us. We
              follow generally accepted industry standards to protect the
              personal information submitted to us, both during transmission and
              once we receive it. We take reasonable and appropriate measures to
              protect personal information from loss, misuse and unauthorized
              access, disclosure, alteration and destruction, taking into
              account the risks involved in the processing and the nature of the
              personal information.
            </p>
            <p>
              We implement appropriate technical and organizational measures,
              which are designed to implement data-protection principles, such
              as data minimization, in an effective manner and to integrate the
              necessary safeguards into the processing. We seek your personal
              data to be encrypted with proper and strong encryption algorithms,
              including hashing where possible.
            </p>
            <p>
              Unfortunately, no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. We do our best to
              protect your personal data, nevertheless, we cannot guarantee its
              absolute security. In the event that your personal information is
              compromised as a breach of security, we will promptly notify you
              in compliance with applicable law.
            </p>
          </section>
          <section id="children-privacy">
            <h2>CHILDREN&apos;S PRIVACY</h2>
            <p>
              Our App is not intended for children under the age of 18.
              Therefore, we do not knowingly collect or solicit any personal
              information from children under 18. No one under age 18 may
              provide any personal information to the App. If you are under 18,
              do not use or provide any information on this App or through any
              of its features. Do not provide any information about yourself,
              including your email address. If we learn that we have collected
              personal information from a child under age 18 without
              verification of parental consent, we will erase that information
              as quickly as possible. If you believe that we might have any
              information from or about a child under 18, please contact us.
            </p>
          </section>
          <section id="policy-changes">
            <h2>CHANGES TO THE PRIVACY POLICY</h2>
            <p>This Privacy policy may change from time to time.</p>
            <p>
              Whenever we change this Privacy policy, we will post those changes
              to this Privacy policy and other places that we consider
              appropriate. Additional forms of notice of modifications or
              updates as appropriate under the circumstances may be provided to
              you.
            </p>
          </section>
          <section id="contact-us">
            <h2>HOW TO CONTACT US</h2>
            <p>
              If you have any questions about this Privacy Policy, please feel
              free to contact us at this email:{" "}
              <a className="cursor-pointer underline" href="mailto:info@wow-meow.fun">
                info@wow-meow.fun
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
