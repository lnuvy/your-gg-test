import React from 'react'
import styled from '@emotion/styled'
import { LeftContent } from '@components/TopInfo/styles'
import SkeletonBox from '@components/SkeletonBox'

const TopInfoSkeleton = () => {
  return (
    <Wrap>
      <div className="flex-sb">
        <LeftContent>
          <SkeletonBox width={100} height={22} margin="4px 0" />
          <SkeletonBox width={100} height={22} margin="4px 0" />
          <SkeletonBox width={100} height={22} margin="4px 0" />
        </LeftContent>

        <SkeletonBox width={180} height={90} margin="0" />
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 90px;
  margin: 50px 0;
`
export default TopInfoSkeleton
