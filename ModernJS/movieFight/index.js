const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com", {
    params: {
      apikey: "39132f6b",
      s: searchTerm,
    },
  });
  console.log(response.data);
};

const input = document.querySelector("input");

const onInput = e => {
  fetchData(e.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
