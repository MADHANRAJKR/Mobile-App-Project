/*
 API Service for fetching data
*/

const API_URL = "https://jsonplaceholder.typicode.com/posts";

/*
 Fetch data from API
*/
export const fetchPosts = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("API Error:", error);
    return [];
  }
};

/*
 Fetch a single post by ID
*/
export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API Error:", error);
  }
};
