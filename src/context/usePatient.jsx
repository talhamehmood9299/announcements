import { createContext, useContext, useState } from "react";

const PatientIdContext = createContext(null);

export const usePatientId = () => useContext(PatientIdContext);

export const PatientIdProvider = ({ children }) => {
  const [patientId, setPatientId] = useState(null);

  const setPatientIdValue = (value) => {
    setPatientId(value);
  };

  return (
    <PatientIdContext.Provider
      value={{ patientId, setPatientId: setPatientIdValue }}
    >
      {children}
    </PatientIdContext.Provider>
  );
};
