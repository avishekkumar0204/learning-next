import React from 'react';
import Image from 'next/image';

export default function commentPage({ comments, image }) {





    return (
        <>
            <div className="flex">
                <Image src={image} width={600} height={600} className="my-4"/>
                <div className="flex flex-col p-4">
                    {
                        comments.map((comment) => {
                            return (<>
                                
                                <div className="py-2">{comment}</div>
                                <hr />
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>

    )
}


export async function getServerSideProps(req) {


    const commentID = req.query["commentId"];
    const imageUrl = req.query["url"];
    const postId = parseInt(commentID) + 1;
    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const commentData = await commentResponse.json();
    const commentsArray = commentData.map((photoDetails) => photoDetails["body"]);



    return {
        props: {
            comments: commentsArray,
            image: imageUrl
        }
    }
}

