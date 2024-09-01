'use client'

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Icon, X } from '../../assets/Icons'

const DialogPop = ({ open, close }) => {

    return (
        <Dialog open={open} onClose={close} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[400px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className='flex flex-col justify-center items-center p-5 gap-5'>
                            <div className=' relative flex justify-center'>
                                <span className="relative flex h-3 w-3 p-1">
                                    <span className="animate-ping absolute inline-flex rounded-full bg-sky-400 opacity-75"><Icon /></span>
                                    <span className="relative inline-flex rounded-full"><Icon /></span>
                                </span>
                            </div>
                            <div>
                                <div className='text-[18px] font-[600] mt-7 text-center'>Confirm your selection</div>
                                <div className='text-center text-[14px]'>Are you sure you want to submit property selection to the Vivrestays ? This action cannot be undone.</div>
                            </div>
                            <div className='flex justify-between w-full gap-[12px]'>
                                <button className='w-[170px] h-[44px] text-center rounded-[8px] border-spacing-1 border-solid border-2 border-[#D0D5DD]'>Cancel</button>
                                <button className='w-[170px] h-[44px] text-center bg-[#06B231] rounded-[8px] text-white'>Submit</button>
                            </div>
                            <span className='absolute top-0 right-0 m-3'><X /></span>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}


export default DialogPop