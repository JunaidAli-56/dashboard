import React from 'react'
import "./projectBar.scss"

const data = [
    {
        id: 1,
        title: "project Task",
        priority: "low",
        desc: "networking issue",
    },
    {
        id: 2,
        title: "Mam",
        priority: "high",
        desc: "network issue",
    },
]
const ProjectBarComponent = () => {
    return (
        <div className='container-fluid bg-white rounded-3 px-4 py-3'>
            <div className='row rounded-3 px-4 py-1 taskRowStyle'>
                <div className='col-12 py-2   d-flex justify-content-between align-items-center'>
                    <div className='fw-bold fs-5'>
                        Id
                    </div>
                    <div className='fw-bold fs-5'>
                        Name
                    </div>
                    <div className='fw-bold fs-5'>
                        priorty
                    </div>
                    <div className='fw-bold fs-5'>
                        description
                    </div>
                </div>
            </div>

            {/* data row */}
            {data.map((item) => {
                return (
                    <div className='row bg-white rounded-3 px-4 py-1 mt-4 dataRowStyle' key={item.id}>
                        <div className='col-12 py-1 d-flex justify-content-between align-items-center'>
                            <div className='fs-5'>
                                {item.id}
                            </div>
                            <div className='fs-5'>
                                {item.title}
                            </div>
                            <div className='fs-5'>
                                {item.priority}
                            </div>
                            <div className='fs-5'>
                                {item.desc}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectBarComponent