import React, { useEffect, useState } from 'react';

type Props = {};

export const Test = (props: Props) => {
  const [data, setData] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return (
    <div>Test</div>
  );
};
