import axios from "axios";

const getData = async (number) => {
  const user = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  console.log(user);
  const post = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + number
  );
  console.log(post);
};

export default getData;
