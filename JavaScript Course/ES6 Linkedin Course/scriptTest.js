// Async Await with Fetch Javascript   ----------------------------------
const githubRequest = async (login) => {
    let response = await fetch(
      `https://api.github.com/users/${login}`
    );
    let json = await response.json();
    let summary = `${json.login}, ${json.id}`;
    console.log(summary);
  };
  
  githubRequest("anksrane");