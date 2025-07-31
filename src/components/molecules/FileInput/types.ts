export interface FileInputProps {
  value: File | null
  onChange: (file: File | null) => void
  label: string
  placeholder?: string
  onError?: (message: string) => void
  maxSizeMB?: number
  acceptedFormats?: string[]
}
