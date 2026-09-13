import { FaAndroid, FaApple } from "react-icons/fa";
import { FiArrowRight, FiHeadphones } from "react-icons/fi";
import Seo from "../seo/Seo";
import { PAGE_SEO } from "../seo/seo.config";
import { OFFBEAT_APP_STORE_URL } from "../config/offbeat.json";
import iosQr from "../assets/offbeat/ios-qr.svg";
import previewSmall from "../assets/offbeat/app-preview-390.webp";
import previewLarge from "../assets/offbeat/app-preview-780.webp";
import "./Download.css";

export default function Download() {
  return (
    <div className="download-page">
      <Seo seo={PAGE_SEO.download} />
      <nav className="download-navbar" aria-label="OFFBEAT">
        <div className="download-navbar-inner mx-auto max-w-6xl px-5 sm:px-8">
          <a className="download-brand" href="/download" aria-label="OFFBEAT download page">
            OFFBEAT
          </a>
          <p className="download-navbar-note">One song. Every day.</p>
          <a className="download-button download-navbar-cta rounded-lg" href={OFFBEAT_APP_STORE_URL}>
            <FaApple aria-hidden="true" />
            Get the app
            <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </nav>
      <section className="download-stage" aria-labelledby="download-title">
        <div className="download-content mx-auto max-w-6xl px-5 sm:px-8">
          <header className="download-hero">
            <p className="download-eyebrow font-mono">A MORE MUSICAL CAMPUS</p>
            <h1 id="download-title">Get Offbeat</h1>
            <p className="download-subtitle">
              Share a song. See what your friends are listening to.
              <span>Find your people.</span>
            </p>
          </header>

          <div className="download-options">
            <p className="download-note download-note-left" aria-hidden="true">
              Good Music.<br />Better People.
            </p>
            <p className="download-note download-note-right" aria-hidden="true">
              One Song<br />a Day
            </p>

            <article className="download-card download-ios" aria-labelledby="ios-title">
              <div className="download-card-heading">
                <FaApple aria-hidden="true" className="download-platform-icon" />
                <h2 id="ios-title">Download on iOS</h2>
              </div>
              <figure className="download-qr">
                <img
                  src={iosQr}
                  width="196"
                  height="196"
                  alt="Scan with your iPhone camera to open OFFBEAT in the App Store."
                />
                <figcaption className="download-note">Scan to download</figcaption>
              </figure>
              <a className="download-button rounded-lg" href={OFFBEAT_APP_STORE_URL}>
                Open in App Store <FiArrowRight aria-hidden="true" />
              </a>
            </article>

            <article className="download-card download-android" aria-labelledby="android-title">
              <div className="download-card-heading">
                <FaAndroid aria-hidden="true" className="download-platform-icon" />
                <h2 id="android-title">Android</h2>
              </div>
              <div className="download-unavailable">
                <div className="download-unavailable-art" aria-hidden="true">
                  <FiHeadphones />
                </div>
                <p>Coming Soon</p>
              </div>
              <button className="download-button rounded-lg" type="button" disabled>
                Coming Soon
              </button>
            </article>
          </div>

          <figure className="download-preview">
            <img
              src={previewSmall}
              srcSet={`${previewSmall} 390w, ${previewLarge} 780w`}
              sizes="(min-width: 640px) 360px, (min-width: 375px) 300px, 280px"
              width="780"
              height="1696"
              alt="OFFBEAT on iPhone: a song in the Friends feed, displayed as a vinyl record with reactions and Spotify and Apple Music listening options."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
