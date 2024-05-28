// React
import { useState } from "react";

// Services
import { repositoryStatistics } from "@/services/api/repositoryStatistics";

// Hook
export const useRepositoryStatistics = (): [
  number,
  boolean,
  boolean,
  () => void
] => {
  // repository owner
  const owner = "carlosmartoz";

  // repository name
  const repo = "portfolio";

  // Set stars
  const [stars, setStars] = useState<number>(0);

  // Set error
  const [error, setError] = useState<boolean>(false);

  // Set loading
  const [loading, setLoading] = useState<boolean>(false);

  // Function to get repository statistics
  function getRepositoryStatistics() {
    // Service to get repository statistics
    repositoryStatistics(owner, repo, setStars, setError, setLoading);
  }

  return [stars, error, loading, getRepositoryStatistics];
};
