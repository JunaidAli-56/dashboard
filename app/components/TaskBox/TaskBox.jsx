"user client"
import React from 'react'
import './taskBox.scss';
import Image from 'next/image';
import { Card } from "@nextui-org/react";

const data = [
    {
        id: 1,
        title: "Project",
        number: 258,
        img: "/assets/img/banner/3.png"
    },
    {
        id: 2,
        title: "Customers",
        number: 1287,
        img: "/assets/img/banner/2.png"
    },
    {
        id: 3,
        title: "Revenue",
        number: "$48.780",
        img: "/assets/img/banner/1.png"
    },
    {
        id: 2,
        title: "Booking",
        number: 258,
        img: "/assets/img/banner/4.png"
    },

]
const TaskBox = () => {
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <div className="col-sm-12 col-md-6 col-lg-3 my-2" key={item.id}>
                            <Card isPressable isHoverable>
                                <div className='container card-container  bg-white p-3' >
                                    <div className="row content-row">
                                        <div className="col-7 content-col py-1 ps-3">
                                            <h4 className='fs-4 text-warning fw-medium fw-bold'>{item.title}</h4>
                                            <p className='fw-bold px-1 text-muted fs-5 mt-3'>{item.number}</p>
                                        </div>
                                        <div className="col-5 card-image-box">
                                            <Image src={item.img} alt=""
                                                className='card-image' width={100} height={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )
                })
            }

        </>
    )
}

export default TaskBox