import { BookOpenCheck, Brain, FileArchive, FolderCode, RectangleEllipsis } from 'lucide-react';
import React from 'react'

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({children}: LoginLayoutProps) {
  return (
    <>

        <div className='flex'>
            <div className='w-1/2 min-h-screen bg-linear-to-bl from-blue-200 via-blue-50 to-blue-200 flex items-center justify-center'>
            <div className="layer flex items-center justify-center h-full">
              <div className="ExamIcon   w-120">
               <div className="flex mb-36">
                 <i className="text-blue-600"><FolderCode size={30}/></i>
                <h1 className="ps-3 text-xl font-semibold text-blue-600">Exam App</h1>
               </div>
                 <div>
                <h1 className="f texttitle mb-14">Empower your learning journey with our smart exam platform.</h1>
                <div className='flex mb-8'>
                  <div className="border-2 border-blue-600 h-full p-1">
                    <i className="text-blue-600"><Brain size={30} /></i>
                  </div>
                  <div className="desc ps-6 ">
                    <h1 className="text-xl font-bold text-blue-600">Tailored Diplomas</h1>
                    <p >Choose from specialized tracks like Frontend, Backend, and Mobile Development.</p>
                  </div>

                </div>
                 <div className='flex mb-8'>
                  <div className="border-2 border-blue-600 h-full p-1">
                    <i className="text-blue-600"><BookOpenCheck size={30} /></i>
                  </div>
                  <div className="desc ps-6 ">
                    <h1 className="text-xl font-bold text-blue-600">Focused Exams</h1>
                    <p >Access topic-specific tests including HTML, CSS, JavaScript, and more.</p>
                  </div>

                </div>
                 <div className='flex mb-8'>
                  <div className="border-2 border-blue-600 h-full p-1">
                    <i className="text-blue-600"><RectangleEllipsis size={30} /></i>
                  </div>
                  <div className="desc ps-6 ">
                    <h1 className="text-xl font-bold text-blue-600">Smart Multi-Step Forms</h1>
                    <p >Choose from specialized tracks like Frontend, Backend, and Mobile Development..</p>
                  </div>

                </div>
              </div>
              </div>
             
            </div>
            </div>

    {children}



        </div>



      
    </>
  )
}
