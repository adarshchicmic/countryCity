export const myFetchGetRequest = async () => {
  const response = await fetch(
    'https://countriesnow.space/api/v0.1/countries/capital',
  );
  const resJSON = await response.json();
  return resJSON;
};

export const myFetchPostRequest = async (data) => {
  const response = await fetch(
    'https://countriesnow.space/api/v0.1/countries/cities',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const resJSONPost = await response.json();
  return resJSONPost;
};
