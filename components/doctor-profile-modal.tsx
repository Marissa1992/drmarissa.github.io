'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export function DoctorProfileModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 sm:p-10 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <Dialog.Title className="text-2xl font-heading font-semibold text-slate-900 tracking-tight">
                  Dr. Marissa Mathew
                </Dialog.Title>
                <Dialog.Description className="text-teal-700 font-medium text-sm mt-1">
                  ENT Specialist (Otorhinolaryngologist) • MBBS, DLO (NBEMS)
                </Dialog.Description>
              </div>
              <Dialog.Close className="rounded-full p-2 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                <X className="h-5 w-5 text-slate-500" />
                <span className="sr-only">Close</span>
              </Dialog.Close>
            </div>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                Dr. Marissa Mathew is a dedicated and compassionate ENT Specialist (Otorhinolaryngologist) based in Thiruvananthapuram, committed to providing comprehensive care for conditions affecting the ear, nose, and throat. Holding an MBBS and a DLO (NBEMS), Dr. Marissa combines rigorous medical training with a patient-first philosophy to deliver personalized, evidence-based treatments.
              </p>
              <p>
                She has a special clinical interest and advanced expertise in resolving acute and chronic ear blocks, managing complex peripheral vertigo to help patients regain their balance and confidence, and providing long-term sinusitis management for clearer, easier breathing. 
              </p>
              <p>
                Fluent in Malayalam and English, Dr. Marissa believes in empowering her patients through clear communication, ensuring they fully understand their diagnosis and feel completely comfortable with their treatment plan.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-3 font-heading text-lg">Key Expertise</h4>
                <ul className="space-y-2">
                  {[
                    "Comprehensive Ear, Nose, and Throat Care",
                    "Peripheral Vertigo & Dizziness Management",
                    "Acute & Chronic Sinusitis Treatment",
                    "Ear Block Diagnosis & Resolution",
                    "Patient Education & Preventative Care"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 mr-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
