import { createContext, useState } from "react";

const KakeiboContext = createContext();

export const KakeiboProvider = ({ children }) => {
  const [kakeibos, setKakeibos] = useState([]);

  const addKakeibo = (newKakeibo) => {
    setKakeibos([...kakeibos, newKakeibo]);
  };

  const deleteKakeibo = (id) => {
    setKakeibos(kakeibos.filter((k) => k.id !== id));
  };

  return (
    <KakeiboContext.Provider
      value={{ kakeibos, setKakeibos, addKakeibo, deleteKakeibo }}
    >
      {children}
    </KakeiboContext.Provider>
  );
};

export default KakeiboContext;
