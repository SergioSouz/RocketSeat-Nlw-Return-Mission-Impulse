import { ArrowLeft, Camera } from "phosphor-react"
import { CloseButton } from "../CloseButton"
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FreedbackContentStepProps {
   feedbackType: FeedbackType;
   onFeedbackRestartRequested: () => void;
}


export function FreedbackContentStep({
   feedbackType,
   onFeedbackRestartRequested
}: FreedbackContentStepProps) {

   const feedbackTypeInfo = feedbackTypes[feedbackType]

   return (

      <>
         <header >

            <button
               type="button"
               className="top-5  left-5 absolute text-zinc-400 hover:text-zinc-100 "
               onClick={onFeedbackRestartRequested}
            >
               <ArrowLeft weight="bold" className="w-4 h-4" />

            </button>



            <span className='text-xl leading-6 flex items-center gap-2'>

               <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
               {feedbackTypeInfo.title}
            </span>

            <CloseButton />

         </header>

         <form className=" my-4 w-full">
            <textarea
               className="min-w[304px] w-full min-h-[122px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-50 focus:ring-brand-500  focus:right-1 focus: autline resize-none scrollbar-trumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
               placeholder="Conte com detalhes o que está acontecendo..."
            />
            <footer className=" flex gap-2 mt-2">
               <button
                  type="button"
                  className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:altline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
               >
                  <Camera className="w-6 h-6" />

               </button>


               <button
                  type="submit"
                  className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:altline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
               >
                  Enviar feedback
               </button>
            </footer>
         </form>

      </>



   )

}