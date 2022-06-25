import Head from "next/head";

import Map from "../components/Map";

import styles from "../../styles/Home.module.css";

// import App from "../components/App";

const DEFAULT_CENTER = [38.907132, -77.036546];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>map baby!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="flex flex-wrap "></div>
        <div className="bg-blue-200">map baby!</div>
        <div className="bg-red-500">right side bar</div>
        <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={15}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  Marcio#6286
                  <br /> is nearby
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made in NYC{" "}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  );
}
