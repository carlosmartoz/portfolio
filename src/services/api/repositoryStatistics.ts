// Service
export async function repositoryStatistics(
  owner: string,
  repo: string,
  setStars: React.Dispatch<React.SetStateAction<number>>,
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  // Try and catch
  try {
    // Set loading
    setLoading(true);

    // Response
    const response = await fetch("/api/repositoryStatistics", {
      method: "GET",

      headers: {
        repo: repo,
        owner: owner,
      },
    });

    // Data
    const data = await response.json();

    // Responses
    if (response.ok) {
      // Set loading
      setLoading(false);

      // Set stars
      setStars(data.stargazers_count);
    } else {
      // Set loading
      setLoading(false);

      // Set error
      setError(true);
    }
  } catch (error) {
    // Set loading
    setLoading(false);

    // Set error
    setError(true);
  }
}
