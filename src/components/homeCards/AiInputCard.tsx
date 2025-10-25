import AiInput from '../ui/ai-input'
import BadgeButton from '../ui/badge-button'

const AiInputCard = () => {
    return (

        <div className='w-[61.5%] p-2 my-20 rounded-3xl shadow bg-white mx-auto'>
                <div className='h-full p-6 bg-[#f4f4f4] shadow rounded-3xl mx-auto'>
                    
                <BadgeButton>Latest Component</BadgeButton>
                <AiInput />
            </div>
        </div>

    )
}

export default AiInputCard