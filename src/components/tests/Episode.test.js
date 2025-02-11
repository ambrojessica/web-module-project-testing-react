import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
  id: 1,
  image: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
  name: '',
  season: 1,
  number: 1,
  summary: 'testing summary',
  runtime: 1
};

const testEpisodeNoImage = {
  id: 1,
  image: null,
  name: '',
  season: 1,
  number: 1,
  summary: 'testing summary',
  runtime: 1
};

test("renders without error", () => {
  render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={testEpisode} />);

  const summary = screen.queryByText(/testing summary/i);

  expect(summary).toBeInTheDocument();
  expect(summary).toBeTruthy();
  expect(summary).toHaveTextContent('testing summary');
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={testEpisodeNoImage} />);

  const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png');
  // console.log(image);
  expect(image).toBeInTheDocument();
});
