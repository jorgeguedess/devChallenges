import { useState } from "react";
import dataJSON from "../lib/data.json";

const useData = () => {
  const [data] = useState(dataJSON);

  return { data };
};

export default useData;
