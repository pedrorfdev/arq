import { createContext, useEffect, useState } from "react";
import { getApiData } from "../services/apiServices";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem("lang");
  const [language, setLanguage] = useState(savedLanguage ?? "br");
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const getTexts = await getApiData("webtext");
        setLanguages(getTexts);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        language,
        languages,
        setLanguage,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
