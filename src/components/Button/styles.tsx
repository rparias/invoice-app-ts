import styled from 'styled-components'

const styleBgColor = {
  primary: '#7c5dfa',
  danger: '#EC5757',
  white: '#F9FAFE',
  black: '#252945',
  grayLight: '#373B53',
  grayDark: '#373B53'
}

const styleBgHoverColor = {
  primary: '#9277ff',
  danger: '#FF9797',
  white: '#DFE3FA',
  black: '#FFFFFF',
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

  &.white {
    color: #7e88c3;
    background-color: ${styleBgColor.white};
    &:hover {
      background-color: ${styleBgHoverColor.white};
    }
  }

  &.black {
    background-color: ${styleBgColor.black};
    &:hover {
      color: #dfe3fa;
      background-color: ${styleBgHoverColor.black};
    }
  }

  &.large {
    padding: 1.3rem 8rem;
  }
`

export { ButtonContainer }
