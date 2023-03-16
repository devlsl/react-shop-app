import { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Button } from '../components/UI/Button'
import { ColBox } from '../components/UI/ColBox'
import { Input } from '../components/UI/Input'
import { useAuth } from '../hooks/useAuth'
import { addUser } from '../serverMethods/addUser'
import { isThereUserByPhone } from '../serverMethods/isThereUserByPhone'

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  *:focus {
    outline: 1px solid blue !important;
  }
`

const StatusBlock = styled.div`
  ${(props) =>
    props.success
      ? css`
          color: rgb(255, 255, 255);

          /* border: 2px solid rgb(155, 222, 166); */
          background-color: rgb(181, 232, 190);
          box-shadow: 0 0 4px 2px rgb(181, 232, 190);
        `
      : css`
          color: rgba(0, 0, 0, 0.7);
          /* border: 2px solid rgb(255, 201, 201); */
          background-color: rgb(255, 227, 227);
          box-shadow: 0 0 4px 2px rgb(255, 227, 227);
        `}

  border-radius: 5px;
  padding: 4px;
`

const LoginInput = styled(Input)`
  padding: 16px 10px;
`

const LoginButton = styled(Button)``

const RegisterButton = styled(Button)`
  background: rgba(211, 214, 0, 0.6);

  :hover {
    background-color: rgba(211, 214, 0, 0.8);
  }

  :active {
    background-color: rgba(211, 214, 0, 0.9);
  }
`

export function Loginpage() {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'
  const { signIn, user } = useAuth()

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const phoneChangeHandler = (e) => setPhone(e.target.value)
  const passwordChangeHandler = (e) => setPassword(e.target.value)

  const [status, setStatus] = useState(null)

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    const eventType = e.nativeEvent.submitter.value
    const phone = e.target.phone.value
    const password = e.target.password.value

    if (!phone || !password) {
      setStatus({ success: false, message: 'Заполните все поля' })
      return
    }

    if (eventType === 'signIn') {
      try {
        await signIn({ phone, password })
        setStatus({ success: true, message: 'Вход выполнен успешно' })
      } catch {
        setStatus({ success: false, message: 'Неверный телефон или пароль' })
      }
    }

    if (eventType === 'signUp') {
      const isThereUser = await isThereUserByPhone(phone)
      if (isThereUser) {
        setStatus({
          success: false,
          message: 'Пользователь с таким телефоном уже зарегистрирован'
        })
        return
      }
      await addUser(phone, password)
      setStatus({
        success: true,
        message: 'Регистрация прошла успешно'
      })
      await signIn({ phone, password })
    }
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(fromPage, { replace: true })
      }, 1000)
    }
  }, [user])

  return (
    <form onSubmit={formSubmitHandler}>
      <StyledLoginPage>
        <ColBox gap="30px">
          <ColBox gap="20px">
            <ColBox gap="20px">
              <LoginInput
                disabled={user ? true : false}
                type="tel"
                name="phone"
                placeholder="телефон"
                value={phone}
                onChange={phoneChangeHandler}
              />
              <LoginInput
                disabled={user ? true : false}
                type="password"
                name="password"
                placeholder="пароль"
                value={password}
                onChange={passwordChangeHandler}
              />
            </ColBox>
            {status && (
              <StatusBlock success={status.success}>
                {status.message}
              </StatusBlock>
            )}
          </ColBox>
          <ColBox gap="12px">
            <RegisterButton
              disabled={user ? true : false}
              value="signUp"
              type="submit"
              tabIndex="1"
            >
              Зарегистрироваться
            </RegisterButton>
            <LoginButton
              disabled={user ? true : false}
              value="signIn"
              type="submit"
            >
              Войти
            </LoginButton>
          </ColBox>
        </ColBox>
      </StyledLoginPage>
    </form>
  )
}
