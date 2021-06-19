// import React, { useState } from 'react';
// import "./accordian.css";
 
// const Accordian = ({ project, isExpand = false }) => {
//   const [expand, setExpand] = useState(isExpand);

//   return(
//     <>
//       {project?.map((info, index) => {
          
//           return (
//             <div className="box" key={index}>
//                 <div className="label" onClick={() => setExpand(expand => !expand)}>
//                 <div className="title">{info.name}</div>
//             </div>
//                 {expand && <div className="content">{info.description}</div>}
//             </div>
//             )
//         })}
//     </>
//   )
// }

// export default Accordian;