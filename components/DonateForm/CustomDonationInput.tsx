import React from 'react'
import { formatAmountForDisplay } from '../../utilities/stripe-helpers'
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

type Props = {
  name: string
  value: number
  min: number
  max: number
  currency: string
  step: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const CustomDonationInput = ({
  name,
  value,
  min,
  max,
  currency,
  step,
  onChange,
  className,
}: Props) => (
  <div>

    
    

      <div className='inputWrapper'>
      <div className='header'>
    Insert Donation Amount Between:({formatAmountForDisplay(min, currency)}-{formatAmountForDisplay(max, currency)})
    </div>
    
      <input
        className={className}
        type="number"
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        placeholder='$ Amount...'
        onChange={onChange}
      ></input>
      {/* <FormControl fullWidth variant="outlined">
          <InputLabel >Amount</InputLabel>
          <OutlinedInput
                  className={className}
                  type="number"
                  name={name}
                  value={value}
                  // min={min}
                  // max={max}
                  // step={step}
                  onChange={onChange}
          />
        </FormControl> */}

       <input
        type="range"
        name={name}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
        
         ></input>

    </div>
    
    

  </div>
)

export default CustomDonationInput
