import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState(1);
  const [totalNoticias, setTotalNoticias] = useState(0);

  // const options = {
  //   method: "GET",
  //   url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  //   params: {
  //     pageNumber: "1",
  //     pageSize: "10",
  //     withThumbnails: "false",
  //     location: "us",
  //   },
  //   headers: {
  //     "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  //     "X-RapidAPI-Key": "d05773b8ddmsh6957041315b86a0p125a35jsn81d6227b7196",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI",
  //     params: {
  //       pageNumber: "1",
  //       pageSize: "10",
  //       withThumbnails: "false",
  //       location: "us",
  //     },
  //     headers: {
  //       "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  //       "X-RapidAPI-Key": "d05773b8ddmsh6957041315b86a0p125a35jsn81d6227b7196",
  //     },
  //   };
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       // console.log(response.data.value);
  //       const data = response.data.value;
  //       console.log(data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [categoria]);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=8d5c01130be75737905819a7317547e3&language=en-US&page=1`;
      const img = `https://api.themoviedb.org/3/movie/634649/images?api_key=8d5c01130be75737905819a7317547e3&language=en-US`;
      const { data } = await axios(url);
      const { imgdata } = await axios(img);

      console.log(imgdata);
      // setNoticias(data.articles);
      // setTotalNoticias(data.totalResults);
      // setPagina(1);
    };
    consultarAPI();
  }, []);
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?pageSize=9&country=ar&category=${categoria}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(url);
      setNoticias(data.articles);
      setTotalNoticias(data.totalResults);
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
