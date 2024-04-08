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


import React from 'react';
import Header from '../component/Navbar/Header';
import Sidebar from '../component/Navbar/Sidebar';
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
                            <h4 className='listofquestions'>List of Questions</h4>
                        </div>
                        <div className="container11">
                            <div className="sectionName">
                                <h6>Section Name</h6>
                                <select className="selectCategory">
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            
                            <div>
                                <input type="text" placeholder="Please add the questions here" />
                            </div>
                            <div>
                                <input type="text" placeholder="Please enter the correct answer in this place" />
                            </div>
                            
                            <div className='row '>
                                
                                <label className='labelfor'>Please enter the incorrect options here:</label>
                                <div className='col-md-4'>
                                <input type="text" placeholder="Incorrect option one" id="incorrectOption1" />
                                </div>
                                <div className='col-md-4'>
                                <input type="text" placeholder="Incorrect option two" id="incorrectOption2" />
                                </div>
                                <div className='col-md-4'>
                                <input type="text" placeholder="Incorrect option three" id="incorrectOption3" />
                                </div>
                            </div>

                            <div className='submitcancelbutton'>
                                <button class="submitbutton" type="submit">Submit</button>
                                <button class="cancelbutton" type="button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


