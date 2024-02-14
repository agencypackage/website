import Slider from 'react-infinite-logo-slider'

const Component = () => {
    
    return (
        <div className='bg-white py-[50px]'>
                    <Slider
            width="200px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/meta.png" alt="any" className='w-[120px]' />
            </Slider.Slide>

        </Slider>
        </div>

    )
}              
                     
export default Component