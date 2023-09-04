import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [ayat, setAyat] = useState("");

  return (
    <>
      <h2>Masukkan Surah Ke brapa</h2>
      <form>
        <input
          type="number"
          value={ayat}
          onChange={(e) => setAyat(e.target.value)}
        />

        <Link to={`/surah/${ayat}`}>Simpan</Link>
      </form>
    </>
  );
};

export default Home;
