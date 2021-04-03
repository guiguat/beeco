import styled from '../../styles/styled-components'

export const Container = styled.View`
  padding-top: ${(props) => props.theme.padding};
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.white};
`
export const Content = styled.View`
  align-items: flex-end;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const Bee = styled.Image`
  resize-mode: contain;
  height: 92px;
  width: 82px;
`
export const TextWrapper = styled.View`
  text-align: left;
  margin-top: 12px;
  justify-content: flex-start;
`

export const HexBubble = styled.Image`
  resize-mode: contain;
  width: 200px;
  position: absolute;
  top: -64px;
  right: -78px;
  transform: scaleX(-1) rotate(-128deg);
`
