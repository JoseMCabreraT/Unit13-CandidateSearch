import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidates from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidates[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      if (query) {
        const result = await searchGithubUser(query);
        setCandidates(result);
      }
    };

    fetchCandidates();
  }, [query]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for candidates"
      />
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>{candidate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
