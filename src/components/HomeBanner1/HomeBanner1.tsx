import React, { useEffect } from 'react'
import { CircularProgress } from '@mui/joy'
import { AiOutlineEye } from 'react-icons/ai'
import './HomeBanner1.css'
import { useState } from 'react'
const HomeBanner1 = () => {
    const[data, setData] = useState<any>(null)

    const getData = async () => {
        let temp = [
            {
              "name": "Object 1",
              "value": 10,
              "unit": "units",
              "goal": 20,
              "goalunit": "units"
            },
            {
              "name": "Object 2",
              "value": 15,
              "unit": "items",
              "goal": 30,
              "goalunit": "items"
            },
            {
              "name": "Object 3",
              "value": 25,
              "unit": "pieces",
              "goal": 50,
              "goalunit": "pieces"
            },
            {
              "name": "Object 4",
              "value": 5,
              "unit": "widgets",
              "goal": 15,
              "goalunit": "widgets"
            },
            {
              "name": "Object 5",
              "value": 18,
              "unit": "gadgets",
              "goal": 25,
              "goalunit": "gadgets"
            },
            {
              "name": "Object 6",
              "value": 12,
              "unit": "items",
              "goal": 20,
              "goalunit": "items"
            }
          ]
        setData(temp)
    }

    useEffect(()=>{
        getData()
    }, [])

    function simplifyFraction(numerator: number, denominator:number): [number, number]{
        function gcd(a: number, b: number): number{
            return b === 0 ? a : gcd(b, a % b);
        }
        const commonDivisor: number = gcd(numerator, denominator)
        const simplifiedNumerator: number = numerator/ commonDivisor;
        const simplifiedDenominator: number = denominator / commonDivisor;

        return[simplifiedNumerator, simplifiedDenominator]
    }

  return (
    <div className='meters'>
        {
            data?.length >0  && data.map((item:any, index:number)=>{
                return(
                    <div className='card' key={index}>
                        <div className='card-header'>
                            <div className= 'card-header-box'>
                                <div className= 'card-header-box-name'>{item.name}</div>
                                <div className= 'card-header-box-name'>{item.value} {item.unit}</div>
                            </div>
                            <div className= 'card-header-box'>
                                <div className= 'card-header-box-name'>Target</div>
                                <div className= 'card-header-box-name'>{item.goal} {item.goalunit}</div>
                            </div>
                        </div>
                        <CircularProgress
                            color="neutral"
                            determinate
                            variant="solid"
                            size='lg'
                            value={(item.value/item.goal)*100}
                        >
                            <p className='textincircle'>
                            {
                            simplifyFraction(item.value, item.goal)[0] + '/' + simplifyFraction(item.value, item.goal)[1]
                            }
                            </p>
                        </CircularProgress>
                        <button> Show Report <AiOutlineEye/></button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default HomeBanner1
