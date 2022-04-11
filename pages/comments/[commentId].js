import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
export default function commentPage() {
    const [comments, setComments] = useState([]);
    const router = useRouter();
    let commentID = router.query.commentId;
    const [pic,setPic]=useState();
    const getComments = () => {
        let postId = parseInt(commentID) + 1;
        setPic((JSON.parse(router.query.object))["url"]);
        console.log(pic);
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

        axios.get(url).then((response) => {
            const commentArray = (response.data).map((commentDetails) => {
                return commentDetails["body"];
            })
            setComments(commentArray);

        })
    }

    useEffect(() => {
        if (!commentID)
            return;
        getComments();
    }, [commentID]);






    return (
        <>
            <div className="flex flex-col">


                {/* <div >
                    <Image src={pic}  width={200} height={200}/>
                </div> */}


                <div className='px-4'>
                    {
                        comments.map((comment) => {
                            return <div className='border-2 py-1'>{comment}</div>
                        })
                    }
                </div>
            </div>
        </>

    )
}
