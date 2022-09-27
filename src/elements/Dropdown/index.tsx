import React, { Dispatch, SetStateAction, useCallback, useState } from 'react'
import { Wrap, DropdownBtn, Items } from './styles'
import Image from 'next/image'

interface DropdownProps<T = any> {
  long?: boolean
  items: string[]
  children: React.ReactNode
  setState?: Dispatch<SetStateAction<T>>
}

/**
 * @param long: boolean (길고 얇은 드롭박스: true, 뭉뚱한 드롭박스: false)
 * @param items: string[] 클릭 이벤트시 리스트
 * @param children: string 버튼 자체 텍스트
 * @param setState (optional) setState 함수
 * @constructor
 */

const Dropdown = ({ long, items, children, setState }: DropdownProps) => {
  const [showItem, setShowItem] = useState<boolean>(false)

  const toggleShow = useCallback(() => {
    setShowItem((prev) => !prev)
  }, [])

  const selectQueueType = useCallback((queueType: string) => {
    setShowItem(false)
    if (setState) {
      setState(queueType)
      localStorage.setItem('match', queueType)
    }
  }, [])

  return (
    <Wrap>
      <DropdownBtn onClick={toggleShow} long={long}>
        <div className="flex-sb">
          <span className="queue">{children}</span>
          <Image className="icon" src="/svg/Polygon3.svg" width={10} height={6} alt="hi" />
        </div>
      </DropdownBtn>

      {showItem && (
        <Items height={items.length}>
          {items.map((v: any, i: number) => {
            return (
              <div key={i} onClick={() => selectQueueType(v)}>
                {v}
              </div>
            )
          })}
        </Items>
      )}
    </Wrap>
  )
}

export default Dropdown
