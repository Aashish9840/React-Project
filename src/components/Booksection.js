import React from 'react'

const Booksection = () => {
    return (
        <div className='flex flex-col items-center justify-between p-8 lg:flex-row'>
            {/* left container */}
            <div className='flex flex-col mx-6 w-full'>
                <h1 className='font-bold text-[25px] '>LUXURY INCLUDED VACATIONS FOR TWO <br />PEOPLE</h1>
                <p className='text-[18px]'> Come experience the very pinnacle of luxury Caribbean all-inclusive
                    vacations for couples at BEACHES Resorts. Our luxury beach resorts,
                    set along the most gorgeous tropical settings and exquisite beaches
                    in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
                    Curaçao, feature unlimited gourmet dining, unique bars serving for people
                    premium liquors and wines, and every land and water sport, including
                    complimentary green fees at our golf resorts and certified scuba
                    diving at most resorts. If you are planning a wedding, BEACHES is
                    the leader in Caribbean destination weddings and honeymoon packages.</p>

            </div>
            {/* right container */}
            <div className='mt-12  w-full lg:mt-0'>
                <div className='flex flex-col items-center justify-center relative m-0 border-2 w-full'>
                    <h2 className='text-[18px] m-2'>GET AN ADDITIONAL 10% OFF <br />
                        <span className='text-[18px] mx-12'>12 HOURS LEFT</span></h2>
                    <h1 className='w-full p-2 rounded-[8px] text-white bg-black/90 text-[20] text-center mt-5'> BOOK NOW AND SAVE</h1>


                </div>
                <div className='flex flex-col w-full relative'>
                    <form className='block '>
                        <label className='block mt-3' htmlFor="desc">Destination</label>
                        <select className='w-full border-2 p-[5px] rounded-[5px]' name="desc" id="desc">
                            <option value="grande antigue">Grande Antigua</option>
                            <option value="key west">Key west</option>
                            <option value="maldives">Maldives</option>
                            <option value="nepal">Nepal</option>

                        </select>
                        <label className='block mt-5' htmlFor="checkin"> Check-In</label>
                        <input className='w-full border-2 p-[5px] rounded-[5px]' type="date" id="checkin" name="checkin"></input>

                        <label className='block mt-5' htt-5mlFor="checkout"> Check-Out</label>
                        <input className='w-full border-2 p-[5px] rounded-[5px]' type="date" id="checkout" name="checkout"></input>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booksection
