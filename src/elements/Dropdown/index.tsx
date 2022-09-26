import React, { useCallback, useState } from 'react'
import { Wrap, DropdownBtn, Items } from './styles'
import Image from 'next/image'

/**
 * @param long: boolean (길고 얇은 드롭박스: true, 뭉뚱한 드롭박스: false)
 * @param items: string[] 클릭 이벤트시 리스트
 * @param children: string 버튼 자체 텍스트
 * @param setState (optional) setState 함수
 * @constructor
 */

// TODOS: 타입 고치기!
const Dropdown = ({ long, items, children, setState }: any) => {
  const [showItem, setShowItem] = useState<boolean>(false)
  const [current, setCurrent] = useState(children)

  const toggleShow = useCallback(() => {
    setShowItem((prev) => !prev)
  }, [])

  const selectQueueType = useCallback((queueType: string) => {
    setCurrent(queueType)
    setShowItem(false)
    if (setState) setState(queueType)
  }, [])

  return (
    <Wrap>
      <DropdownBtn onClick={toggleShow} long={long}>
        <div className="flex-sb">
          <span className="queue">{current}</span>
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
