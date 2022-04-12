import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function ShowImages(props) {
  const photosArray = props.photosArray;
  const router = useRouter();

  return (
    <>

      <div className="grid grid-cols-4 gap-4 border-2  my-4 w-2/3 mx-4">
        {
          photosArray.map((photoDetails, idx) => {
            return (
              <>

                <div className="cursor:pointer" onClick={() => {
                  router.push({
                    pathname: `/comments/${idx}`,
                    query: { url: photoDetails["url"] }
                  })
                }}>
                  <Image src={photoDetails.thumbnailUrl} width={150} height={150} />
                </div>
              </>

            )
          })
        }
      </div>
    </>

  )
}

