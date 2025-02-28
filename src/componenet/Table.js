// import { useState } from "react";

// const Arrowfnc = () => {

//     const data = [
//         {
//             id: 1,
//             dept: "development",
//             members: [
//                 {
//                     id: 'emp001',
//                     name: 'karthick',
//                     city: 'madurai',
//                     email: 'karthick@hcl.com',
//                     is_active: true,
//                     level: 2
//                 },
//                 {
//                     id: 'emp004',
//                     name: 'surya',
//                     city: 'thirunelveli',
//                     email: 'surya@hcl.com',
//                     is_active: true,
//                     level: 2
//                 },
//                 {
//                     id: 'emp006',
//                     name: 'meera',
//                     city: 'chennai',
//                     email: 'meera@hcl.com',
//                     is_active: false,
//                     level: 1
//                 },
//                 {
//                     id: 'emp008',
//                     name: 'jeeva',
//                     city: 'madurai',
//                     email: 'jeeva@hcl.com',
//                     is_active: true,
//                     level: 3
//                 },
//                 {
//                     id: 'emp009',
//                     name: 'abi',
//                     city: 'thirchy',
//                     email: 'abi@hcl.com',
//                     is_active: true,
//                     level: 1
//                 }
//             ]
//         }
//         // , {
//         //     id: 2,
//         //     dept: "designer",
//         //     members: [
//         //         {
//         //             id: 'emp011',
//         //             name: 'savi',
//         //             city: 'theni',
//         //             email: 'savi@hcl.com',
//         //             is_active: true,
//         //             level: 2
//         //         },
//         //         {
//         //             id: 'emp012',
//         //             name: 'krish',
//         //             city: 'pune',
//         //             email: 'krish@hcl.com',
//         //             is_active: false,
//         //             level: 3
//         //         },
//         //         {
//         //             id: 'emp007',
//         //             name: 'devnath',
//         //             city: 'cova',
//         //             email: 'dev@hcl.com',
//         //             is_active: true,
//         //             level: 2
//         //         },
//         //         {
//         //             id: 'emp015',
//         //             name: 'kapil',
//         //             city: 'madurai',
//         //             email: 'kapil@hcl.com',
//         //             is_active: true,
//         //             level: 1
//         //         }
//         //     ]
//         // }, {
//         //     id: 2,
//         //     dept: "support & maintenance",
//         //     members: [
//         //         {
//         //             id: 'emp023',
//         //             name: 'ravi',
//         //             city: 'thiruvallur',
//         //             email: 'ravi@hcl.com',
//         //             is_active: false,
//         //             level: 1
//         //         },
//         //         {
//         //             id: 'emp018',
//         //             name: 'raja',
//         //             city: 'covai',
//         //             email: 'raja@hcl.com',
//         //             is_active: true,
//         //             level: 2
//         //         },
//         //         {
//         //             id: 'emp017',
//         //             name: 'deepa',
//         //             city: 'viruthunagar',
//         //             email: 'deepa@hcl.com',
//         //             is_active: true,
//         //             level: 3
//         //         },
//         //         {
//         //             id: 'emp024',
//         //             name: 'malathi',
//         //             city: 'ramnadu',
//         //             email: 'malathi@hcl.com',
//         //             is_active: false,
//         //             level: 2
//         //         }
//         //     ]
//         // }, {
//         //     id: 2,
//         //     dept: "hr & management",
//         //     members: [
//         //         {
//         //             id: 'emp023',
//         //             name: 'raghul',
//         //             city: 'mumbai',
//         //             email: 'raghul@hcl.com',
//         //             is_active: true,
//         //             level: 2
//         //         },
//         //         {
//         //             id: 'emp018',
//         //             name: 'keerthi',
//         //             city: 'chennai',
//         //             email: 'keerthi@hcl.com',
//         //             is_active: true,
//         //             level: 2
//         //         }
//         //     ]
//         // }
//     ];
//     const [isChecked, setIschecked] = useState(false)
//     const [deptStatus, setDeptStatus] = useState(
//         data.reduce((acc, curr) => {
//             acc[curr.id] = false; // default status to false (unchecked)
//             return acc;
//         }, {})
//     );

