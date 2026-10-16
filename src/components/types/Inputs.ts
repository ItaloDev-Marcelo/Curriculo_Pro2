
import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'

export type reusableType = {
    errors: FieldErrors<MultiStepFormData>,
    register: UseFormRegister<MultiStepFormData>,
    title?: string,
    name: keyof MultiStepFormData,
    placeholder?: string,
}
 
type onlyToInputType = {
    type: string,
    style?: string
}

export type InputBlockType = reusableType & onlyToInputType 