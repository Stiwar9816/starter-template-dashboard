export interface ChartOptions {
  responsive: boolean
  plugins: {
    title: {
      display: boolean
      text?: string
      align: string
      font: {
        size: number
        weight: string
      }
    }
    legend: {
      display: boolean
    }
  }
}

export interface ChartData {
  labels: string[]
  datasets: {
    data: number[]
    backgroundColor: string[]
    borderColor: string[]
    borderWidth: number
    borderRadius: number
  }[]
}
