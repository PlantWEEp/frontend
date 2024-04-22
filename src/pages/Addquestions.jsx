// import React from 'react';
// import Header from '../component/Navbar/Header';
// import Sidebar from '../component/Navbar/Sidebar';
// import { FaArrowLeft } from "react-icons/fa";

// export default function Addquestions() {
//   return (
//     <>
//       <div>
//         <div className="top-bar">
//           <Header />
//         </div>
//         <div className="sider-bar">
//           <Sidebar />
//         </div>
//         <div className="primarycontainer">
//           <div className="containerWapper">
//             <div className="backtoquestionbutton">
//             <FaArrowLeft />
//               <h4 className='listofquestions'>List of Questions</h4>
//             </div>
//             <div className="container11">

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

import React from "react";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import { FaArrowLeft } from "react-icons/fa";

export default function Addquestions() {
  return (
    <>
      <div>
        <div className="top-bar">
          <Header />
        </div>
        <div className="sider-bar">
          <Sidebar />
        </div>
        <div className="primarycontainer">
          <div className="containerWapper">
            <div className="backtoquestionbutton">
              <FaArrowLeft />
              <h4 className="listofquestions">List of Questions</h4>
            </div>
            <div className="container11">
              <div className="sectionName">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Add secrion name" />
                  </div>
                  <div className="col-md-6">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">Hard</option>
                      <option value="2">Medium</option>
                      <option value="3">Easy</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="sectionName">
                <input
                  type="text"
                  placeholder="Please add the questions here"
                />
              </div>
              <div className="sectionName">
                <input
                  type="text"
                  placeholder="Please enter the correct answer in this place"
                />
              </div>

              <div className="row sectionName">
                <label className="labelfor">
                  Please enter the incorrect options here:
                </label>
                <div className="col-md-4">
                  <input
                    type="text"
                    placeholder="Incorrect option one"
                    id="incorrectOption1"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    placeholder="Incorrect option two"
                    id="incorrectOption2"
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    placeholder="Incorrect option three"
                    id="incorrectOption3"
                  />
                </div>
              </div>

              <div className="submitcancelbutton">
                <button className="submitbutton" type="submit">
                  Submit
                </button>
                <button className="cancelbutton" type="button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
