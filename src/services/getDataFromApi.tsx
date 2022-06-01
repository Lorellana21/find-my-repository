

async function getDataFromApi() {
  try {
    let githubResponse = await fetch(
      "//rickandmortyapi.com/api/character"
    );
    let githubRepos = await githubResponse.json();
    return githubRepos;

    if (!githubResponse.ok)
      throw {
        status: githubResponse.status,
        statusText: githubResponse.statusText,
      };
  } catch (err) {
    console.log(err);
    
  }
}

export default getDataFromApi;
//https://api.github.com/users/Lorellana21/repos