//     const handleDeptCheckboxChange = (deptId) => {
//         setDeptStatus((prevStatus) => ({
//             ...prevStatus,
//             [deptId]: !prevStatus[deptId],
//         }));
//     };

//     const handleDeptCheckboxClick = () => {
//         setIschecked(!isChecked);
//     }

//     return (
//         <>
//             {/* <div>
//                 <label>Sort by level:</label>
//                 <input type="radio" name="sort" value="asc" checked={sortOrder === 'asc'} onChange={handleSortChange} /> Ascending
//                 <input type="radio" name="sort" value="desc" checked={sortOrder === 'desc'} onChange={handleSortChange} /> Descending
//             </div> */}

//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Dept</th>
//                         <th>EmpId</th>
//                         <th>Name</th>
//                         <th>City</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                         <th>Level</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((d) => (
//                             d.members.map((m, index) => {
//                                 const status = m.is_active ? 'Active' : 'Inactive';
//                                 const level = m.level === 1 ? 'Trainee' : m.level === 2 ? 'Associative Engineer' : 'Engineer';

//                                 // const status = deptStatus[d.id]
//                                 //     ? m.is_active
//                                 //         ? "Active"
//                                 //         : "Inactive"
//                                 //     : "Inactive"; // if checkbox is checked, show real status, else show Inactive
//                                 // const level =
//                                 //     m.level === 1
//                                 //         ? "Trainee"
//                                 //         : m.level === 2
//                                 //             ? "Associative Engineer"
//                                 //             : "Engineer";



//                                 return (
//                                     <tr>
//                                         {index === 0 ? (
//                                             <>
//                                                 <td rowSpan={d.members.length}>{d.id}</td>
//                                                 <td rowSpan={d.members.length}>{d.dept}
//                                                     <input
//                                                         type="checkbox"
//                                                         //checked={deptStatus[d.id]}
//                                                         //onChange={() => handleDeptCheckboxChange(d.id)}
//                                                         checked={isChecked}
//                                                         onClick={handleDeptCheckboxClick}
//                                                     >
//                                                     </input>
//                                                 </td>
//                                             </>
//                                         ) : null}

//                                         <td>{m.id}</td>
//                                         <td>{m.name}</td>
//                                         <td>{m.city}</td>
//                                         <td>{m.email}</td>
//                                         <td>{status}</td>
//                                         <td>{level}</td>
//                                     </tr>
//                                 );
//                             })
//                         ))
//                     }
//                 </tbody>

//             </table>
//         </>
//     )
// }

// export default Arrowfnc



// import { useState } from "react";

// const Arrowfnc = () => {

//     const data = [
//         {
//             id: 1,
//             dept: "development",
//             members: [
//                 {
//                     id: 'emp001',
//                     name: 'karthick',
//                     city: 'madurai',
//                     email: 'karthick@hcl.com',
//                     is_active: true,
//                     level: 2
//                 },
//                 {
//                     id: 'emp004',
//                     name: 'surya',
//                     city: 'thirunelveli',
//                     email: 'surya@hcl.com',
//                     is_active: true,
//                     level: 2
//                 },
//                 {
//                     id: 'emp006',
//                     name: 'meera',
//                     city: 'chennai',
//                     email: 'meera@hcl.com',
//                     is_active: false,
//                     level: 1
//                 },
//                 {
//                     id: 'emp008',
//                     name: 'jeeva',
//                     city: 'madurai',
//                     email: 'jeeva@hcl.com',
//                     is_active: true,
//                     level: 3
//                 },
//                 {
//                     id: 'emp009',
//                     name: 'abi',
//                     city: 'thirchy',
//                     email: 'abi@hcl.com',
//                     is_active: true,
//                     level: 1
//                 }
//             ]
//         }
//         , {
//             id: 2,
//             dept: "designer",
//             members: [
//                 {
//                     id: 'emp011',
//                     name: 'savi',
//                     city: 'theni',
//                     email: 'savi@hcl.com',
//                     is_active: true,
//                     level: 2
//                 },
//                 {
//                     id: 'emp012',
//                     name: 'krish',
//                     city: 'pune',
//                     email: 'krish@hcl.com',
//                     is_active: false,
//                     level: 3
//                 },
//                 {
//                     id: 'emp007',
//                     name: 'devnath',
//                     city: 'cova',
//                     email: 'dev@hcl.com',
//                     is_active: true,
//                     level: 2
//                 },
//                 {
//                     id: 'emp015',
//                     name: 'kapil',
//                     city: 'madurai',
//                     email: 'kapil@hcl.com',
//                     is_active: true,
//                     level: 1
//                 }
//             ]
//         },
//     ];

