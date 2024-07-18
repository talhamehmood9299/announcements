import { useEffect } from "react";
import Pusher from "pusher-js";
import { usePatientId } from "../context/usePatient";
import { fetchTokens } from "../services";

function PusherFunction() {
  const { setPatientId } = usePatientId();

  useEffect(() => {
    const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
      cluster: "mt1",
    });
    const channel = pusher.subscribe("call-channel");
    channel.bind("call-event", function (data) {
      fetchTokens(data.patient_id);
    });

    return () => {
      pusher.unsubscribe("call-channel");
    };
  }, [setPatientId]);

  return <div></div>;
}

export default PusherFunction;
