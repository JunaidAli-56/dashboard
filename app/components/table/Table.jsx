import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import"./table.scss";

export default function Tables() {
    const columns = [
        { name: "NAME", uid: "name" },
        { name: "ROLE", uid: "role" },
        { name: "STATUS", uid: "status" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const users = [
        {
            id: 1,
            name: "Emma Reichert",
            role: "CEO",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "/assets/img/users/user-1.png",
            email: "emma.reichert@example.com",
        },
        {
            id: 2,
            name: "Zoey Lang",
            role: "Technical Lead",
            team: "Development",
            status: "paused",
            age: "25",
            avatar: "/assets/img/users/user-2.png",
            email: "zoey.lang@example.com",
        },
        {
            id: 3,
            name: "Jhon Fisher",
            role: "Senior Developer",
            team: "Development",
            status: "active",
            age: "22",
            avatar: "/assets/img/users/user-8.png",
            email: "jhon.fisher@example.com",
        },
        {
            id: 4,
            name: "William Howard",
            role: "Community Manager",
            team: "Marketing",
            status: "vacation",
            age: "28",
            avatar: "/assets/img/users/user-3.png",
            email: "william.howard@example.com",
        },
        {
            id: 5,
            name: "Kristen Copper",
            role: "Sales Manager",
            team: "Sales",
            status: "active",
            age: "24",
            avatar: "/assets/img/users/user-5.png",
            email: "kristen.cooper@example.com",
        },
    ];
    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {cellValue}
                            </Text>
                        </Row>
                        <Row>
                            <Text b size={13} css={{ tt: "capitalize", color: "$accents7" }}>
                                {user.team}
                            </Text>
                        </Row>
                    </Col>
                );
            case "status":
                return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

            case "actions":
                return (
                    <Row justify="center" align="center"
                    >
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Details">
                                <IconButton onClick={() => console.log("View user", user.id)}>
                                    <EyeIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip content="Edit user">
                                <IconButton onClick={() => console.log("Edit user", user.id)}>
                                    <EditIcon size={20} fill="#979797" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete user"
                                color="error"
                                onClick={() => console.log("Delete user", user.id)}
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };
    return (
        <div className="container-fluid table-container m-0 p-0">
            <div className="row">
                <div className="col">
                    <Table
                        aria-label="Example table with custom cells"
                        css={{
                            boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            backgroundColor: "#FFFFFF",
                            margin: 0,
                            padding:20,
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="none"
                    >
                        <Table.Header columns={columns}>
                            {(column) => (
                                <Table.Column
                                    key={column.uid}
                                    hideHeader={column.uid === "actions"}
                                    align={column.uid === "actions" ? "center" : "start"}
                                >
                                    {column.name}
                                </Table.Column>
                            )}
                        </Table.Header>
                        <Table.Body items={users}>
                            {(item) => (
                                <Table.Row>
                                    {(columnKey) => (
                                        <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                                    )}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
}


// import Image from 'next/image'
// import React from 'react'

// const Table = () => {
//     return (
//         <>
//             <div className="row">
//                 <div className="col-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h4>Assign Task Table</h4>
//                             <div className="card-header-form">
//                                 <form>
//                                     <div className="input-group">
//                                         <input type="text" className="form-control" placeholder="Search" />
//                                         <div className="input-group-btn">
//                                             <button className="btn btn-primary"><i className="fas fa-search"></i></button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="card-body p-0">
//                             <div className="table-responsive">
//                                 <table className="table table-striped">
//                                     <tr>
//                                         <th className="text-center">
//                                             <div className="custom-checkbox custom-checkbox-table custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" data-checkbox-role="dad"
//                                                     className="custom-control-input" id="checkbox-all" />
//                                                 <label for="checkbox-all" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </th>
//                                         <th>Task Name</th>
//                                         <th>Members</th>
//                                         <th>Task Status</th>
//                                         <th>Assigh Date</th>
//                                         <th>Due Date</th>
//                                         <th>Priority</th>
//                                         <th>Action</th>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-0 text-center">
//                                             <div className="custom-checkbox custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
//                                                     id="checkbox-1" />
//                                                 <label for="checkbox-1" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </td>
//                                         <td>Create a mobile app</td>
//                                         <td className="text-truncate">
//                                             {/* <ul className="list-unstyled order-list m-b-0 m-b-0">
//                                                 <li className="team-member team-member-sm">
//                                                     <Image className="rounded-circle"
//                                                         src="/assets/image/users/user-8.png" alt="user" data-toggle="tooltip" title=""
//                                                         data-original-title="Wildan Ahdian" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-9.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="John Deo" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-10.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Sarah Smith" width={40} height={40} /></li>
//                                                 <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
//                                             </ul> */}
//                                         </td>
//                                         <td className="align-middle">
//                                             <div className="progress-text">50%</div>
//                                             <div className="progress" data-height="6">
//                                                 <div className="progress-bar bg-success" data-width="50%"></div>
//                                             </div>
//                                         </td>
//                                         <td>2018-01-20</td>
//                                         <td>2019-05-28</td>
//                                         <td>
//                                             <div className="badge badge-success">Low</div>
//                                         </td>
//                                         <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-0 text-center">
//                                             <div className="custom-checkbox custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
//                                                     id="checkbox-2" />
//                                                 <label for="checkbox-2" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </td>
//                                         <td>Redesign homepage</td>
//                                         <td className="text-truncate">
//                                             {/* <ul className="list-unstyled order-list m-b-0 m-b-0">
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-1.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Wildan Ahdian" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-2.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="John Deo" width={40} height={40} /></li>
//                                                 <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
//                                             </ul> */}
//                                         </td>
//                                         <td className="align-middle">
//                                             <div className="progress-text">40%</div>
//                                             <div className="progress" data-height="6">
//                                                 <div className="progress-bar bg-danger" data-width="40%"></div>
//                                             </div>
//                                         </td>
//                                         <td>2017-07-14</td>
//                                         <td>2018-07-21</td>
//                                         <td>
//                                             <div className="badge badge-danger">High</div>
//                                         </td>
//                                         <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-0 text-center">
//                                             <div className="custom-checkbox custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
//                                                     id="checkbox-3" />
//                                                 <label for="checkbox-3" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </td>
//                                         <td>Backup database</td>
//                                         <td className="text-truncate">
//                                             {/* <ul className="list-unstyled order-list m-b-0 m-b-0">
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-3.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Wildan Ahdian" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-4.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="John Deo" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-5.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Sarah Smith" width={40} height={40} /></li>
//                                                 <li className="avatar avatar-sm"><span className="badge badge-primary">+3</span></li>
//                                             </ul> */}
//                                         </td>
//                                         <td className="align-middle">
//                                             <div className="progress-text">55%</div>
//                                             <div className="progress" data-height="6">
//                                                 <div className="progress-bar bg-purple" data-width="55%"></div>
//                                             </div>
//                                         </td>
//                                         <td>2019-07-25</td>
//                                         <td>2019-08-17</td>
//                                         <td>
//                                             <div className="badge badge-info">Average</div>
//                                         </td>
//                                         <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-0 text-center">
//                                             <div className="custom-checkbox custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
//                                                     id="checkbox-4" />
//                                                 <label for="checkbox-4" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </td>
//                                         <td>Android App</td>
//                                         <td className="text-truncate">
//                                             {/* <ul className="list-unstyled order-list m-b-0 m-b-0">
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-7.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="John Deo" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-8.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Sarah Smith" width={40} height={40} /></li>
//                                                 <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
//                                             </ul> */}
//                                         </td>
//                                         <td className="align-middle">
//                                             <div className="progress-text">70%</div>
//                                             <div className="progress" data-height="6">
//                                                 <div className="progress-bar" data-width="70%"></div>
//                                             </div>
//                                         </td>
//                                         <td>2018-04-15</td>
//                                         <td>2019-07-19</td>
//                                         <td>
//                                             <div className="badge badge-success">Low</div>
//                                         </td>
//                                         <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-0 text-center">
//                                             <div className="custom-checkbox custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
//                                                     id="checkbox-5" />
//                                                 <label for="checkbox-5" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </td>
//                                         <td>Logo Design</td>
//                                         <td className="text-truncate">
//                                             {/* <ul className="list-unstyled order-list m-b-0 m-b-0">
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-9.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Wildan Ahdian" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-10.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="John Deo" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-2.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Sarah Smith" width={40} height={40} /></li>
//                                                 <li className="avatar avatar-sm"><span className="badge badge-primary">+2</span></li>
//                                             </ul> */}
//                                         </td>
//                                         <td className="align-middle">
//                                             <div className="progress-text">45%</div>
//                                             <div className="progress" data-height="6">
//                                                 <div className="progress-bar bg-cyan" data-width="45%"></div>
//                                             </div>
//                                         </td>
//                                         <td>2017-02-24</td>
//                                         <td>2018-09-06</td>
//                                         <td>
//                                             <div className="badge badge-danger">High</div>
//                                         </td>
//                                         <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
//                                     </tr>
//                                     <tr>
//                                         <td className="p-0 text-center">
//                                             <div className="custom-checkbox custom-control">
//                                                 <input type="checkbox" data-checkboxes="mygroup" className="custom-control-input"
//                                                     id="checkbox-6" />
//                                                 <label for="checkbox-6" className="custom-control-label">&nbsp;</label>
//                                             </div>
//                                         </td>
//                                         <td>Ecommerce website</td>
//                                         <td className="text-truncate">
//                                             {/* <ul className="list-unstyled order-list m-b-0 m-b-0">
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-8.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Wildan Ahdian" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-9.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="John Deo" width={40} height={40} /></li>
//                                                 <li className="team-member team-member-sm"><Image className="rounded-circle"
//                                                     src="/assets/image/users/user-10.png" alt="user" data-toggle="tooltip" title=""
//                                                     data-original-title="Sarah Smith" width={40} height={40} /></li>
//                                                 <li className="avatar avatar-sm"><span className="badge badge-primary">+4</span></li>
//                                             </ul> */}
//                                         </td>
//                                         <td className="align-middle">
//                                             <div className="progress-text">30%</div>
//                                             <div className="progress" data-height="6">
//                                                 <div className="progress-bar bg-orange" data-width="30%"></div>
//                                             </div>
//                                         </td>
//                                         <td>2018-01-20</td>
//                                         <td>2019-05-28</td>
//                                         <td>
//                                             <div className="badge badge-info">Average</div>
//                                         </td>
//                                         <td><a href="#" className="btn btn-outline-primary">Detail</a></td>
//                                     </tr>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Table;


