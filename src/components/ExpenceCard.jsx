// import React, { useEffect, useState } from "react";

// const ExpenceCard = () => {
//   const Categpry = ["Grocery", "Transport"];
//   const initialLastCategories = ["Food", "Entertainment"];

//   const [last, setLast] = useState(initialLastCategories);
//   const [category, setCategory] = useState("");
//   const [result, setResult] = useState([...Categpry, ...last]);

//   // Update result whenever 'last' changes
//   useEffect(() => {
//     setResult([...Categpry, ...last]);
//   }, [last]);

//   // Prevent adding empty categories
//   const handleCategory = () => {
//     if (category.trim() === "") return;
//     setLast([...last, category]); // Updates 'last', triggering useEffect
//     setCategory(""); // Clears input field
//   };

//   // Properly reset categories
//   const handleReset = () => {
//     setLast(initialLastCategories);
//   };

//   return (
//     <div className="container m-5 d-flex justify-content-center align-items-center">
//       <div className="card shadow text-start w-50">
//         <div className="card-body">
//           <h4 className="card-title">Expenses Category</h4>
//           <p className="card-text">Add/Remove Expense Categories Below</p>

//           <div className="d-flex flex-wrap gap-2 my-3">
//             {result.map((item, index) => (
//               <button key={index} type="button" className="btn btn-category">
//                 {item}
//               </button>
//             ))}
//           </div>

//           <input
//             type="text"
//             className="form-control my-3"
//             placeholder="Enter new category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />

//           <div className="d-flex gap-2 mt-2 justify-content-end">
//             <button className="btn btn-secondary" onClick={handleReset}>
//               Reset
//             </button>
//             <button className="btn btn-primary" onClick={handleCategory}>
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenceCard;
// import { Alert } from "bootstrap/dist/js/bootstrap.bundle.min";
// import React, { useEffect, useState } from "react";

// import { ToastContainer, toast } from "react-toastify";
// const ExpenceCard = () => {
//   const [count, setCount] = useState(0);

//   const handleDec = () => {
//     if (count <= 0) {
//       setCount(0);
//       toast("Number can be 0!");
//     } else {
//       setCount(count - 1);
//     }
//   };
//   const handleInc = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     } else {
//       toast("Max number reacy!");
//     }
//   };
//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-primary"
//         onClick={() => {
//           handleDec();
//         }}
//       >
//         -
//       </button>
//       <h1>{count}</h1>
//       <button
//         className="btn btn-success"
//         onClick={() => {
//           handleInc();
//         }}
//       >
//         +
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ExpenceCard;
// import React, { useState } from "react";

// const ExpenceCard = () => {
//   const [text, setText] = useState("On");
//   const handleToggel = () => {
//     if (text == "On") {
//       setText("Off");
//     } else if (text == "Off") {
//       setText("On");
//     }
//   };
//   return (
//     <div>
//       <button
//         type="button"
//         className={`${text == "On" ? "btn btn-primary" : "btn btn-success"}`}
//         onClick={() => {
//           handleToggel();
//         }}
//       >
//         {text}
//       </button>
//     </div>
//   );
// };

// export default ExpenceCard;
import React, { useState } from "react";

const ExpenceCard = () => {
  const [text, setText] = useState("Show");
  const handleToggel = () => {
    if (text === "Show") {
      setText("Hide");
    } else if (text === "Hide") {
      setText("Show");
    }
  };
  return (
    <div>
      {text === "Show" ? <h1>Showing</h1> : <h1></h1>}
      <button
        type="button"
        className={`${text == "Hide" ? "btn btn-primary" : "btn btn-success"}`}
        onClick={() => {
          handleToggel();
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default ExpenceCard;
