import { useParams } from "react-router-dom";
import { useData } from "../hooks/useData";

const data = (): JSX.Element => {
  const { name, id } = useParams();
  const data = useData(name, id);
  console.log(name, id);

  return (
    <>
      {data && !Array.isArray(data) && (
        <div style={{ width: "max-content", margin: "50px auto" }}>
          {"image" in data && (
            <img style={{ borderRadius: "20%" }} src={`${data.image}`} />
          )}
          <ul style={{ listStyle: "none", fontSize: "20px" }}>
            <li>ID: {data.id}</li>
            <li>name: {data.name}</li>
            <li>created: {new Date(data.created).toLocaleString()}</li>
            {"air_date" in data && <li>air_date: {data.air_date}</li>}
            {"episode" in data && <li>episode: {data.episode}</li>}
            {"status" in data && <li>status: {data.status}</li>}
            {"species" in data && <li>species: {data.species}</li>}
            {"type" in data && data.type !== "" && <li>type: {data.type}</li>}
            {"gender" in data && <li>gender: {data.gender}</li>}
            {"dimension" in data && <li>dimension: {data.dimension}</li>}
          </ul>
        </div>
      )}
    </>
  );
};

export default data;
