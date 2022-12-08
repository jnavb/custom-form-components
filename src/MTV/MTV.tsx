import React from 'react';
import { FormComponentProps } from 'src/formTypes';

export const MTV = (props: FormComponentProps) => {
  const { config, payload, onChange } = props;

  return (
    <div style={{ display: 'flex' }}>
      <iframe
        width="315"
        height="270"
        src="https://www.youtube.com/embed/eBGIQ7ZuuiU?controls=0&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eBGIQ7ZuuiU?controls=0&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eBGIQ7ZuuiU?controls=0&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eBGIQ7ZuuiU?controls=0&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
