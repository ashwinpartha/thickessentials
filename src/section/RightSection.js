import React from 'react'
import BuyNowButton from '../components/BuyNowButton'
import IncrementButton from '../components/IncrementButton';
const RightSection = () => {
  return (
    <div className='p-6'>
        <div>
        <h1 className='text-2xl font-[700]'>Thick Essentials Long Hair Oil Name</h1>
        <p className='text-sm'>Best affects on hair oil and other parts</p>
        <h2 className='text-2xl mt-2'>$49</h2>
        <hr className='mt-4'></hr>
        </div>
        <div className='pt-5'>
            <p className='text-l '>
            A lightweight under-eye cream swiftly combats dark circles, puffiness, and fine lines with a quick-absorbing, non-tacky formula. Vitamin K diminishes dark circles, Caffeine reduces puffiness, and Retinal enhances skin texture.
            </p>
            <div className='mt-5 mb-5 flex'>
            <IncrementButton/>
            <div className='pl-8'>
            <BuyNowButton/>
            </div>
            
            </div>
            
        </div>
        <div className='py-6'>
            <div className='pt-3'>
            <p className='text-l font-normal'>What makes us unique?</p>
            <div className='pl-5'>
               <ul className='list-disc gap'>
                <li className='pt-3'>Vitamin K, a potent ally in tackling dark circles, effectively combats under-eye discoloration and fortifies fragile blood vessels, contributing to a reduction in dark circles
</li>
        <li className='pt-5'>Retinal, positioned as the intermediate stage in the conversion from retinol to retinoic acid, showcases remarkable anti-aging attributes. These include the reduction of fine lines & dark circles, all while being significantly better tolerated than Retinoic acid.</li>
        <li className='pt-5'>The trio of Dipeptide-2, Palmitoyl Tetrapeptide-7, and Hesperidin Methyl Chalcone collaborates to reduce capillary permeability, boost lymphatic flow, and mitigate inflammation, resulting in a smoother under-eye area</li>
        <li className='pt-5'>Palmitoyl Tripeptide-1 and Palmitoyl Tetrapeptide-7, working in tandem, enhance under-eye firmness and contribute to an even skin tone, rejuvenating the under-eye appearance</li>
        <li className='pt-5'>To comprehensively address dark circles, our formulation incorporates Chrysin, N-hydroxysuccinimide, and Zerumbone, targeting and eliminating the root causes of these under-eye concerns. This multi-pronged approach leaves your under-eye area feeling refreshed and visibly brighter</li>
        <li className='pt-5'>All our ingredients are sourced from leading global suppliers. Our high purity grade Vitamin K is sourced from Mckinely, USA.</li>
               </ul>
            </div>
            </div>
        </div>
        <hr className='mt-4'></hr>
        <h1 className='text-l font-bold mt-5'>About us</h1>
        <p className='mt-2'>A lightweight under-eye cream swiftly combats dark circles, puffiness, and fine lines with a quick-absorbing, non-tacky formula. Vitamin K diminishes dark circles, Caffeine reduces puffiness, and Retinal enhances skin texture.</p>
        

    </div>
  )
}

export default RightSection