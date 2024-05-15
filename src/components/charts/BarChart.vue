<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { ChartData, ChartOptions } from '@/interfaces'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  data: {
    type: Array as () => number[],
    default: [65, 59, 80, 81, 56, 55, 40]
  },
  labels: {
    type: Array as () => string[],
    default: ['Test', 'Test 2', 'Tets 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7']
  },
  chartTitle: {
    type: String,
    default: 'Title Chart'
  }
})

const chartData: ChartData = {
  labels: props.labels,
  datasets: [
    {
      data: props.data,
      backgroundColor: [
        '#1eae96',
      ],
      borderColor: [
        '#37caaf',
      ],
      borderWidth: 1,
      borderRadius: 10
    }
  ]
}

const chartOptions: ChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: props.chartTitle,
      align: 'center',
      font: {
        size: 16,
        weight: 'bold'
      }
    },
    legend: {
      display: false
    }
  }
}
</script>
