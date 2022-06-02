

async function getDataFromApi() {
  try {
    let githubResponse = await fetch(
      "https://api.github.com/users/Lorellana21/repos"
    );
    let githubRepos = await githubResponse.json();
    return githubRepos;

    if (!githubResponse.ok)
      throw {
        status: githubResponse.status,
        statusText: githubResponse.statusText,
      };
  } catch (err) {
    
  }
}

export default getDataFromApi;
//https://api.github.com/users/Lorellana21/repos
