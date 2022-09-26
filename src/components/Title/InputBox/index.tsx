import React, { useState } from 'react'
import { InputWrap } from './styles'
import Dropdown from '@elements/Dropdown'
import { langArray } from '@constant/Queue'
import InputTag from '@elements/InputTag'
import SearchSvg from '@components/Title/InputBox/SearchSvg'
import { useInput } from '@hooks/useInput'
import { useRouter } from 'next/router'

const InputBox = () => {
  const router = useRouter()

  const [currentLanguage, setCurrentLanguage] = useState('KR')
  const [search, onChangeSearch, setSearch] = useInput('')

  const onClickFind = () => router.push(`/${search}`)

  return (
    <InputWrap>
      <Dropdown items={langArray}>{currentLanguage}</Dropdown>
      <InputTag value={search} onChange={onChangeSearch} submitEvent={onClickFind} />
      <SearchSvg onClick={onClickFind} />
    </InputWrap>
  )
}

export default InputBox
