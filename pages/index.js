import Head from "next/head";
import classnames from "classnames";
import Icon from "../assets/icon.svg";
import Gitcoin from "../assets/gitcoin.svg";
import Github from "../assets/github.svg";
import Meta from "../components/Meta";

export default function Home() {
  const containerStyles =
    "container mt-16 sm:mt-24 px-4 sm:px-0 w-full mx-auto";

  return (
    <div>
      <Head>
        <Meta />
      </Head>

      <main className={classnames(containerStyles)}>
        <header className="flex flex-1 flex-col sm:flex-row py-10 sm:py-20">
          <div className="flex flex-1 flex-col items-start justify-between">
            <div className="mb-10 sm:mb-0">
              <div className="flex flex-row">
                <h1 className="text-5xl text-moon">Tip Party</h1>
                <div className="ml-3">
                  <Icon />
                </div>
              </div>
              <h2 className="text-2xl italic mt-4 text-violet">
                by <span className="font-bold">MOONSHOT COLLECTIVE</span>
              </h2>
            </div>

            {/* Mobile-only video */}
            <div className="sm:hidden flex flex-1 sm:mb-0 shadow-md border border-violet-dark mb-8">
              <video width="100%" controls>
                <source
                  src="/assets/moonshot-tip-party-intro.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>

            {/* Description Text */}
            <div className="mb-10 sm:mb-0">
              <p className="poppins text-2xl text-elder leading-relaxed">
                Send tips to multiple members of your <br />
                community at once with a Tip Party.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://app.tip.party/"
              className="rounded-full poppins bg-violet text-white py-5 px-14"
            >
              <span className="text-xl font-light">Launch App</span>
            </a>
          </div>
          <div className="hidden sm:flex flex-1">
            <video width="100%" controls>
              <source
                src="/assets/moonshot-tip-party-intro.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </header>

        {/* Steps */}
        <section className="flex w-full flex-col py-20 pb-28 border-t border-violet-dark">
          <h2 className="text-3xl text-moon mb-8">How It Works</h2>

          <div className="w-full grid grid-flow-row sm:grid-flow-col gap-4 poppins text-xl text-center text-elder">
            <div className="rounded-sm border border-violet-dark">
              <img
                src="/assets/1.png"
                className="w-8 h-8 mb-2 m-2 absolute"
                alt="Create a tip room"
              />
              <div className="flex flex-col items-center justify-center min-h-features">
                Create a Tip Room with
                <br />a "secret" word
              </div>
            </div>

            <div className="rounded-sm border border-violet-dark">
              <img
                src="/assets/2.png"
                className="w-8 h-8 mb-2 m-2 absolute"
                alt="Invite people"
              />
              <div className="flex flex-col items-center justify-center min-h-features">
                Invite people to join
                <br /> your Tip Room.
              </div>
            </div>

            <div className="rounded-sm border border-violet-dark">
              <img
                src="/assets/3.png"
                className="w-8 h-8 mb-2 m-2 absolute"
                alt="start tipping"
              />
              <div className="flex flex-col items-center justify-center min-h-features">
                Let the Tip party begin!
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="flex w-full flex-col py-20 sm:pb-20 pb-8 border-t border-violet-dark">
          <h2 className="text-3xl text-moon mb-3">FAQs</h2>

          {/* Question: 1 */}
          <div className="flex flex-col w-full text-xl poppins my-8">
            <h3 className="text-violet">
              I want to earn tokens. How do I receive tokens through Tip Party?
            </h3>
            <p className="mt-5 text-elder">
              First, you want to join a Tip Room. You can do this either by
              entering the "secret" word in the home page, or you can directly
              follow a link to the Tip Room. Once in the room, you simply click
              "Sign In", and sign the message with your Ethereum wallet.
            </p>
          </div>
          {/* Question: 2 */}
          <div className="flex flex-col w-full text-xl poppins my-8">
            <h3 className="text-violet">
              I want to distribute tokens. How do I host my own Tip Party?
            </h3>
            <p className="mt-5 text-elder">
              First, click the "Become a distributor" button in order to have
              distributor rights. Once assigned as an "admin", enter a "secret"
              word of your choice in order to load up a unique room. Then invite
              other members by sharing this word with the members you want to
              tip. Once your members have all successfully signed in, you can
              distribute funds in any token of your choice.
            </p>
          </div>

          {/* Question: 3 */}
          <div className="flex flex-col w-full text-xl poppins my-8">
            <h3 className="text-violet">Why did you build Tip.Party?</h3>
            <p className="mt-5 text-elder">
              The Moonshot Collective built it because we wanted to use it
              ourselves. We have many community members from across the Ethereum
              ecosystem, and wanted a universal way to reward engagement in the
              Collective.
            </p>
          </div>

          {/* Question: 4 */}
          <div className="flex flex-col w-full text-xl poppins my-8">
            <h3 className="text-violet">
              I want to use Tip.Party for my own community. Is that cool?
            </h3>
            <p className="mt-5 text-elder">
              Yes aboslutely, please go ahead. After you do, let us know what
              you think.
            </p>
          </div>

          {/* Question: 5 */}
          <div className="flex flex-col w-full text-xl poppins my-8">
            <h3 className="text-violet">
              Where does the 0.01 ETH to ‘become a distributor’ go? Why would I
              want to pay that?
            </h3>
            <p className="mt-5 text-elder">
              You can host your own Tip.Party once you pay the 0.01 ETH fee! All
              funding goes to funding public goods on Gitcoin Grants.
            </p>
          </div>

          {/* Question: 6 */}
          <div className="flex flex-col w-full text-xl poppins my-8">
            <h3 className="text-violet">How can I get in touch?</h3>
            <p className="mt-5 text-elder">
              Join our telegram{" "}
              <a
                className="text-white text-lg"
                href="https://t.me/joinchat/LiCUTmU5-IUyYWZh"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <footer
        className={classnames(
          containerStyles,
          "mt-0 mb-8 sm:mb-20 px-4 sm:px-0 flex flex-row justify-between py-6 sm:py-10 border-t border-violet-dark"
        )}
      >
        <div className="flex poppins text-elder text-xl">
          <a
            className="flex flex-row items-center"
            href="https://gitcoin.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitcoin />
            <span className="ml-2 sm:ml-4">Built by the Gitcoin community</span>
          </a>
        </div>

        <div className="flex">
          <a
            href="https://github.com/moonshotcollective"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </div>
      </footer>
    </div>
  );
}
