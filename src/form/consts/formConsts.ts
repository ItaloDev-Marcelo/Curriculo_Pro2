

import { type Path } from 'react-hook-form'
import type { FormData } from '../types/FormData'

export const camposPorStep: Path<FormData >[][] = [
    ['fullName','email','tel','data','city','linkedin', 'about'],
    ['school','course','startAt','endAt'],
    ['position','company','startAt1','endAt1','description'],
    ['tecs','soft', 'languages']
]