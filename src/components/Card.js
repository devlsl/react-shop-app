import styled from 'styled-components'
import { Button } from './UI/Button'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

const StyledCard = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 40px;
  border-radius: 40px;
  padding: 1rem;
  padding-bottom: 1.8rem;
  display: flex;
  width: 200px;
  height: 280px;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  gap: 10px;

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
    /* border: none; */
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 6px;
  gap: 3px;

  p {
    font-size: 17px;
  }

  b {
    font-weight: 600;
    margin-top: 4px;

    span {
      font-weight: 400;
    }
  }
`

const CardFooter = styled.div``

export function Card({ path, title, price }) {
  return (
    <StyledCard>
      <img src={path} alt="sneakers" />
      <InfoWrapper>
        <p>{title}</p>
        <b>
          Цена: <span>{price} руб.</span>
        </b>
      </InfoWrapper>
      <CardFooter>
        <Button Icon={<AiOutlinePlus />} />
      </CardFooter>
    </StyledCard>
  )
}
