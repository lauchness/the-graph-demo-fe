import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BigNumber } from "ethers";
import { useGetTicketsQuery } from "../generated";
import React from "react";

const DENOMINATOR = BigNumber.from("1000000000000000000");

const Home: NextPage = () => {
  const [{ data, fetching }] = useGetTicketsQuery();
  return (
    <div className={styles.container}>
      <Head>
        <title>The Graph Demo</title>
        <meta
          name="description"
          content="Demo app to use The Graph API with URQL Auto-Generated Hooks"
        />
        <link rel="icon" href="/lauchness.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>The Graph Demo</h1>

        <p className={styles.description}>
          Check out this data fetched with auto-generated URQL hooks!
        </p>

        <div className={styles.grid}>
          {fetching && <p>Fetching...</p>}
          {data?.tickets.length
            ? data.tickets.map((ticket) => (
                <div key={ticket.id} className={styles.ticket}>
                  <h3>
                    Ticket #
                    {BigNumber.from(ticket.id).div(DENOMINATOR).toString()}
                  </h3>
                  <h4>Token Purchases:</h4>
                  {ticket.tokenPurchases.map((tokenPurchase) => (
                    <React.Fragment key={tokenPurchase.id}>
                      <div className={styles.token_purchase}>
                        <span>
                          <strong>Amount</strong> -&nbsp;
                          {BigNumber.from(tokenPurchase.amount)
                            .div(DENOMINATOR)
                            .toString()}{" "}
                          ETH
                        </span>
                        <span className={styles.owner}>
                          <strong>Owner</strong> -&nbsp;{tokenPurchase.owner}
                        </span>
                        <span>
                          <strong>At</strong> -&nbsp;
                          {new Date(
                            Number(tokenPurchase.timestamp) * 1000
                          ).toLocaleString()}
                        </span>
                      </div>
                      <hr />
                    </React.Fragment>
                  ))}
                </div>
              ))
            : null}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/lauchness/the-graph-demo-fe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with 💖 by Lauchness
          <span className={styles.logo}>
            <Image
              src="/lauchness.png"
              alt="Lauchness"
              width={32}
              height={32}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
