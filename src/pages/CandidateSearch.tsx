import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface'; //We can use the Candidates interface here.

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
 // const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      
        const result = await searchGithub();
        setCandidates(result)
        
       /* await Promise.all(
          result.map(async (candidate: Candidate) => {
            const singleCandidate = await searchGithubUser(candidate.login);
            setCandidates(singleCandidate);
            

          })
        )*/

       
      
    };

    fetchCandidates();
    console.log(candidates);

  }, []);


  return (
    <div>
      <h1>Candidate Search</h1>
      
    <div>
      <h2></h2>
    </div>
    </div>
  );
};

export default CandidateSearch;
