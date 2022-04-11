import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
export default function ShowImages(props) {
  const photosArray = props.photosArray;
  return (
    <>

      <div className="grid grid-cols-4 gap-4 border-2  my-4 w-2/3 mx-4">
        {
          photosArray.map((photoDetails, idx) => {
            return (
              <>
                <Link href={{ pathname: `/comments/${idx}`, query: { object: JSON.stringify(photoDetails) } }}>
                  <Image src={photoDetails.thumbnailUrl} width={150} height={150} />
                </Link>
              </>

            )
          })
        }
      </div>
    </>

  )
}
