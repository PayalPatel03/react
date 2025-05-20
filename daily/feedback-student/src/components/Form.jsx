import React from "react";
import { FaStar } from "react-icons/fa";

function Form() {
    const [hover, setHover] = useState(0);
    const [star, setStar] = useState(0);
    // const [list, setList] = useState([]);

  const handleHover = (index) => {
    setHover(index);
    if (star != 0) {
      setStar(0);
    }
  };

  const handleLeave = (index) => {
    setHover(0);
    setStar(index);
  };

  const handleDown = (index) => {
    setStar(index);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form method="post">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Student ID
                </label>
                <input type="number" name="" className="form-control" id="" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Student E-mail
                </label>
                <input type="email" name="" className="form-control" id="" />
              </div>
              <div className="mb-3">
                <label htmlFor="course" className="form-label">
                  Course
                </label>
                <input type="text" name="" className="form-control" id="" />
              </div>
              <div className="mb-3">
                <label htmlFor="i-name" className="form-label">
                  Instructor Name
                </label>
                <input type="text" name="" className="form-control" id="" />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label">
                Instructor Feedback
              </label>
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Receive syllabus & instructions at first</td>
                    <td>
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          onMouseOver={() => handleHover(index + 1)}
                          onMouseLeave={() => handleLeave(index + 1)}
                          onClick={() => handleDown(index + 1)}
                          color={hover > index || star > index ? "gold" : "gray"}
                          size={"20px"}
                          style={{ cursor: "pointer" }}
                        />
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
