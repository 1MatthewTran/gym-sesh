import React, { useState } from 'react'
import './AuthPopup.css'
import logo from '@/assets/logo.png'
import Image  from 'next/image'
import { Input } from '@mui/joy'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


const AuthPopup = () => {
  const [showSignup, setShowSignup] = useState<boolean>(false)

  const handleLogin = () =>{
  }
  const handleSignup = () =>{
}
  return (
    <div className='popup'>
      {
        showSignup ? (
            <div className='authform'>
                <div className='left'>
                    <Image src={logo} alt='logo'/>
                </div>
                <div className='right'>
                    <h1>Login to become strong</h1>
                    <form action=''>
                        <Input
                          color='neutral'
                          placeholder='email'
                          size='lg'
                          variant='outlined'
                        />
                        <Input
                          color='neutral'
                          placeholder='password'
                          size='lg'
                          variant='outlined'
                          type='password'
                        />

                        <div className='form_input_leftright'>
                            <Input
                            placeholder='Age'
                            variant='outlined'
                            type='number'
                            size='lg'
                            />
                            <Input
                            size='lg'
                            placeholder='Weight'
                            variant='outlined'
                            type='number'
                            />
                        </div>
                        <Select
                            placeholder="Gender"
                            size="lg"
                            variant="outlined"
                        >
                            <Option value={'male'}>Male</Option>
                            <Option value={'female'}>Female</Option>
                            <Option value={'other'}>Other</Option>
                        </Select>
                        <br></br>
                        <label htmlFor=''>Height</label>
                        <div className='form_input_leftright'>
                            <Input
                            color='neutral'
                            placeholder='ft'
                            size='lg'
                            variant='outlined'
                            type='number'
                            />
                            <Input
                            color='neutral'
                            placeholder='in'
                            size='lg'
                            variant='outlined'
                            type='number'
                            />
                        </div>
                        <button onClick={()=>{
                            handleSignup()
                        }} >Signup</button>
                    </form>
                    <p>Already have an account? <button onClick={()=>{
                        setShowSignup(false)
                }}>Login</button></p>
                </div>
                
            </div>
        ): (
            <div className='authform'>
                <div className='left'>
                    <Image src={logo} alt='logo'/>
                </div>
                <div className='right'>
                    <h1>Login to become strong</h1>
                    <form action=''>
                        <Input
                          color='neutral'
                          placeholder='email'
                          size='lg'
                          variant='outlined'
                        />
                        <Input
                          color='neutral'
                          placeholder='password'
                          size='lg'
                          variant='outlined'
                          type='password'
                        />
                        <button onClick={()=>{
                            handleLogin()
                        }} >Login</button>
                    </form>
                    <p>Dont have an account? <button onClick={()=>{
                        setShowSignup(true)
                }}>Signup</button></p>
                </div>
                
            </div>
        )
      }
    </div>
  )
}

export default AuthPopup
