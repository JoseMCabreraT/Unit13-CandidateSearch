import { useEffect } from 'react';




const SavedCandidates = () => {
  


  useEffect(() => {
    const CandidateSearch = JSON.parse(
      localStorage.getItem('Candidates') as string
    );
    (CandidateSearch);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      
    </>
  );
};

export default SavedCandidates;

