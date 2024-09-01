import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assets/logo.png'
import { Adults, Bedrooms, Children, Nights, Parking, Pets } from '../../assets/Icons'
import DialogPop from '../dialog/Dialog'
import { getData } from '../../service/service'
import { AuthContext } from '../../context/AuthContext'

const Body: React.FC = () => {

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthContextProvider");
  }

  const { token } = authContext;

  const [dataList, setDataList] = useState<any>([]);

  useEffect(() => {
    getData(token)
      .then(response => {
        setDataList(response.data)
        console.log(response)
      })
  }, [])

  const [open, setOpen] = useState<Boolean>(false)

  const style = {
    width: '1028px',
    height: '800px',
    gap: '0px',
    borderRadius: '30px',
    border: '0.7px',
  }

  return (
    <>
      <DialogPop open={open} close={() => setOpen(false)} />
      <div className='px-10 py-5 bg-[#FAFAFA] overflow-auto' style={style}>
        <div>
          <img src={Logo} alt="logo" className='w-[176px] h-[60.78px]' />
          <hr className='mt-[15px]' />
        </div>
        <p className='mt-[28px]' style={{ font: 'inter', fontWeight: '600', fontSize: '20px', lineHeight: '24.2px' }}>Service apartments</p>
        <div className='flex flex-col mt-[52px] w-full gap-[20px]'>

          {
            Object.values(dataList).map((item: any) => (
              <div key={item.id} className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-20 bg-white p-3 '>
                <div className='flex sm:block  justify-center'>
                  <div style={{ backgroundImage: `url(${item.website_image})`, borderRadius: '20px', backgroundSize: 'cover' }} className=' w-[184px] h-[165px] relative flex justify-center '>
                    <div className='bg-gray-200 w-[168px] h-[37px] rounded-[10px] absolute bottom-3 flex justify-center items-center font-[14px] text-[#0075FF]'><p>{item.website}</p></div>
                  </div>
                </div>
                <div className='flex flex-col justify-between sm:col-span-2 md:col-span-3 lg:col-span-4 gap-5'>
                  <div className='grid grid-flow-col sm:flex sm:justify-between w-full h-full '>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                      <div className='flex flex-col justify-between'>
                        <div>
                          <p className='text-[18px] font-[600]'>{item.property_name}</p>
                          <p className='text-[14px] font-[400] text-[#44505C]'>Property code : {item.property_code}</p>
                        </div>
                        <p className='text-[14px] font-[400] text-[#44505C]'>Check in: <span className='font-[600] text-[#252D36]'>{item.check_in}</span></p>
                      </div>
                      <div className='flex items-end'>
                        <p className='text-[14px] font-[400] text-[#44505C]'>Check out: <span className='font-[600] text-[#252D36]'>{item.check_out}</span></p>
                      </div>
                    </div>
                    <div className='flex flex-col justify-between items-center xs:items-end'>
                      <p className='text-[18px] font-[600] text-[#8C18FF]'>USD {item.price}</p>
                      <button className='text-white bg-[#F36F27] w-[88px] h-[37px] rounded-[8px]' onClick={() => setOpen(true)}>Select</button>
                    </div>
                  </div>
                  <hr />
                  <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[26px]'>
                    <div className='flex gap-1 items-center w-[89px] h-[34px]'>
                      <div className=''>
                        <Bedrooms />
                      </div>
                      <div>
                        <p>Bedrooms</p>
                        <p>{item.bedrooms}</p>
                      </div>
                    </div>
                    <div className='flex gap-1 items-center w-[89px] h-[34px]'>
                      <div className=''>
                        <Nights />
                      </div>
                      <div>
                        <p>Nights</p>
                        <p>{5}</p>
                      </div>
                    </div>
                    <div className='flex gap-1 items-center w-[89px] h-[34px]'>
                      <div className=''>
                        <Adults />
                      </div>
                      <div>
                        <p>Adults</p>
                        <p>{item.adults}</p>
                      </div>
                    </div>
                    <div className='flex gap-1 items-center w-[89px] h-[34px]'>
                      <div className=''>
                        <Children />
                      </div>
                      <div>
                        <p>Children</p>
                        <p>{item.children}</p>
                      </div>
                    </div>
                    <div className='flex gap-1 items-center w-[89px] h-[34px]'>
                      <div className=''>
                        <Parking />
                      </div>
                      <div>
                        <p>Parking</p>
                        <p>{item.parking}</p>
                      </div>
                    </div>
                    <div className='flex gap-1 items-center w-[89px] h-[34px]'>
                      <div className=''>
                        <Pets />
                      </div>
                      <div>
                        <p>Pets</p>
                        <p>{item.pets}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>

  )
}

export default Body