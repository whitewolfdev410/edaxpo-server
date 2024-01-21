export const getAxiosErrorMessage = (e: any) => {
  return (
    e.response?.data?.['hydra:description'] ||
    e.response?.data?.detail ||
    e.response?.data?.message ||
    e.message
  )
}
