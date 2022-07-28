import styled from 'styled-components'

const styleBgColor = {
  primary: '#7c5dfa',
  danger: '#EC5757',
  grayLight: '#373B53',
  grayDark: '#373B53'
}

const styleBgHoverColor = {
  primary: '#9277ff',
  danger: '#FF9797',
  grayLight: '#0C0E16',
  grayDark: '#1E2139'
}

const ButtonContainer = styled.button`
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.3rem 2rem;

  &.primary {
    background-color: ${styleBgColor.primary};
    &:hover {
      background-color: ${styleBgHoverColor.primary};
    }
  }

  &.danger {
    background-color: ${styleBgColor.danger};
    &:hover {
      background-color: ${styleBgHoverColor.danger};
    }
  }

  &.gray-light {
    color: #888eb0;
    background-color: ${styleBgColor.grayLight};
    &:hover {
      background-color: ${styleBgHoverColor.grayLight};
    }
  }

  &.gray-dark {
    background-color: ${styleBgColor.grayDark};
    &:hover {
      background-color: ${styleBgHoverColor.grayDark};
    }
  }
`

export { ButtonContainer }
