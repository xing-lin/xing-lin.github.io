import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ComponentsStorybookPage() {
  const src = useBaseUrl('/storybook-static/');

  return (
    <iframe
      src={src}
      title="Storybook"
      style={{ width: '100%', height: '100vh', border: 0 }}
    />
  );
}
