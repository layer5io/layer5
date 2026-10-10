import React from 'react';

export const useStaticQuery = jest.fn();
export const graphql = jest.fn();
export const Link = jest.fn(({ to, children, ...rest }) => <a href={to} {...rest}>{children}</a>);
export const StaticQuery = jest.fn();
export const Slice = jest.fn();
export const withPrefix = jest.fn((path) => path);
