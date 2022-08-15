import React from 'react';
import { createRoot } from 'react-dom/client';

const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
