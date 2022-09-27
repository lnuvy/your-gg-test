import React from 'react'
import SkeletonBox from '@components/SkeletonBox'

const BottomSkeleton = () => {
  return (
    <>
      {[...Array(4)].map((_, i) => {
        return (
          <tr key={i}>
            <td colSpan={6}>
              <SkeletonBox width={316} height={36} />
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default BottomSkeleton
