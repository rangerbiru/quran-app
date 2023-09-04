import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Surah = () => {
  const [surah, setSurah] = useState("");
  const [audioSurah, setAudioSurah] = useState("");
  const [ayatSurah, setAyatSurah] = useState([]);

  const { id } = useParams();

  const getSurah = async () => {
    try {
      const datas = await axios.get(`https://equran.id/api/v2/surat/${id}`);

      setSurah(datas.data.data);
      setAudioSurah(datas.data.data.audioFull);
      setAyatSurah(datas.data.data.ayat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSurah();
  }, []);

  return (
    <>
      <h2>{surah.nama}</h2>
      <span>{surah.namaLatin}</span>
      <p>{surah.deskripsi}</p>
      <a href={`${audioSurah["01"]}`} target="_blank" rel="noreferrer">
        {audioSurah["01"]}
      </a>{" "}
      <br />
      <a href={`${audioSurah["02"]}`} target="_blank" rel="noreferrer">
        {audioSurah["02"]}
      </a>
      <br />
      <a href={`${audioSurah["03"]}`} target="_blank" rel="noreferrer">
        {audioSurah["03"]}
      </a>
      <br />
      <a href={`${audioSurah["04"]}`} target="_blank" rel="noreferrer">
        {audioSurah["04"]}
      </a>
      {ayatSurah.map((a) => (
        <div className="tes">
          <h2>{a.teksArab}</h2>
          Artinya :<p>{a.teksIndonesia}</p>
        </div>
      ))}
    </>
  );
};

export default Surah;
