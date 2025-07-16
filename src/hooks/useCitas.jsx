import { useEffect, useState } from "react";
import {citas_db} from "../data/citas_db.js";

export default function useCitas() {

  const [listaDeCitas, setListaDeCitas] = useState(() => {
    const guardarCitas = localStorage.getItem("listaDeCitas")
    return guardarCitas ? JSON.parse(guardarCitas) : citas_db;
  });

  const [seleccionarCita, setSeleccionarCita] = useState("");

  const selectCita = (id) => {
    const citaSelect = listaDeCitas.find(cita=> cita.id === id);
    setSeleccionarCita(citaSelect);
  }

  const actualizarCitas = (id, available) => {
    const updatedCitas = listaDeCitas.map(cita => cita.id === id ? {...cita, available} : cita);
    setListaDeCitas(updatedCitas)
  }

  const reservarCita = (id) => {
    actualizarCitas(id, false);
  }

  const cancelarCita = (id) => {
    actualizarCitas(id, true);
  }

  const resetForm = () => {
    setListaDeCitas(citas_db);
    setSeleccionarCita("");
  }

  useEffect(() => {
    localStorage.setItem("listaDeCitas", JSON.stringify(listaDeCitas));
  }, [listaDeCitas])

  return {
    listaDeCitas,
    seleccionarCita,
    selectCita,
    reservarCita,
    cancelarCita,
    resetForm
  };
}
