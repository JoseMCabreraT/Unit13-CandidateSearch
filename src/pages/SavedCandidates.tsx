import React, { useEffect, useState } from 'react';
import type Candidate from '../interfaces/Candidate.interface'; //We can use the Candidates interface here.

const SavedCandidates = () => {
  const [CandidateSearch, setSavedCandidates] = useState<Candidate[]>([]);


  useEffect(() => {
    const CandidateSearch = JSON.parse(
      localStorage.getItem('Candidates') as string
    );
    setSavedCandidates(CandidateSearch);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      
    </>
  );
};

export default SavedCandidates;
