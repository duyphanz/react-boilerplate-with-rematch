import React from 'react';
import { Helmet } from 'react-helmet-async';
import { connect } from 'react-redux';

import { Button } from 'app/components/Button';

function Home({ count, increment }) {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      Counter {count}
      <Button onClick={increment}>increment</Button>
    </>
  );
}

const mapState = state => ({
  count: state.Counter,
});

const mapDispatch = ({ Counter: { increment } }): any => ({
  increment: () => increment(1),
});

export const HomePage = connect(mapState, mapDispatch)(Home);
