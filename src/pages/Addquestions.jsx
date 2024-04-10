// import React from 'react';
// import Header from '../component/Navbar/Header';
// import Sidebar from '../component/Navbar/Sidebar';
// import { FaArrowLeft } from "react-icons/fa";

// export default function Addquestions() {
//   return (
//     <>
//       <div>
//         <div class="top-bar">
//           <Header />
//         </div>
//         <div class="sider-bar">
//           <Sidebar />
//         </div>
//         <div class="primarycontainer">
//           <div class="containerWapper">
//             <div class="backtoquestionbutton">
//             <FaArrowLeft />
//               <h4 class='listofquestions'>List of Questions</h4>
//             </div>
//             <div class="container11">

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
        <div class="top-bar">
          <Header />
        </div>
        <div class="sider-bar">
          <Sidebar />
        </div>
        <div class="primarycontainer">
          <div class="containerWapper">
            <div class="backtoquestionbutton">
              <FaArrowLeft />
              <h4 class="listofquestions">List of Questions</h4>
            </div>
            <div class="container11">
              <div class="sectionName">
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" placeholder="Add secrion name" />
                  </div>
                  <div class="col-md-6">
                    <select
                      class="form-select"
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

              <div class="sectionName">
                <input
                  type="text"
                  placeholder="Please add the questions here"
                />
              </div>
              <div class="sectionName">
                <input
                  type="text"
                  placeholder="Please enter the correct answer in this place"
                />
              </div>

              <div class="row sectionName">
                <label class="labelfor">
                  Please enter the incorrect options here:
                </label>
                <div class="col-md-4">
                  <input
                    type="text"
                    placeholder="Incorrect option one"
                    id="incorrectOption1"
                  />
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    placeholder="Incorrect option two"
                    id="incorrectOption2"
                  />
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    placeholder="Incorrect option three"
                    id="incorrectOption3"
                  />
                </div>
              </div>

              <div class="submitcancelbutton">
                <button class="submitbutton" type="submit">
                  Submit
                </button>
                <button class="cancelbutton" type="button">
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
