'use client';

import React from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Lorenz Llamas - Collections & Account Operations Professional" />
        <title>Lorenz Llamas | Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
