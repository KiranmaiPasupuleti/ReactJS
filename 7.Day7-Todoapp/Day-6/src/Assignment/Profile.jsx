import { useEffect, useState } from "react";
import ProfileDisplay from "./ProfileDisplay.jsx";

const Profile = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  function handleGreater() {
  setPageNumber((prev) => Math.min(prev + 1, 4)); // since you only have 4 profiles
}

function handleLess() {
  setPageNumber((prev) => Math.max(prev - 1, 1));
}
    //   `http://localhost:3000/profiles?_limit=${1}&_page=${pageNumber}`

 
  useEffect(() => {
    console.log("page number changed to : " + `${pageNumber}`);
     async function fetchProfilesData() {
    const response = await fetch(`http://localhost:3000/profiles/${pageNumber}`);
    const fetchedData = await response.json();
    setData(fetchedData);
    console.log(fetchedData);
  }
    fetchProfilesData();
  }, [pageNumber]);

  return (
    <div>
      profile page
      <ProfileDisplay
            key={data.id}
            data={data}
          />
      {/* {data.map((eachProfileDetails) => {
        return (
          <ProfileDisplay
            key={eachProfileDetails.id}
            data={eachProfileDetails}
          />
        );
      })} */}
      <div>
        <button onClick={handleLess}>&lt;</button>
        <button onClick={handleGreater}>&gt;</button>
      </div>
    </div>
  );
};

export default Profile;
