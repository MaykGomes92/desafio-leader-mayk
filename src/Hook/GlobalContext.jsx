import React from "react";
import {api} from "../urlApi"; //

export const GlobalStorage = React.createContext();

export const UserStorage = ({ children }) => {
  const [allData, setAllData] = React.useState([]);
  const [handleStoreId, setHandleStoreId] = React.useState([]);

  async function handleAllData(props) {
    try {
      const response = await api.get(props);
      setAllData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  async function handleStore(props) {
    try {
      const response = await api.get(props);
      setHandleStoreId(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

    React.useEffect(() => {
      handleAllData('/deals')
      handleStore('/stores')
    }, [])

  return (
    <GlobalStorage.Provider
      value={{
        handleAllData,
        allData,
        handleStore,
        handleStoreId
      }}
    >
      {children}
    </GlobalStorage.Provider>
  );
};
