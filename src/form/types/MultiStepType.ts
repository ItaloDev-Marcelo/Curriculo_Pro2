
export type NextT = {onNextS: () => void | Promise<void>}
export type BackT = {onBack: (num: number) => void}
export type StepT = {step: number}
export type multiStepFormT = NextT & BackT & StepT
export type Both = NextT & BackT