import { useState } from 'react'



import bugImageUrl from "../../assets/images/Bug.svg"
import ideaImageUrl from "../../assets/images/Idea.svg"
import thoughtImageUrl from "../../assets/images/Thought.svg"
import { FeedbackSucessStep } from './Staps/FeedbackSucessStep'
import { FeedbackContentStep } from './Staps/FeedbackContentStep'
import { FeedbackTypeStep } from './Staps/FeedbackTypeStep'


export const feedbackTypes = {
   HUG: {
      title: "Problema",
      image: {
         source: bugImageUrl,
         alt: "Imagem de um inseto",
      }
   },
   IDEIA: {
      title: "Ideia",
      image: {
         source: ideaImageUrl,
         alt: "Imagem de uma lampada",
      }

   },
   OTHER: {
      title: "Outro",
      image: {
         source: thoughtImageUrl,
         alt: "Imagem de um balão de pensamento",
      }

   },
}


export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm() {

   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
   const [feedbackSent, setFeedbackSent] = useState(false)

   function handleRestartFeedback() {
      setFeedbackSent(false)
      setFeedbackType(null)
   }


   return (
      <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

         {feedbackSent ? (
            <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
         ) : (
            <>
               {!feedbackType ? (
                  <FeedbackTypeStep onFeedbackTupeChanged={setFeedbackType} />
               ) : (

                  <FeedbackContentStep
                     feedbackType={feedbackType}
                     onFeedbackRestartRequested={handleRestartFeedback}
                     onFeedbackSent={() => setFeedbackSent(true)}


                  />
               )}
            </>
         )}

         <footer className='text-xs text-neutral-400'>
            Feito com ♥ pela <a className='underline underline-offset-2' href="https://rocketseat.com.br">Rocketseat</a>
         </footer>
      </div>


   )
}