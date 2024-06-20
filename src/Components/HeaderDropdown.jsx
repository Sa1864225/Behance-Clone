import React from 'react'
import { Dropdown } from "flowbite-react";

const HeaderDropdown = ({type1,type2,value}) => {
  return (
        <>
            <Dropdown label={value} inline className='text-sm text-inline whitespace-nowrap' trigger='hover'> 
                    {
                        type1.map((item,index)=>{
                            return(
                                <Dropdown.Item key={index} className='hover:text-blue-600'>{item}</Dropdown.Item>
                            )
                        })
                    }
                    <hr />
                    {
                        type2.map((item,index)=>{
                            return(
                                <Dropdown.Item key={index} className='text-gray-500 font-small text-sm'>{item}</Dropdown.Item>
                            )
                        })
                    }
                  </Dropdown>
        </>
  )
}

export default HeaderDropdown
