export const useColor = () => {
  const nuxtApp = useNuxtApp()

  const color = useState('theme-color', () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme-color') || 'blue'
    }
    return 'blue'
  })

  const colorOptions = [
    { label: 'Gray', value: 'gray' },
    { label: 'Red', value: 'red' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green' },
    { label: 'Emerald', value: 'emerald' },
    { label: 'Teal', value: 'teal' },
    { label: 'Blue', value: 'blue' },
    { label: 'Indigo', value: 'indigo' },
    { label: 'Purple', value: 'purple' },
    { label: 'Pink', value: 'pink' }
  ]

  const setColor = (newColor: string) => {
    color.value = newColor
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-color', newColor)
    }
  }

  return {
    color,
    colorOptions,
    setColor
  }
}
