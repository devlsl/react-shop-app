import styled, { css } from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 8;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  ${(props) =>
    props.childCenter &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`

const ContentWrapper = styled.div`
  position: fixed;
  z-index: 9;
  width: ${(props) => props.width || '400px'};
  background: ${(props) => props.background || 'white'};
  border-radius: ${(props) => props.radius || '20px'};
  overflow: scroll;

  ${(props) => {
    if (props.stick === 'right') {
      return css`
        top: 0;
        bottom: 0;
        right: 0;

        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
    }
    if (props.stick === 'left') {
      return css`
        top: 0;
        bottom: 0;
        left: 0;

        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
    }
    if (props.stick === 'center') {
      return css`
        height: ${(props) => props.height || '400px'};
      `
    }
  }}
`

export function Modal({ isOpen, close, children, uiOptions }) {
  if (!isOpen) {
    return null
  }

  uiOptions.stick = uiOptions.stick ?? 'center'

  return (
    <Overlay
      onClick={close}
      childCenter={uiOptions.stick === 'center' ? true : false}
    >
      <ContentWrapper onClick={(e) => e.stopPropagation()} {...uiOptions}>
        {children}
      </ContentWrapper>
    </Overlay>
  )
}
