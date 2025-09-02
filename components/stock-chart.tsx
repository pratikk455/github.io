"use client"

import { useState, useEffect } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { Button } from "@/components/ui/button"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler)

export function StockChart() {
  const [stockData, setStockData] = useState<any>(null)
  const [timeframe, setTimeframe] = useState("1M")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading stock data
    setIsLoading(true)

    setTimeout(() => {
      // Generate mock data based on timeframe
      const generateMockData = () => {
        let days = 30
        switch (timeframe) {
          case "1W":
            days = 7
            break
          case "1M":
            days = 30
            break
          case "3M":
            days = 90
            break
          case "1Y":
            days = 365
            break
          default:
            days = 30
        }

        const labels = []
        const priceData = []
        const volumeData = []

        // Start with a base price and add some randomness
        let price = 150 + Math.random() * 20
        const volatility = timeframe === "1W" ? 2 : timeframe === "1M" ? 5 : timeframe === "3M" ? 15 : 40

        // Generate dates and price data
        const today = new Date()
        for (let i = days; i >= 0; i--) {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          labels.push(date.toLocaleDateString("en-US", { month: "short", day: "numeric" }))

          // Add some randomness to price with occasional trends
          const change = (Math.random() - 0.48) * (volatility / days) * 10
          price += change
          if (price < 100) price = 100 + Math.random() * 5
          if (price > 200) price = 200 - Math.random() * 5

          priceData.push(price)

          // Generate random volume data
          volumeData.push(Math.floor(Math.random() * 1000000) + 500000)
        }

        return {
          labels,
          priceData,
          volumeData,
        }
      }

      setStockData(generateMockData())
      setIsLoading(false)
    }, 1000)
  }, [timeframe])

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      y: {
        position: "right" as const,
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      y1: {
        position: "left" as const,
        grid: {
          display: false,
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "rgba(255, 255, 255, 1)",
        bodyColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(124, 58, 237, 0.5)",
        borderWidth: 1,
        padding: 10,
      },
    },
  }

  const data = stockData
    ? {
        labels: stockData.labels,
        datasets: [
          {
            label: "Stock Price",
            data: stockData.priceData,
            borderColor: "rgb(124, 58, 237)",
            backgroundColor: "rgba(124, 58, 237, 0.1)",
            fill: true,
            tension: 0.4,
            yAxisID: "y",
          },
          {
            label: "Volume",
            data: stockData.volumeData,
            borderColor: "rgb(6, 182, 212)",
            backgroundColor: "rgba(6, 182, 212, 0.5)",
            borderWidth: 1,
            type: "bar" as const,
            yAxisID: "y1",
          },
        ],
      }
    : { labels: [], datasets: [] }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-cyan-400">AAPL Stock Performance</h3>
        <div className="flex space-x-2">
          {["1W", "1M", "3M", "1Y"].map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe(period)}
              className={
                timeframe === period
                  ? "bg-purple-500 hover:bg-purple-600 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
              }
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-[400px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <Line options={options} data={data} />
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Open</p>
          <p className="text-xl font-semibold text-white">${stockData ? stockData.priceData[0].toFixed(2) : "0.00"}</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Close</p>
          <p className="text-xl font-semibold text-white">
            ${stockData ? stockData.priceData[stockData.priceData.length - 1].toFixed(2) : "0.00"}
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">High</p>
          <p className="text-xl font-semibold text-white">
            ${stockData ? Math.max(...stockData.priceData).toFixed(2) : "0.00"}
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">Low</p>
          <p className="text-xl font-semibold text-white">
            ${stockData ? Math.min(...stockData.priceData).toFixed(2) : "0.00"}
          </p>
        </div>
      </div>
    </div>
  )
}
