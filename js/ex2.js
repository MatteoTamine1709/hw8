const lookupButton = document.getElementById("lookup");

lookupButton.addEventListener("click", () => {
  const username = document.getElementById("username");
  const usernameVal = username.value;

  fetch(`https://api.github.com/users/${usernameVal}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const name = document.getElementById("name");
      const blog = document.getElementById("blog");
      const createdAt = document.getElementById("createdAt");

      name.textContent = data.name ? data.name : "N/A";
      blog.textContent = data.blog ? data.blog : "N/A";
      createdAt.textContent = data.created_at ? data.created_at : "N/A";

      const avatar = document.getElementById("avatar");
      avatar.src = data.avatar_url ? data.avatar_url : "";
    })
    .catch((err) => {
      console.log(err);
    });
});
