import React, { ErrorInfo } from 'react'
import Link from 'next/link'
import { AxiosError } from 'axios'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  fallback: React.ReactNode
}

interface State {
  hasError: boolean
  message: string
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    message: '',
  }

  static getDerivedStateFromError(): State {
    return { hasError: true, message: '' }
  }

  componentDidCatch(error: AxiosError, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Error Boundary:', error, errorInfo)
    console.log(error.response!.data)
    let data: any
    data = Object.assign({}, error.response!.data)

    this.setState((prev) => {
      return { ...prev, message: data.message }
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrap>
          <h2>검색하신 소환사명을 찾을 수 없습니다. :(</h2>
          <h5>{this.state.message}</h5>
          <Link href="/">
            <Button onClick={() => this.setState({ hasError: false, message: '' })}>다시 검색하기</Button>
          </Link>
        </Wrap>
      )
    }
    return this.props.children
  }
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto 0;
`

const Button = styled.button`
  cursor: pointer;
  width: 120px;
  height: 44px;
  background: #fff;
  font-size: ${({ theme }) => theme.font.font11};
  font-weight: 700;
  line-height: 15px;
  padding: 0;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background: ${({ theme }) => theme.palette.color2};

  &:hover {
    background-color: ${({ theme }) => theme.palette.color4};
    cursor: pointer;
  }
`
