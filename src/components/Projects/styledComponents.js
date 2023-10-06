import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
`

export const Select = styled.select`
  height: 40px;
  width: 30%;
  font-family: 'Roboto';
  font-weight: bold;
  border-radius: 8px;
  margin-top: 60px;
  margin-left: 40px;
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 40px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
`
export const FailureView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  height: 70vh;
`
export const FailureImage = styled.img`
  height: 50%;
  width: 50%;
  margin: 0px;
  padding: 0px;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 6px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-weight: 500;
  font-size: 18px;
  padding-top: 10px;
  margin-top: 0px;
`
export const Button = styled.button`
  height: 40px;
  border: 0px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4656a1;
  width: 120px;
  border-radius: 6px;
`
