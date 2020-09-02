import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRematchDispatch, useSelect } from 'app/hooks/rematch';

import { Button } from 'app/components/Button';

export const HomePage = () => {
  const { increment } = useRematchDispatch(({ Counter: { increment } }) => ({
    increment,
  }));

  const { selectState: count } = useSelect(({ Counter: { selectState } }) => ({
    selectState,
  }));

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
      <Button
        onClick={() => {
          increment(1);
        }}
      >
        increment
      </Button>
    </>
  );
};
