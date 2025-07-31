import React, { useRef } from 'react'

import Stack from '@mui/material/Stack'

import Button from '../../atoms/Button'
import Label from '../../atoms/Label'

import { FileInputContainer, FileNameText, HiddenInput } from './styles'
import { FileInputProps } from './types'

const FileInput: React.FC<FileInputProps> = ({
  value,
  onChange,
  label,
  placeholder = 'Nenhum arquivo selecionado',
  maxSizeMB = 10,
  acceptedFormats = ['image/*', 'application/pdf'],
  onError
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    inputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    event.target.value = ''

    if (!file) {
      onChange(null)
      return
    }
    const isTypeValid = acceptedFormats.some((format) => {
      if (format.endsWith('/*')) {
        return file.type.startsWith(format.replace('/*', ''))
      }
      return file.type === format
    })

    if (!isTypeValid) {
      onError?.(
        `Formato de arquivo inválido. Aceitos: ${acceptedFormats.join(', ')}`
      )
      onChange(null)
      return
    }

    const maxSizeInBytes = maxSizeMB * 1024 * 1024
    if (file.size > maxSizeInBytes) {
      onError?.(`O arquivo excede o tamanho máximo de ${maxSizeMB}MB.`)
      onChange(null)
      return
    }

    onError?.('')
    onChange(file)
  }

  return (
    <Stack spacing={1}>
      <Label>{label}</Label>
      <FileInputContainer>
        <Button
          type="button"
          colorVariant="neutral"
          onClick={handleButtonClick}
          sx={{ flexShrink: 0 }}
        >
          Selecionar arquivo
        </Button>
        <FileNameText>{value ? value.name : placeholder}</FileNameText>
      </FileInputContainer>
      <HiddenInput
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept={acceptedFormats.join(',')}
      />
    </Stack>
  )
}

export default FileInput
