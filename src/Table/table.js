
function Arrowfnc() { //arrow fn
    const data = [
        {
            id: 1,
            dept: "development",
            members: [
                {
                    id: 'emp001',
                    name: 'karthick',
                    city: 'madurai',
                    email: 'karthick@hcl.com',
                    is_active: true,
                    level: 2
                },
                {
                    id: 'emp004',
                    name: 'surya',
                    city: 'thirunelveli',
                    email: 'surya@hcl.com',
                    is_active: true,
                    level: 2
                },
                {
                    id: 'emp006',
                    name: 'meera',
                    city: 'chennai',
                    email: 'meera@hcl.com',
                    is_active: false,
                    level: 1
                },
                {
                    id: 'emp008',
                    name: 'jeeva',
                    city: 'madurai',
                    email: 'jeeva@hcl.com',
                    is_active: true,
                    level: 3
                },
                {
                    id: 'emp009',
                    name: 'abi',
                    city: 'thirchy',
                    email: 'abi@hcl.com',
                    is_active: true,
                    level: 1
                }
            ]
        }, {
            id: 2,
            dept: "designer",
            members: [
                {
                    id: 'emp011',
                    name: 'savi',
                    city: 'theni',
                    email: 'savi@hcl.com',
                    is_active: true,
                    level: 2
                },
                {
                    id: 'emp012',
                    name: 'krish',
                    city: 'pune',
                    email: 'krish@hcl.com',
                    is_active: false,
                    level: 3
                },
                {
                    id: 'emp007',
                    name: 'devnath',
                    city: 'cova',
                    email: 'dev@hcl.com',
                    is_active: true,
                    level: 2
                },
                {
                    id: 'emp015',
                    name: 'kapil',
                    city: 'madurai',
                    email: 'kapil@hcl.com',
                    is_active: true,
                    level: 1
                }
            ]
        }, {
            id: 2,
            dept: "support & maintenance",
            members: [
                {
                    id: 'emp023',
                    name: 'ravi',
                    city: 'thiruvallur',
                    email: 'ravi@hcl.com',
                    is_active: false,
                    level: 1
                },
                {
                    id: 'emp018',
                    name: 'raja',
                    city: 'covai',
                    email: 'raja@hcl.com',
                    is_active: true,
                    level: 2
                },
                {
                    id: 'emp017',
                    name: 'deepa',
                    city: 'viruthunagar',
                    email: 'deepa@hcl.com',
                    is_active: true,
                    level: 3
                },
                {
                    id: 'emp024',
                    name: 'malathi',
                    city: 'ramnadu',
                    email: 'malathi@hcl.com',
                    is_active: false,
                    level: 2
                }
            ]
        }, {
            id: 2,
            dept: "hr & management",
            members: [
                {
                    id: 'emp023',
                    name: 'raghul',
                    city: 'mumbai',
                    email: 'raghul@hcl.com',
                    is_active: true,
                    level: 2
                },
                {
                    id: 'emp018',
                    name: 'keerthi',
                    city: 'chennai',
                    email: 'keerthi@hcl.com',
                    is_active: true,
                    level: 2
                }
            ]
        }
    ];

    // define function
    return (
        <>
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
                        <th>Level</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        data.map((d, index) =>
                            d.members.map((m, memberIndex) => {
                                const status = m.is_active === true ? 'Active' : 'InActive';
                                const level = () => {
                                    if (m.level === 1) {
                                        return 'trainee';
                                    } else if (m.level === 2) {
                                        return 'associative engineer';
                                    } else {
                                        return 'engineer';
                                    }
                                }
                                const showDept = memberIndex === 0 ? d.dept : '';
                                const rowSpan = memberIndex === 0 ? d.members.length : 0;
                
                                return (
                                    <>
                                        <tr 
                                        >
                                            <td>{d.id}</td>
                                            <td>{d.dept}
                                               
                                            </td>
                                            <td>{m.id}</td>
                                            <td>{m.name}</td>
                                            <td>{m.city}</td>
                                            <td>{m.email}</td>
                                            
                                            <td>{status}</td>
                                            
                                            {<td>{level()}</td>}
                                        </tr>
                                    </>
                                )
                            }
                            ))
                    }
                </tbody> */}

                {/* <tbody>
                    {
                        data.map((d) => (
                            
                            <>
                                <tr key={d.id}>
                                    <td rowSpan={d.members.length}>{d.id}</td> 
                                    <td rowSpan={d.members.length}>{d.dept}</td> 
                                </tr>

                               
                                {d.members.map((m) => {
                                    const status = m.is_active ? 'Active' : 'Inactive';
                                    const level = m.level === 1 ? 'Trainee' : m.level === 2 ? 'Associative Engineer' : 'Engineer';

                                    return (
                                        <tr key={m.id}>
                                            <td>{m.id}</td>
                                            <td>{m.name}</td>
                                            <td>{m.city}</td>
                                            <td>{m.email}</td>
                                            <td>{status}</td>
                                            <td>{level}</td>
                                        </tr>
                                    );
                                })}
                            </>
                        ))
                    }
                </tbody> */}

                <tbody>
                    {
                        data.map((d) => (
                            d.members.map((m, index) => {
                                const status = m.is_active ? 'Active' : 'Inactive';
                                const level = m.level === 1 ? 'Trainee' : m.level === 2 ? 'Associative Engineer' : 'Engineer';

                                return (
                                    <tr key={m.id}>
                                        {index === 0 ? (
                                            <>
                                                <td rowSpan={d.members.length}>{d.id}</td>
                                                <td rowSpan={d.members.length}>{d.dept}</td>
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
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}
export default Arrowfnc