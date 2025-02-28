import { useState, useEffect } from "react";

const JsonExercise = () => {
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
            ],
        },
        {
            id: 2,
            dept: "designer",
            members: [
                { id: 'emp011', name: 'savi', city: 'theni', email: 'savi@hcl.com', is_active: true, level: 2 },
                { id: 'emp012', name: 'krish', city: 'pune', email: 'krish@hcl.com', is_active: false, level: 3 },
                { id: 'emp007', name: 'devnath', city: 'cova', email: 'dev@hcl.com', is_active: true, level: 2 },
                { id: 'emp015', name: 'kapil', city: 'madurai', email: 'kapil@hcl.com', is_active: true, level: 1 }
            ],
        },
        {
            id: 3,
            dept: "support & maintenance",
            members: [
                { id: 'emp023', name: 'ravi', city: 'thiruvallur', email: 'ravi@hcl.com', is_active: false, level: 1 },
                { id: 'emp018', name: 'raja', city: 'covai', email: 'raja@hcl.com', is_active: true, level: 2 },
                { id: 'emp017', name: 'deepa', city: 'viruthunagar', email: 'deepa@hcl.com', is_active: true, level: 3 },
                { id: 'emp024', name: 'malathi', city: 'ramnadu', email: 'malathi@hcl.com', is_active: false, level: 2 }
            ]
        },
        {
            id: 4,
            dept: "hr & management",
            members: [
                { id: 'emp023', name: 'raghul', city: 'mumbai', email: 'raghul@hcl.com', is_active: true, level: 2 },
                { id: 'emp018', name: 'keerthi', city: 'chennai', email: 'keerthi@hcl.com', is_active: true, level: 2 }
            ]
        }
    ];

    const [dataMem, setDataMem] = useState([]);
    const [obj, setObj] = useState({});
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const initialObj = {};
        const sortData = data.map((totalData) => {
            const sortedMembers = sortMembers(totalData.members, 'asc');
            initialObj[totalData.dept] = { members: sortedMembers, checked: false };
            return { ...totalData, members: sortedMembers };
        });

        setObj(initialObj);
        setDataMem(sortData);
    }, []);


    const handleDeptCheckboxChange = (dept, e) => {
        const isChecked = e.target.checked;
        setObj(prevState => {
            const updatedObj = { ...prevState, [dept]: { ...prevState[dept], checked: isChecked } };
            return updatedObj;
        });

        let updatedData = [];
        updatedData = dataMem.map((department) => {
            let res = {};
            if (department.dept === dept) {
                let members = [];
                if (isChecked) {
                    const filteredMembers = department.members.filter(member => member.is_active);
                    members = filteredMembers
                } else {
                    members = obj[dept]?.members
                }
                res = { ...department, members }
            } else {
                res = department
            }
            return res;
        });
        console.log("handleDeptCheckboxChange", updatedData)
        setDataMem(updatedData);
    };

    const handleSortChange = (e) => {
        const val = e.target.value;
        setSortOrder(val);
        const updatedData = dataMem.map(department => {
            const sortedMembers = sortMembers(department.members, val)
            return { ...department, members: sortedMembers };
        });
        setDataMem(updatedData);
    };

    const sortMembers = (members = [], val = 'asc') => members.sort((a, b) => val === 'asc' ? a.level - b.level : b.level - a.level);


    return (
        <div style={{ marginTop: '69px', marginLeft: '69px', marginRight: '69px' }}>
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
                            <span style={{ marginLeft: '12px' }}>
                                <label>
                                    <input
                                        type="radio"
                                        value="asc"
                                        checked={sortOrder === "asc"}
                                        onChange={handleSortChange}
                                    />
                                    Ascending
                                </label>
                                <label style={{ marginLeft: '12px' }}>
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
                    {dataMem.map((totalData) => (
                        totalData.members.map((m, index) => {
                            const status = m.is_active ? 'Active' : 'Inactive';
                            const level = m.level === 1 ? 'Trainee' : m.level === 2 ? 'Associative Engineer' : 'Engineer';

                            return (
                                <tr key={m.id}>
                                    {index === 0 ? (
                                        <>
                                            <td rowSpan={totalData.members.length}>{totalData.id}</td>
                                            <td rowSpan={totalData.members.length}>
                                                {totalData.dept}
                                                <span style={{ marginLeft: '12px' }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={obj[totalData.dept]?.checked || false}
                                                        onChange={(e) => handleDeptCheckboxChange(totalData.dept, e)}
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
    );
};

export default JsonExercise;
