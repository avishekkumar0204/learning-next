import React from 'react'

export default function ChatBox(props) {

    const photosArray = props.photosArray;
    let names = photosArray.map((photo) => {
        let title = photo.title;
        return title.substr(0, 10);
    })

    return (
        <div className='border-2 w-1/3 h-screen overflow-auto my-4' >
            <div className='text-center text-lg border-2 text-orange-700'>Chat</div>
            {
                names.map((ele) => {
                    return <div className=' border-2 py-1 px-6  '>{ele}</div>
                })
            }
        </div>
    )
}
