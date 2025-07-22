export type Response = {
  httpCode: number,
  success: boolean,
  message: string,
  data?: any,
  pagination?: any,
  error?: any,
}