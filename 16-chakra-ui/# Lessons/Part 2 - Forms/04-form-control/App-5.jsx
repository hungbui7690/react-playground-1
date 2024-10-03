/*
  Select & NumberInput
  - https://v2.chakra-ui.com/docs/components/form-control

  🌿 Can have State management + validation with Formik


*/

import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Textarea,
} from '@chakra-ui/react'

function App() {
  return (
    <FormControl p={8}>
      <FormLabel>Country</FormLabel>
      <Select placeholder='Select country'>
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>

      <FormLabel mt={4}>Amount</FormLabel>
      <NumberInput max={50} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>

      <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <Slider aria-label='slider-ex-1' defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Switch id='email-alerts' />

      <Textarea placeholder='Here is a sample placeholder' />
    </FormControl>
  )
}

export default App
