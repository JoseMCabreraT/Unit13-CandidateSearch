import React, { useEffect, useState } from 'react';
import type Candidates from '../utils/Candidate.interface';

const SavedCandidates = () => {
  const clearLocalStorage = () => {
    localStorage.removeItem('candidates');
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <button onClick={clearLocalStorage}>Clear Candidates</button>
    </>
  );
};

export default SavedCandidates;
