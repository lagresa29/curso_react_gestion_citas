export default function CalendarioCitas({ listaDeCitas, cancelarCita }) {
  return (
    <>
      <div>
        <div className="bg-cyan-300 rounded-lg text-center">
          <h2 className="p-4 m-10 font-bold">Programación de Citas Médicas</h2>
        </div>

        <div className="bg-lime-300 p-4 m2 text-center rounded-lg">
          <h3 className=" font-semibold mb-5">Citas disponibles: </h3>
          {listaDeCitas.map((cita) => (
            <div key={cita.id} className="mb-2 flex justify-center m-2 mb-2">
              <p className="text-gray-700">
                {`${cita.date} - ${cita.time} - ${cita.available ? "(disponible)" : ""}`}
              </p>
              {!cita.available && (
                <button 
                  onClick={() => cancelarCita(cita.id)}
                  className="bg-red-400 text-white px-2 py-1 rounded ml-2">
                  Cancelar
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
