import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Urlcode() {
  const { id } = useParams(); // gets the "id" from /users/:id
 useEffect(() => {
  async function handleRedirect() {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL }/${id}`);
      const data = await response.json();
      if (data.originalUrl) {
        console.log("Redirecting to:", data.originalUrl);
        window.location.href = data.originalUrl; // optional redirect
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }
  handleRedirect();
}, [id]);

  return (
    <></>
  );
}
