import { getTokens } from "./api";

export const fetchTokens = async (patientId, locationId) => {
  console.log("Fetching in fetchToken", locationId);
  try {
    const data = await getTokens(locationId);

    let filteredTokens = data
      .filter((item) => item.status === "active")
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6);

    const activetoken = filteredTokens.map((item) => ({
      id: item.id,
      roomNo: item.room,
      tokenNo: item.token_no,
      updatedAt: item.updated_at,
      currentPatientId: item.patient_id,
    }));
    const filteredToken = activetoken.filter(
      (item) => item.currentPatientId === patientId
    );

    console.log(filteredToken)

    if (filteredToken.length > 0) {
      console.log(filteredToken[0])
      speakTokenNumber(filteredToken[0]);
    } else {
      return [];;
    }
  } catch (error) {
    console.error("Error Fetching Token:", error);
  } 
};

export const speakTokenNumber = (data) => {
  // const speakToken = Object.assign(data.map((item) => item.tokenNo));
  // const roomNo = Object.assign(data.map((item) => item.roomNo));
  const { tokenNo, roomNo } = data;
  console.log("speakTokenNumber", tokenNo);
  const speech = new SpeechSynthesisUtterance(
    `Token number ${tokenNo}, please come to room ${roomNo}.`
  );
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
};
