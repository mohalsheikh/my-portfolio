import { FaAndroid, FaApple } from "react-icons/fa";
import { FiArrowRight, FiHeadphones } from "react-icons/fi";
import Footer from "../components/Footer";
import Seo from "../seo/Seo";
import { PAGE_SEO } from "../seo/seo.config";
import { OFFBEAT_APP_STORE_URL } from "../config/offbeat.json";
import iosQr from "../assets/offbeat/ios-qr.svg";
import offbeatMark from "../assets/offbeat-mark.png";
import dailySong from "../assets/share-daily-song.png";
import campusSound from "../assets/campus-sound.png";
import joinCampus from "../assets/join-campus.png";
import musicProfile from "../assets/music-profile.png";
import "./Download.css";

const features = [
  {
    id: "campus",
    label: "01 / THE CAMPUS SOUND",
    title: "See your school’s sound",
    description: "See what your campus is sharing. Track recaps, top moods, and events around you.",
    image: campusSound,
    alt: "OFFBEAT campus sound: a school’s shared songs, weekly recap, campus moods, and nearby events.",
  },
  {
    id: "join",
    label: "02 / YOUR PEOPLE",
    title: "Join your campus",
    description: "Verify with your school email and unlock a live feed of music from your campus.",
    image: joinCampus,
    alt: "OFFBEAT campus onboarding: verify a school email to join a campus music feed and see its top tracks, artists, and moods.",
  },
  {
    id: "profile",
    label: "03 / YOUR TASTE",
    title: "More than a profile. Your music.",
    description: "Your favorite artist. Your vibe. The songs that define your taste. Give people something to connect with.",
    image: musicProfile,
    alt: "OFFBEAT music profile showing a bio, favorite artist, and Spotify and Apple Music listening links.",
  },
];

export default function Download() {
  return (
    <div className="download-page" id="download">
      <Seo seo={PAGE_SEO.download} />
      <nav className="download-navbar" aria-label="OFFBEAT">
        <div className="download-navbar-inner download-container">
          <a className="download-brand font-display" href="/download" aria-label="OFFBEAT download page">
            OFFBEAT
          </a>
          <div className="download-nav-links">
            <a className="download-nav-app" href="#the-app">The app</a>
            <a href="#campus">Campus</a>
            <a href="#download" aria-current="page">Download</a>
          </div>
        </div>
      </nav>

      <section className="download-hero download-container" aria-labelledby="download-title">
        <header className="download-hero-copy">
          <div className="download-eyebrow">
            <img src={offbeatMark} width="28" height="28" alt="" />
            <span>A MORE MUSICAL CAMPUS</span>
          </div>
          <h1 id="download-title">Get Offbeat</h1>
          <p className="download-subtitle">
            Share a song. See what your friends are listening to.
            <span>Find your people.</span>
          </p>
        </header>

        <div className="download-options">
          <p className="download-note download-note-left" aria-hidden="true">
            Good Music. <br />Better People.
          </p>
          <p className="download-note download-note-right" aria-hidden="true">
            One Song<br />a Day
          </p>

          <article className="download-card download-ios" aria-labelledby="ios-title">
            <div className="download-card-heading">
              <FaApple aria-hidden="true" />
              <h2 id="ios-title">Download on iOS</h2>
            </div>
            <figure className="download-qr">
              <img
                src={iosQr}
                width="196"
                height="196"
                alt="Scan with your iPhone camera to open OFFBEAT in the App Store."
              />
              <figcaption className="download-note">
                Scan to download
                <svg className="download-scan-arrow" viewBox="0 0 44 38" fill="none" aria-hidden="true">
                  <path d="M3 33C25 36 37 23 33 4M25 11l8-8 7 9" />
                </svg>
              </figcaption>
            </figure>
            <a className="download-store-button" href={OFFBEAT_APP_STORE_URL}>
              <span>Open in App Store</span>
              <FiArrowRight aria-hidden="true" />
            </a>
          </article>

          <article className="download-card download-android" aria-labelledby="android-title">
            <div className="download-card-heading">
              <FaAndroid aria-hidden="true" />
              <h2 id="android-title">Android</h2>
            </div>
            <div className="download-unavailable-art" aria-hidden="true">
              <FiHeadphones />
              <span>Still tuning in.</span>
            </div>
            <p className="download-android-status">Coming Soon</p>
          </article>
        </div>
      </section>

      <section className="download-product download-container" id="the-app" aria-labelledby="download-product-title">
        <div className="download-product-copy">
          <p className="download-section-label">THE DAILY DROP</p>
          <h2 id="download-product-title">One song. Every day.</h2>
          <p>Share one song, add your mood, and unlock what your friends are playing.</p>
        </div>
        <div className="download-product-art">
          <img
            className="download-vinyl"
            src={offbeatMark}
            width="512"
            height="512"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
          <figure className="download-preview">
            <img
              src={dailySong}
              width="1086"
              height="1448"
              alt="Share your daily song on OFFBEAT: pick one track, add your mood, and unlock your campus feed by posting your song."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <div className="download-features download-container">
        {features.map((feature) => (
          <section className="download-feature" id={feature.id} aria-labelledby={`${feature.id}-title`} key={feature.id}>
            <div className="download-feature-copy">
              <p className="download-section-label">{feature.label}</p>
              <h2 id={`${feature.id}-title`}>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
            <figure className="download-feature-image">
              <img
                src={feature.image}
                width="1086"
                height="1448"
                alt={feature.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>
        ))}
      </div>
      <Footer variant="offbeat" />
    </div>
  );
}
