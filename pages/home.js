import React from "react";
import styled from "styled-components";

import Link from "next/link";
import Head from "next/head";

import withAnalytics from "~/hocs/withAnalytics";

const LinkWrapper = styled.div`
  display: block;

  a {
    color: #333;
    font-size: 16px;
  }
`;

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <h1>Hello World</h1>
    <img src="/profile.jpg" alt="Profile" width="200" />

    <LinkWrapper>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </LinkWrapper>
  </div>
);

export default withAnalytics()(Home);
