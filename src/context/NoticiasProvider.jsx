import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://api.mediastack.com/v1/news?access_key=3120efc858f8a846d907c8e3966e2f29
      `;
      const { data } = await axios(url);
      setNoticias(data.data);
      setTotalNoticias(data.pagination.total);
      setPagina(1);
    };
    consultarAPI();
  }, [categoria]);

  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const url = `https://newsapi.org/v2/top-headlines?country=ar&pageSize=9&page=${pagina}&category=${categoria}&apiKey=${
  //       import.meta.env.VITE_API_KEY
  //     }`;

  //     const { data } = await axios(url);
  //     setNoticias(data.articles);
  //     setTotalNoticias(data.totalResults);
  //   };
  //   consultarAPI();
  // }, [pagina]);

  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const url = `https://newsapi.org/v2/everything?q=${busqueda}&pageSize=9&apiKey=${
  //       import.meta.env.VITE_API_KEY
  //     }`;
  //     const { data } = await axios(url);
  //     setNoticias(data.articles);
  //     setTotalNoticias(data.totalResults);
  //     setPagina(1);
  //   };
  //   if (busqueda.length > 1) {
  //     consultarAPI();
  //   }
  // }, [busqueda]);

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePagina = (e, valor) => {
    setPagina(valor);
  };

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina,
        busqueda,
        setBusqueda,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
};

export { NoticiasProvider };

export default NoticiasContext;
