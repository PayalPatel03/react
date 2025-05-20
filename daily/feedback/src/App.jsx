import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function App() {
  const [hovered, setHovered] = useState(0);
  const [star, setStar] = useState(0);
  const [feedback, setFeedback] = useState({});
  const [list, setList] = useState([]);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(0);
  };
  const handleDown = () => {
    setStar(0);
  };

    const handleSubmit=(e)=>{
    e.preventDefault();
   
    setList([...list,{...feedback,star :star}]);
    
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-2 mx-auto">
            <h1 className="fw-bold text-secondary">Feedback</h1>
            <form action="" method="post" onSubmit={handleSubmit}>
              {[...Array(5).keys()].map((_, index) => (
                <FaStar
                  key={index}
                  onMouseOver={() => handleHover(index + 1)}
                  onMouseLeave={() => handleLeave(index + 1)}
                  onMouseDown={() => handleDown(index + 1)}
                  color={hovered > index || star > index ? "yellow" : "black"}
                  size={20}
                />
              ))}
              <br />
              <button className="mt-3 btn btn-secondary" type="submit">
                Add
              </button>
            </form>
            <table className=" mt-3 table table-bordered">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Star</th>
                </tr>
              </thead>
              <tbody>
                {
                list.map((val, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      {[...Array(5).keys()].map((_, index) => (
                        <FaStar
                          color={val.star > index ? "yellow" : "gray"}
                          size={"20px"}
                        />
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