//     // const [isChecked, setIschecked] = useState(false); //boolean
//     // //array
//     // const [isDevChecked, setIsDevchecked] = useState(false);
//     // const [isManagerChecked, setIsManagerchecked] = useState(false);
//     const [checkedArray, setCheckedArray] = useState([false, false, false])
//     const [checkedObj, setCheckedObj] = useState({
//         development: false,
//         management: false,

//     })



//     const handleDeptCheckboxClick = (index) => {
//         // setIschecked(!isChecked);
//         console.log("checkedArray0", checkedArray, !checkedArray[index]);
//         // setCheckedArray(!checkedArray[index])
//         setCheckedArray(prevState => {
//             // console.log("prevState", prevState, !prevState[index]);
//             // !prevState[index]
//             const prev = [...prevState]
//             prev[index] = !prev[index]
//             return prev

//         })
//         // setCheckedArray([index])
//     };

//     return (
//         <>
//             <table className="table table-bordered">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Dept</th>
//                         <th>EmpId</th>
//                         <th>Name</th>
//                         <th>City</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                         <th>Level</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((d, dIndex) => (
//                             d.members
//                                 .filter((m) => checkedArray[dIndex] ? m.is_active : true)
//                                 .map((m, index) => {
//                                     const status = m.is_active ? 'Active' : 'Inactive';
//                                     const level = m.level === 1 ? 'Trainee' : m.level === 2 ? 'Associative Engineer' : 'Engineer';
//                                     console.log("checkedArray ss", d.dept, d.members.length);

//                                     return (
//                                         <tr key={m.id}>
//                                             {index === 0 ? (
//                                                 <>
//                                                     <td rowSpan={d.members.length}>{d.id}</td>
//                                                     <td rowSpan={d.members.length}>{d.dept}
//                                                         <input
//                                                             type="checkbox"
//                                                             // checked={ d.dept === 'dev' ?isChecked :  }
//                                                             checked={checkedArray[dIndex]}
//                                                             // onClick={handleDeptCheckboxClick(dIndex)}
//                                                             onClick={() => handleDeptCheckboxClick(dIndex)}
//                                                         />
//                                                     </td>
//                                                 </>
//                                             ) : null}

//                                             <td>{m.id}</td>
//                                             <td>{m.name}</td>
//                                             <td>{m.city}</td>
//                                             <td>{m.email}</td>
//                                             <td>{status}</td>
//                                             <td>{level}</td>
//                                         </tr>
//                                     );
//                                 })
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </>
//     );
// };

// export default Arrowfnc;



import { useState } from "react";
import './TableObject.css';

