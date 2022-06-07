import styled from 'styled-components'

const ButtonWithIconContainer = styled.button`
  background-color: #7c5dfa;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;

  .icon {
    background-color: #ffffff;
    border-radius: 50%;
    margin-right: 1rem;
    padding: 1rem;
  }

  &:hover {
    background-color: #9277ff;
  }
`

export { ButtonWithIconContainer }
