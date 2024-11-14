import { useState, useEffect } from "react";

export default function Timer() {
  const date = new Date();

  const [seconde, setSeconde] = useState(date.getSeconds());
  const [minute, setMinute] = useState(date.getMinutes());
  const [hour, setHour] = useState(date.getHours());

  // Utilisation d'un intervalle pour incrémenter les secondes automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconde((prev) => {
        if (prev === 59) {
          // Passer à 0 et incrémenter les minutes
          setMinute((prevMinute) => {
            if (prevMinute === 59) {
              // Passer à 0 et incrémenter les heures
              setHour((prevHour) => (prevHour + 1) % 24); // Retour à 0 après 23h
              return 0;
            }
            return prevMinute + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000); // Intervalle d'une seconde

    // Nettoyage de l'intervalle pour éviter des fuites de mémoire
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hour} heure <br />
      {minute} minute <br />
      {seconde} seconde <br />

      {/* Bouton pour incrémenter manuellement */}
      <button
        onClick={() => {
          if (seconde === 59) {
            setSeconde(0);
            setMinute((prev) => prev + 1);
            if (minute === 59) {
              setMinute(0);
              setHour((prev) => prev + 1);
            }
          } else {
            setSeconde((prev) => prev + 1);
          }
        }}
      >
        Incrementer
      </button>
      <br />

      {/* Bouton pour décrémenter manuellement */}
      <button
        onClick={() => {
          if (seconde > 0) {
            setSeconde((prev) => prev - 1);
          } else {
            setMinute((prev) => (prev > 0 ? prev - 1 : 0));
          }
        }}
      >
        Decrementer
      </button>
      <br />

      {/* Bouton pour arrêter en remettant à zéro */}
      <button
        onClick={() => {
          setSeconde(0);
          setMinute(0);
          setHour(0);
        }}
      >
        Arreter
      </button>
    </>
  );
}