const JsonExercise = (props) => {
    const data = [
        {
            id: 1,
            dept: "development",
            members: [
                { id: 'emp001', name: 'karthick', city: 'madurai', email: 'karthick@hcl.com', is_active: true, level: 2 },
                { id: 'emp004', name: 'surya', city: 'thirunelveli', email: 'surya@hcl.com', is_active: true, level: 2 },
                { id: 'emp006', name: 'meera', city: 'chennai', email: 'meera@hcl.com', is_active: false, level: 1 },
                { id: 'emp008', name: 'jeeva', city: 'madurai', email: 'jeeva@hcl.com', is_active: true, level: 3 },
                { id: 'emp009', name: 'abi', city: 'thirchy', email: 'abi@hcl.com', is_active: true, level: 1 }
            ]
        },
        {
            id: 2,
            dept: "designer",
            members: [
                { id: 'emp011', name: 'savi', city: 'theni', email: 'savi@hcl.com', is_active: true, level: 2 },
                { id: 'emp012', name: 'krish', city: 'pune', email: 'krish@hcl.com', is_active: false, level: 3 },
                { id: 'emp007', name: 'devnath', city: 'cova', email: 'dev@hcl.com', is_active: true, level: 2 },
                { id: 'emp015', name: 'kapil', city: 'madurai', email: 'kapil@hcl.com', is_active: true, level: 1 }
            ]
        },
        {
            id: 2,
            dept: "support & maintenance",
            members: [
                { id: 'emp023', name: 'ravi', city: 'thiruvallur', email: 'ravi@hcl.com', is_active: false, level: 1 },
                { id: 'emp018', name: 'raja', city: 'covai', email: 'raja@hcl.com', is_active: true, level: 2 },
                { id: 'emp017', name: 'deepa', city: 'viruthunagar', email: 'deepa@hcl.com', is_active: true, level: 3 },
                { id: 'emp024', name: 'malathi', city: 'ramnadu', email: 'malathi@hcl.com', is_active: false, level: 2 }
            ]
        },
        {
            id: 2,
            dept: "hr & management",
            members: [
                { id: 'emp023', name: 'raghul', city: 'mumbai', email: 'raghul@hcl.com', is_active: true, level: 2 },
                { id: 'emp018', name: 'keerthi', city: 'chennai', email: 'keerthi@hcl.com', is_active: true, level: 2 }
            ]
        }
    ];

    const support = 'support & maintenance';
    const hr = 'hr & management';

    // Separate state for radio buttons (sort order)
    const [sortOrder, setSortOrder] = useState('asc');
    
    // Separate state for department checkboxes
    const [checkedObj, setCheckedObj] = useState({
        development: false,
        designer: false,
        [support]: false,
        [hr]: false
    });

    const handleDeptCheckboxChange = (dept, e) => {
        const isChecked = e.target.checked;
        setCheckedObj(prevState => {
            const updatedCheckedObj = { ...prevState, [dept]: isChecked };
            return updatedCheckedObj;
        });
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortMembers = (members) => {
        return members.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.level - b.level;
            } else {
                return b.level - a.level;
            }
        });
    };

    const filterAndSortDepartments = (data) => {
        return data.map((department) => {
            const filteredMembers = department.members;
            const sortedMembers = sortMembers(filteredMembers);
            return { ...department, members: sortedMembers };
        });
    };

    const filteredAndSortedData = filterAndSortDepartments(data);

    return (
        <>
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Dept</th>
                            <th>EmpId</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>
                                Level
                                <span className='common-style'>
                                    <label>
                                        <input
                                            type="radio"
                                            value="asc"
                                            checked={sortOrder === "asc"}
                                            onChange={handleSortChange}
                                        />
                                        Ascending
                                    </label>
                                    <label className='common-style'>
                                        <input
                                            type="radio"
                                            value="desc"
                                            checked={sortOrder === "desc"}
                                            onChange={handleSortChange}
                                        />
                                        Descending
                                    </label>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAndSortedData.map((totaldata) => (
                            totaldata.members
                                .map((m, index) => {
                                    const status = m.is_active ? 'Active' : 'Inactive';
                                    const level = m.level === 1 ? 'Trainee' : m.level === 2 ? 'Associative Engineer' : 'Engineer';

                                    return (
                                        <tr key={m.id}>
                                            {!index ? (
                                                <>
                                                    <td rowSpan={totaldata.members.length}>{totaldata.id}</td>
                                                    <td rowSpan={totaldata.members.length}>
                                                        {totaldata.dept}
                                                        <span className='common-style'>
                                                            <input
                                                                type="checkbox"
                                                                checked={checkedObj[totaldata.dept]}
                                                                onChange={(e) => handleDeptCheckboxChange(totaldata.dept, e)}
                                                            />
                                                        </span>
                                                    </td>
                                                </>
                                            ) : null}

                                            <td>{m.id}</td>
                                            <td>{m.name}</td>
                                            <td>{m.city}</td>
                                            <td>{m.email}</td>
                                            <td>{status}</td>
                                            <td>{level}</td>
                                        </tr>
                                    );
                                })
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default JsonExercise;
