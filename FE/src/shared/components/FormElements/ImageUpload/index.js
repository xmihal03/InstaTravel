import React, { useRef, useState, useEffect } from 'react'
import { Preview, ImageUploadWrapper } from './styles'
import { StyledInput as FormControl } from '../Input/styles'
import Button from '../Button'

const ImageUpload = (props) => {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()
  const [isValid, setIsValid] = useState(false)
  const filePickerRef = useRef()

  useEffect(() => {
    if (!file) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  const pickImageHandler = () => {
    filePickerRef.current.click()
  }

  const pickedHandler = (e) => {
    let pickedFile
    let fileIsValid = isValid
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0]
      setFile(pickedFile)
      setIsValid(true)
      fileIsValid = true
    } else {
      setIsValid(false)
      fileIsValid = false
    }
    props.onInput(props.id, pickedFile, fileIsValid)
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
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </Preview>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </ImageUploadWrapper>
      {!isValid && <p>{props.errorText}</p>}
    </FormControl>
  )
}

export default ImageUpload
