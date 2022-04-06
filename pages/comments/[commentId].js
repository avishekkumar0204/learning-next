import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
export default function commentPage() {
    const [comments, setComments] = useState([]);
    const [cmtId, setCmtId] = useState();
    const router = useRouter();
    console.log(router);
    const fun = () => {

        let postId = parseInt(router.query.commentId) + 1;
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

        axios.get(url).then((response) => {
            const commentArray = (response.data).map((commentDetails) => {
                return commentDetails["body"];
            })
            setComments(commentArray);

        })
    }

    useEffect(() => {
        if (!cmtId)
            return;
        fun();
    }, [cmtId]);

    useEffect(() => {
        setCmtId(router.query.commentId);
    }, [router.query.commentId]);



    return (
        <>
            <div>Commentpage</div>
            {
                comments.map((comment) => {
                    return <div className='border-2 py-1'>{comment}</div>
                })
            }
        </>

    )
}
