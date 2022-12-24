import axios from "axios";

const getData = async (number) => {
  const user = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    console.log(user);
};

export default getData;