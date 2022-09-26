import React, { useCallback, useState } from 'react'
import { Wrap, DropdownBtn, Items } from './styles'
import Image from 'next/image'

const Dropdown = ({ items, children, setState }: any) => {
  const [showItem, setShowItem] = useState<boolean>(false)
  const [current, setCurrent] = useState(children)

  const toggleShow = useCallback(() => {
    setShowItem((prev) => !prev)
  }, [])

  const selectQueueType = useCallback((queueType: string) => {
    setCurrent(queueType)
    setState(queueType)
    setShowItem(false)
  }, [])

  return (
    <Wrap>
      <DropdownBtn onClick={toggleShow}>
        <div className="flex-sb">
          <span className="queue">{current}</span>
          <Image
            className="icon"
            src="/svg/Polygon3.svg"
            width={10}
            height={6}
            alt="hi"
          />
        </div>
      </DropdownBtn>

      {showItem && (
        <Items>
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
