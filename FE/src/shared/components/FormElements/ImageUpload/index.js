import React, { useRef } from 'react'
import { Preview, ImageUploadWrapper } from './styles'
import { StyledInput as FormControl } from '../Input/styles'
import Button from '../Button'

const ImageUpload = (props) => {
  const filePickerRef = useRef()
  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  const pickedHandler = (e) => {
    console.log(e.target)
  }

  return (
    <FormControl>
      <input
        id={props.id}
        ref={filePickerRef}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
        style={{ display: 'none' }}
      />
      <ImageUploadWrapper>
        <Preview>
          <img src="" alt="Preview" />
        </Preview>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </ImageUploadWrapper>
    </FormControl>
  )
}

export default ImageUpload
