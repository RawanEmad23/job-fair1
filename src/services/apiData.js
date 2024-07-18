import axios from "axios";

export async function getData() {
  const { data } = await axios.get("https://rawanemad23.github.io/json2/data.json");

  console.log(data);

  return data;
}
