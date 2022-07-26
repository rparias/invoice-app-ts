import styled from 'styled-components'

type Props = {
  styleButton: string
}

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

const ButtonContainer = styled.button<Props>`
  background-color: ${(props) => styleBgColor[props.styleButton as keyof typeof styleBgColor]};
  color: ${(props) => (props.styleButton === 'light' ? '#888EB0' : '#ffffff')};
  cursor: pointer;
  border: none;
  border-radius: 3rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.3rem 2rem;

  &:hover {
    background-color: ${(props) =>
      styleBgHoverColor[props.styleButton as keyof typeof styleBgHoverColor]};
  }
`

export { ButtonContainer }
