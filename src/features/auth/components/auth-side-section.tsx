import React from 'react'
import { BookOpenCheck, Brain, FolderCode, RectangleEllipsis } from 'lucide-react';


export default function AuthSideSection() {
  return (
    <>

     
         <section className="h-full w-full">
             <div className=' min-h-screen bg-linear-to-bl from-blue-200 via-blue-50 to-blue-200 flex items-center justify-center'>
            <div className="layer flex items-center justify-center h-full">
              <div className="ExamIcon   w-120">
               <div className="flex mb-36">
                 <i className="text-blue-600"><FolderCode size={30}/></i>
                <h1 className="ps-3 text-xl font-semibold text-blue-600 font-mono">Exam App</h1>
               </div>
                 <div>
                <h1 className="f texttitle mb-14 font-inter">Empower your learning journey with our smart exam platform.</h1>
                <div className='flex mb-8'>
                  <div className="border-2 border-blue-600 h-full p-1">
                    <i className="text-blue-600"><Brain size={30} /></i>
                  </div>
                  <div className="desc ps-6 ">
                    <h1 className="text-xl font-bold text-blue-600 font-mono">Tailored Diplomas</h1>
                    <p >Choose from specialized tracks like Frontend, Backend, and Mobile Development.</p>
                  </div>

                </div>
                 <div className='flex mb-8'>
                  <div className="border-2 border-blue-600 h-full p-1">
                    <i className="text-blue-600"><BookOpenCheck size={30} /></i>
                  </div>
                  <div className="desc ps-6 ">
                    <h1 className="text-xl font-bold text-blue-600 font-mono">Focused Exams</h1>
                    <p className='font-mono' >Access topic-specific tests including HTML, CSS, JavaScript, and more.</p>
                  </div>

                </div>
                 <div className='flex mb-8'>
                  <div className="border-2 border-blue-600 h-full p-1">
                    <i className="text-blue-600"><RectangleEllipsis size={30} /></i>
                  </div>
                  <div className="desc ps-6 ">
                    <h1 className="text-xl font-bold font mono text-blue-600">Smart Multi-Step Forms</h1>
                    <p >Choose from specialized tracks like Frontend, Backend, and Mobile Development..</p>
                  </div>

                </div>
              </div>
              </div>
             
            </div>
            </div>
         </section>

    



        

      
    </>
  )
}
