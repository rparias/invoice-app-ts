import styled from 'styled-components'

const styleBgColor = {
  primary: '#7c5dfa',
  danger: '#EC5757',
  light: '#373B53',
  dark: '#373B53'
}

const styleBgHoverColor = {
  primary: '#9277ff',
  danger: '#FF9797',
  light: '#0C0E16',
  dark: '#1E2139'
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

  &.light {
    color: #888eb0;
    background-color: ${styleBgColor.light};
    &:hover {
      background-color: ${styleBgHoverColor.light};
    }
  }

  &.dark {
    background-color: ${styleBgColor.dark};
    &:hover {
      background-color: ${styleBgHoverColor.dark};
    }
  }
`

export { ButtonContainer }
