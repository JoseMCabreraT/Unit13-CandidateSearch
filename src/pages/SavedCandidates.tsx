import React, { useEffect, useState } from 'react';
import type Candidates from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [CandidateSearch, setSavedCandidates] = useState<Candidates[]>([]);


  useEffect(() => {
    const CandidateSearch = JSON.parse(
      localStorage.getItem('Candidates') as string
    );
    setSavedCandidates(CandidateSearch);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <button onClick={clearLocalStorage}>Clear Candidates</button>
    </>
  );
};

export default SavedCandidates;
