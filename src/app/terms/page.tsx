import Link from "next/link";
import "../components/styles/privacystyles.css";
import TableOfContentsButton from "../components/TableOfContentsButton";
import { termsLinks } from "../lib/termsLinks";

export default function Privacy() {
  return (
    <article className="bg-customWhite text-customBlack 950:px-[70px] 1300:px-[150px] 1900:px-[240px] relative px-[40px] pt-[80px] pb-[100px]">
      <h1 className="mb-[45px] text-center text-(length:--font-md) font-bold uppercase md:text-(length:--font-lg)">
        Terms and Conditions
      </h1>
      <TableOfContentsButton links={termsLinks} />
      <div className="relative flex flex-row-reverse justify-between gap-[20px]">
        <aside className="max-950:hidden sticky top-4 h-fit shrink-0 self-start">
          <h3 className="mb-[30px] text-(length:--font-sm-plus) xl:text-(length:--font-md)">
            Table of contents
          </h3>
          <nav role="section-navigation">
            <ol className="list-decimal pl-6 underline max-xl:text-[12px]">
              {termsLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="max-w-[910px]">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>
              We are wowmeow games (or wowmeow, “company”, “we”, “us”, “our”).
            </p>
            <p>
              These terms and conditions (hereinafter referred to as the
              “terms”) set forth the legally terms and conditions which are
              applicable to any kind of your use of our services including but
              not limited to games, applications and any other products,
              provided via computers, mobile devices, tablets and otherwise.
            </p>
            <p>
              Please note that this terms defines the rights and
              responsibilities, that you have to follow. By downloading,
              installing, playing, using or accessing our services in any other
              way you confirm that you read, understood and accepted this terms,
              our{" "}
              <Link
                href={"/privacy"}
                className="text-customYellow-highlight underline"
              >
                privacy policy
              </Link>{" "}
              and any other documents, mentioned in this terms.
            </p>
            <p>
              For that reason if you do not understand and/or accept any part of
              this terms, please, do not install, use, access or download any of
              our services.
            </p>
            <p>
              We will update this terms with new amendments from time to time.
              In this case you will be noticed via available communication
              channel (e.g. Message in games). If you continue to use the
              following service this will mean that you accepted updated terms
              and all its amendments. If you do not agree with any amendment we
              have made you have to stop using any of our services immediately
              and delete any copy of them from your devices.
            </p>
            <p>
              You guarantee that you are at least 18 years old and have all
              rights and capacity to accept these terms and to follow them.
            </p>
          </section>
          <section id="terms-limitations">
            <h2>License terms and limitations</h2>
            <p>
              With your acceptance of terms, but without prejudice to any other
              terms in this agreement we grant you a personal, revocable,
              limited, non-exclusive, non-transferable and non-assignable /
              non-sublicensable license to access, download and use the services
              on devices you own exceptionally for personal and entertainment
              use without any commercial intentions. Following this terms all
              rights which wasn’t explicitly granted to you are reserved by us
              and to our benefit.
            </p>
            <p>
              You accept that in any case we own all rights, titles, interests
              and trademarks related to the service, including but not limited
              to all intellectual rights therein, and our ownership of service
              cannot be alienated from us by any of your actions such as
              downloading, installing, using or accessing of any of our
              services. By accepting this terms you oblige not to erase,
              transform or change any of our copyrights, trademarks or other
              rights, which can be represented in our services.
            </p>
            <p>
              We take no obligation to make any updates or upgrades to service
              on any particular basis. Please notice that we reserve our right
              to make updates, upgrades and provide specific content at our
              discretion. Also we can disable access to any part of service or
              to the service entirely on constant or periodic basis without any
              notice. You accept that older versions of our services could
              upgrade or update automatically, and agree that these terms will
              apply to all of updated or upgraded versions of services unless
              otherwise specified by us.
            </p>
            <p>
              Service can be unavailable in specific regions or at particular
              time. You accept that we take no liability to you due to the fact
              of service unavailability.
            </p>
          </section>
          <section id="purchases">
            <h2>Purchases and in-game currency</h2>
            <p>
              Some options in our services could be provided on a paid basis.
              These options can be represented either a direct purchase that
              modifies some aspect of service logic or the purchase of a special
              game currency, which can be used by you to purchase some options
              separately.
            </p>
            <p>
              We reserve the right to determine the current prices for all
              possible options within the services and change them at any time
              without prior notice. Despite the fact that any of these purchases
              are made with real money, they don’t have any monetary or
              commercial cost and are not considered as a subject to any kind of
              payments. All paid and free features of services or its parts are
              provided to you on a limited, non-transferable, refundable,
              non-sublicensable and limited basis for entertainment purposes
              only, without yours intention of making a profit.
            </p>
            <p>
              You are personally responsible for all payments you make and
              guarantee that you have all rights and capacity to process the
              payments you make. By purchasing individual options within the
              game or in-game currency, you confirm and agree that payments are
              made in real time and therefore do not have a right and an option
              to withdraw or chargeback payment.
            </p>
            <p>
              All options and in-game currency are paid in advance, on a
              non-refundable basis. Please note that we are not responsible for
              the loss, damage or misuse of in-game currency, as well as any
              actions that led to such a result – in particular, misuse or
              untimely interruption of the services. We reserve the right to
              change the order of functioning, manage, change, reset and
              completely delete both individual user accounts and in-game
              currency in general. By exercising this right, we are not liable
              to you or to any third party.
            </p>
            <p>
              Subject to these provisions, you are advised that we are not
              obligated to make any form of return for any reason. You are also
              aware of and agree that all in-game currency in the account, as
              well as all purchases, will be canceled if you suspend, delete or
              lose access to the services on your part, regardless of whether
              the termination or suspension of access was voluntary or
              involuntary, or this situation arose due to the termination of the
              provision of services through the service on our part.
            </p>
          </section>
          <section id="third-party">
            <h2>Third-party platforms</h2>
            <p>
              In connection with the need for the correct operation of our
              services, we integrate solutions from third parties. We are not
              responsible or liable for any services provided by third parties,
              display of content or advertising. As the privacy policy of third
              parties is different from ours, you agree that you have read and
              accepted their privacy policy in advance of using our services.
            </p>
            <p>
              You agree that we are not responsible for any direct or indirect
              liability arising from any direct or indirect actions of third
              parties and resulting in any form of losses, harm or damage. In
              connection with the foregoing, we are not obliged to involve third
              parties in compensation for the damage caused. You accept that in
              this case you will try to resolve such situations on your own.
            </p>
          </section>
          <section id="prohibited-actions">
            <h2>Prohibited actions</h2>
            <p>
              This agreement expressly prohibits the following actions in
              connection with your use of our services:
            </p>
            <ul className="list-disc pl-6">
              <li>posing as another person;</li>
              <li>access and use of the services for illegal purposes;</li>
              <li>
                downloading, transferring, providing access to information,
                content or any other form of data that can lead to a violation
                of property, intellectual or any other rights, or to any other
                illegal action;
              </li>
              <li>transmission of any malicious code or viruses;</li>
              <li>
                any manipulations that can lead to non-standard behavior of the
                services and / or not provided by the designed functionality, as
                well as reverse engineering of both individual parts of the
                services and the services as a whole;
              </li>
              <li>
                using non-standard ways of interacting with the services to
                obtain commercial benefits or advantages within the services,
                which are not provided by standard algorithms;
              </li>
              <li>
                use of any automated systems, software systems and applications
                that disrupt the functioning of the services and / or could give
                benefits that are not provided by the standard algorithms;
              </li>
              <li>
                dissemination of information about possible errors, bugs and
                other undocumented capabilities of the services, which may lead
                to disruption of the functioning of the services and / or
                obtaining benefits that are not provided by standard algorithms;
              </li>
              <li>copyright infringement.</li>
            </ul>
          </section>
          <section id="warranty">
            <h2>Disclaimer of warranty</h2>
            <p>
              You understand and agree that our services and applications are
              provided on the basis of “as is“ and “as available“, including all
              possible disadvantages, faults and errors. Your access to the
              services is provided at your sole risk. We do not warrant and
              exclude all liability as to the completeness, timeliness, safety,
              reliability, quality and accuracy of our services, in specific
              parts and the content thereof is included.
            </p>
            <p>
              In connection with these, you agree that we do not assume any
              responsibility for possible harm or damage, system errors, loss of
              any data in relation to accessing or using our services. You also
              agree that we are not responsible for the storage, provision and
              transfer of any data or content related to the operation of our
              services. We do not guarantee that the services will be provided
              on a permanent, error-free and continuous basis, or meet your
              performance and requirements. Likewise, we are not responsible for
              any property damage arising from the use of our services or any
              parts thereof, or arising out as a result of unauthorized or
              illegal actions took by third parties.
            </p>
            <p>
              No statements received from company representatives or inside the
              services, in oral, written, express or implicable form, do not
              create a basis to obligate us to make any warranties.
            </p>
          </section>
          <section id="liability">
            <h2>Limitation of liability</h2>
            <p>
              In the broadests sense, to the fullest extent permitted by law,
              we, our subsidiaries, affiliates, officers, employees, agents,
              partners and licensors can not be responsible for any loss, harm,
              damage, personal injury, or any direct, indirect, incidental,
              special, intentional, reliance, exemplary, consequential or
              punitive damage, or any other damage (including but not limited to
              injury, loss of income, business, revenue, lost profitability,
              loss of performance, loss of privacy, loss of goodwill,
              deterioration of health or mental state), arised for the reason
              of: accessing or inability to access our services; content
              supplied by third parties we cooperate with, including but not
              limited to advertising networks, analytics systems, payment
              systems and our users; content obtained in the during of use of
              both our services in general, and of their separate parts;
              unauthorized access, use or alteration of materials or content
              based on warranty, contract, tort (including negligence),
              regardless of whether we have expected about the possibility of
              such consequences and damages or could not suppose.
            </p>
            <p>
              Please note that we will under no circumstances be liable for any
              possible damages, claims, expenses, costs, or liabilities which
              could arise and you may encounter due to your access and use of
              any services and content, provided by us or our cooperating third
              parties. You waive and release wowmeow games, our subsidiaries,
              affiliates, officers, employees, agents, partners and licensors
              from any responsibility or liability arising or related to the
              facts of use of our services and any of our products.
            </p>
          </section>
          <section id="indemnity">
            <h2>Indemnity</h2>
            <p>
              In the broadests sense, to the fullest extent permitted by the
              applicable law, you agree to defend, indemnify and hold wowmeow
              games, our subsidiaries, affiliates, officers, employees, agents,
              partners and licensors harmless from any third party expenses,
              damage costs, suits, fees, liabilities and responsibilities
              arising as a result of your explicit use or implicit consequences
              of use of our services or our products, or as a result of actual,
              alleged or implied violation of this terms, or any kind of
              infringement and intellectual, property or other rights violation
              made by you or third parties.
            </p>
          </section>
          <section id="waiver">
            <h2>Waiver of rights</h2>
            <p>
              If we fail to exercise any of our rights set forth in this terms
              this doesn't set any basis to waive such rights in future. Any
              rights can be only waived by us only if we declare such waiving in
              written form signed by us.
            </p>
          </section>
          <section id="suspension-termination">
            <h2>Suspension or termination of user account</h2>
            <p>
              Please notice, that we reserve the right to terminate providing
              services or any part of it to any user without any noticing and in
              our sole discretion at any time. This means, that we may suspend
              or discontinue your access to our services in our sole discretion.
              You accept that we are not obliged to make any refunds or provide
              any compensation to you in case of such suspension,
              discontinuation or termination. Any kind of suspension,
              termination or discontinuation does not set any basis to waive any
              kind of our rights set forth in this terms.
            </p>
            <p>
              Please note, that we do not provide any kind of refunds and
              compensations if your access to our services was revoked,
              suspended or terminated.
            </p>
          </section>
          <section id="contacts">
            <h2>Contact</h2>
            <p>
              If you have any questions regarding this terms feel free to
              contact us via e-mail{" "}
              <a
                className="cursor-pointer underline"
                href="mailto:info@wow-meow.fun"
              >
                info@wow-meow.fun
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
