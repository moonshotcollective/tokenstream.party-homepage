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
                <h1 className="text-5xl text-moon">TokenStream.Party</h1>
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
                  src=""
                  type="video/mp4"
                ></source>
              </video>
            </div>

            {/* Description Text */}
            <div className="mb-10 sm:mb-0">
              <p className="poppins text-2xl text-elder leading-relaxed">
                Stream tokens to DAO contributors<br/> + be protected if they go MIA <br/>(contributors must claim tokens once a month).
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
                src="/assets/.mp4"
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
                alt="Create a Token Stream"
              />
              <div className="flex flex-col items-center justify-center min-h-features">
                Create a Token Stream
              </div>
            </div>

            <div className="rounded-sm border border-violet-dark">
              <img
                src="/assets/2.png"
                className="w-8 h-8 mb-2 m-2 absolute"
                alt="claim"
              />
              <div className="flex flex-col items-center justify-center min-h-features">
                Contributors must claim <br/>their tokens once a week.
              </div>
            </div>

            <div className="rounded-sm border border-violet-dark">
              <img
                src="/assets/3.png"
                className="w-8 h-8 mb-2 m-2 absolute"
                alt="claim"
              />
              <div className="flex flex-col items-center justify-center min-h-features">
                The stream re-fills everytime the contributor <br/>claims their tokens.  If the contributor goes MIA, <br/>they do not continue to get paid.
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
              Why did you build TokenStream.Party?
            </h3>
            <p className="mt-5 text-elder">
              Moonshot Collective built TokenStream.Party as a means of rewarding our contributors.  We wanted to stream tokens to GitcoinDAO contributors in order to reward them for their contributions, but we wanted downside protection incase the contriburors went MIA.
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
