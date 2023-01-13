import { useState } from "react";
import axios from "axios";

function useMenu() {
  const [backOfficeMenus, setBackOfficeMenus] = useState([]);

  const getBackOfficeMenus = async () => {
    try {
      const results = await axios.get("http://localhost:4000/menu");
      const menu = results.data.data;
      setBackOfficeMenus([...menu]);
    } catch (error) {
      console.log(error);
    }
  };
  return { getBackOfficeMenus, backOfficeMenus };
}

export default useMenu;
