import React, { ChangeEvent } from 'react'
import styled from '@emotion/styled'

interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  submitEvent: () => void
}

const InputTag = ({ value, onChange, submitEvent }: InputProps) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      onKeyPress={(e) => {
        if (e.key === 'Enter') submitEvent()
      }}
    />
  )
}

const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  flex: 1;
  margin: 0 15px;
  padding: 0;
  font-size: ${({ theme }) => theme.font.font13};
  font-weight: 600;
`

export default InputTag
