import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={250}
      height={500}
      viewBox="0 0 250 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="240" height="240" />
      <rect x="245" y="205" rx="0" ry="0" width="0" height="1" />
      <rect x="5" y="251" rx="0" ry="0" width="229" height="30" />
      <rect x="16" y="333" rx="0" ry="0" width="207" height="14" />
      <rect x="1" y="283" rx="0" ry="0" width="238" height="47" />
      <rect x="217" y="324" rx="0" ry="0" width="3" height="1" />
      <rect x="115" y="355" rx="0" ry="0" width="126" height="27" />
      <rect x="114" y="386" rx="0" ry="0" width="126" height="27" />
      <circle cx="54" cy="383" r="19" />
    </ContentLoader>
  );
}

export default Skeleton;
