import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("./data.json");
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};

export default fetchData;
