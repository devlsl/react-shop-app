import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

const animateOverlay = keyframes`
from {  
    background-color: transparent;
    backdrop-filter: blur(0px);
  }
  to {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  /* animation: ${animateOverlay} 0.2s ease-in-out; */
`

const animateModal = keyframes`
  from {
    right: -400px;
  }
  to {
    right: 0px;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 400px;
  z-index: 2;
  background: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* animation: ${animateModal} 0.2s ease-in-out; */
`

export function Cartpage() {
  return (
    <>
      <Overlay />
      <Modal>Карзина</Modal>
    </>
  )
}
