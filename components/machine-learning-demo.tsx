"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MachineLearningDemo() {
  const [activeTab, setActiveTab] = useState("clustering")
  const [isRunning, setIsRunning] = useState(false)
  const [iteration, setIteration] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Data points and clusters
  const [dataPoints, setDataPoints] = useState<{ x: number; y: number; cluster: number }[]>([])
  const [centroids, setCentroids] = useState<{ x: number; y: number; color: string }[]>([])

  // Regression data
  const [regressionPoints, setRegressionPoints] = useState<{ x: number; y: number }[]>([])
  const [regressionLine, setRegressionLine] = useState<{ m: number; b: number }>({ m: 0, b: 0 })

  // Neural network data
  const [neuralNetData, setNeuralNetData] = useState<{
    points: { x: number; y: number; class: number }[]
    weights: number[][]
    accuracy: number
  }>({
    points: [],
    weights: [
      [0, 0, 0],
      [0, 0, 0],
    ],
    accuracy: 0,
  })

  // Initialize data
  useEffect(() => {
    resetDemo()
  }, [activeTab])

  // Animation loop
  useEffect(() => {
    if (isRunning) {
      if (activeTab === "clustering") {
        runKMeansIteration()
      } else if (activeTab === "regression") {
        runRegressionIteration()
      } else if (activeTab === "neural") {
        runNeuralNetIteration()
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, iteration, activeTab])

  // Draw on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (activeTab === "clustering") {
      drawClustering(ctx, canvas.width, canvas.height)
    } else if (activeTab === "regression") {
      drawRegression(ctx, canvas.width, canvas.height)
    } else if (activeTab === "neural") {
      drawNeuralNet(ctx, canvas.width, canvas.height)
    }
  }, [dataPoints, centroids, regressionPoints, regressionLine, neuralNetData, activeTab])

  // K-means clustering
  const runKMeansIteration = () => {
    if (iteration > 20) {
      setIsRunning(false)
      return
    }

    // Assign points to nearest centroid
    const newDataPoints = dataPoints.map((point) => {
      let minDist = Number.POSITIVE_INFINITY
      let cluster = 0

      centroids.forEach((centroid, i) => {
        const dist = Math.sqrt(Math.pow(point.x - centroid.x, 2) + Math.pow(point.y - centroid.y, 2))
        if (dist < minDist) {
          minDist = dist
          cluster = i
        }
      })

      return { ...point, cluster }
    })

    // Update centroids
    const newCentroids = centroids.map((centroid, i) => {
      const clusterPoints = newDataPoints.filter((p) => p.cluster === i)

      if (clusterPoints.length === 0) return centroid

      const sumX = clusterPoints.reduce((sum, p) => sum + p.x, 0)
      const sumY = clusterPoints.reduce((sum, p) => sum + p.y, 0)

      return {
        ...centroid,
        x: sumX / clusterPoints.length,
        y: sumY / clusterPoints.length,
      }
    })

    setDataPoints(newDataPoints)
    setCentroids(newCentroids)
    setIteration((prev) => prev + 1)

    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        if (isRunning) runKMeansIteration()
      }, 500)
    })
  }

  // Linear regression
  const runRegressionIteration = () => {
    if (iteration > 20) {
      setIsRunning(false)
      return
    }

    // Simple gradient descent for linear regression
    const learningRate = 0.01
    let m = regressionLine.m
    let b = regressionLine.b

    // Compute gradients
    let m_gradient = 0
    let b_gradient = 0

    regressionPoints.forEach((point) => {
      const prediction = m * point.x + b
      const error = prediction - point.y

      m_gradient += error * point.x
      b_gradient += error
    })

    m_gradient /= regressionPoints.length
    b_gradient /= regressionPoints.length

    // Update parameters
    m -= learningRate * m_gradient
    b -= learningRate * b_gradient

    setRegressionLine({ m, b })
    setIteration((prev) => prev + 1)

    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        if (isRunning) runRegressionIteration()
      }, 200)
    })
  }

  // Neural network
  const runNeuralNetIteration = () => {
    if (iteration > 50) {
      setIsRunning(false)
      return
    }

    // Simple perceptron learning
    const learningRate = 0.05
    const weights = [...neuralNetData.weights]

    // Train on random point
    const randomIndex = Math.floor(Math.random() * neuralNetData.points.length)
    const point = neuralNetData.points[randomIndex]

    // Forward pass
    const inputs = [1, point.x, point.y] // Add bias
    const outputs = [0, 0]

    for (let i = 0; i < 2; i++) {
      let sum = 0
      for (let j = 0; j < 3; j++) {
        sum += weights[i][j] * inputs[j]
      }
      outputs[i] = sigmoid(sum)
    }

    // Compute error
    const targets = [point.class === 0 ? 1 : 0, point.class === 1 ? 1 : 0]
    const errors = [targets[0] - outputs[0], targets[1] - outputs[1]]

    // Update weights
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        weights[i][j] += learningRate * errors[i] * outputs[i] * (1 - outputs[i]) * inputs[j]
      }
    }

    // Calculate accuracy
    let correct = 0
    neuralNetData.points.forEach((p) => {
      const prediction = predict(p.x, p.y, weights)
      if (prediction === p.class) correct++
    })

    const accuracy = correct / neuralNetData.points.length

    setNeuralNetData({
      ...neuralNetData,
      weights,
      accuracy,
    })

    setIteration((prev) => prev + 1)

    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        if (isRunning) runNeuralNetIteration()
      }, 100)
    })
  }

  // Helper functions
  const sigmoid = (x: number) => 1 / (1 + Math.exp(-x))

  const predict = (x: number, y: number, weights: number[][]) => {
    const inputs = [1, x, y] // Add bias
    const outputs = [0, 0]

    for (let i = 0; i < 2; i++) {
      let sum = 0
      for (let j = 0; j < 3; j++) {
        sum += weights[i][j] * inputs[j]
      }
      outputs[i] = sigmoid(sum)
    }

    return outputs[0] > outputs[1] ? 0 : 1
  }

  // Drawing functions
  const drawClustering = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw data points
    dataPoints.forEach((point) => {
      ctx.beginPath()
      ctx.arc(point.x * width, point.y * height, 5, 0, Math.PI * 2)
      ctx.fillStyle =
        point.cluster === 0
          ? "rgba(124, 58, 237, 0.7)"
          : point.cluster === 1
            ? "rgba(6, 182, 212, 0.7)"
            : "rgba(168, 85, 247, 0.7)"
      ctx.fill()
    })

    // Draw centroids
    centroids.forEach((centroid) => {
      ctx.beginPath()
      ctx.arc(centroid.x * width, centroid.y * height, 8, 0, Math.PI * 2)
      ctx.fillStyle = centroid.color
      ctx.fill()
      ctx.strokeStyle = "white"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw iteration count
    ctx.font = "16px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Iteration: ${iteration}`, 20, 30)
  }

  const drawRegression = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw data points
    regressionPoints.forEach((point) => {
      ctx.beginPath()
      ctx.arc(point.x * width, point.y * height, 5, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(124, 58, 237, 0.7)"
      ctx.fill()
    })

    // Draw regression line
    const { m, b } = regressionLine
    ctx.beginPath()
    ctx.moveTo(0, b * height)
    ctx.lineTo(width, (m * 1 + b) * height)
    ctx.strokeStyle = "rgba(6, 182, 212, 1)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw iteration count and equation
    ctx.font = "16px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Iteration: ${iteration}`, 20, 30)
    ctx.fillText(`y = ${m.toFixed(3)}x + ${b.toFixed(3)}`, 20, 60)
  }

  const drawNeuralNet = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Draw decision boundary
    const resolution = 0.01
    const weights = neuralNetData.weights

    ctx.fillStyle = "rgba(124, 58, 237, 0.1)"

    for (let x = 0; x < 1; x += resolution) {
      for (let y = 0; y < 1; y += resolution) {
        const prediction = predict(x, y, weights)

        if (prediction === 0) {
          ctx.fillRect(x * width, y * height, resolution * width, resolution * height)
        }
      }
    }

    ctx.fillStyle = "rgba(6, 182, 212, 0.1)"

    for (let x = 0; x < 1; x += resolution) {
      for (let y = 0; y < 1; y += resolution) {
        const prediction = predict(x, y, weights)

        if (prediction === 1) {
          ctx.fillRect(x * width, y * height, resolution * width, resolution * height)
        }
      }
    }

    // Draw data points
    neuralNetData.points.forEach((point) => {
      ctx.beginPath()
      ctx.arc(point.x * width, point.y * height, 5, 0, Math.PI * 2)
      ctx.fillStyle = point.class === 0 ? "rgba(124, 58, 237, 0.7)" : "rgba(6, 182, 212, 0.7)"
      ctx.fill()
    })

    // Draw iteration count and accuracy
    ctx.font = "16px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(`Iteration: ${iteration}`, 20, 30)
    ctx.fillText(`Accuracy: ${(neuralNetData.accuracy * 100).toFixed(1)}%`, 20, 60)
  }

  // Reset demo
  const resetDemo = () => {
    setIsRunning(false)
    setIteration(0)

    if (activeTab === "clustering") {
      // Generate random data points
      const points = Array.from({ length: 100 }, () => ({
        x: Math.random(),
        y: Math.random(),
        cluster: 0,
      }))

      // Initialize centroids
      const colors = ["rgba(124, 58, 237, 1)", "rgba(6, 182, 212, 1)", "rgba(168, 85, 247, 1)"]
      const centers = [
        { x: Math.random(), y: Math.random(), color: colors[0] },
        { x: Math.random(), y: Math.random(), color: colors[1] },
        { x: Math.random(), y: Math.random(), color: colors[2] },
      ]

      setDataPoints(points)
      setCentroids(centers)
    } else if (activeTab === "regression") {
      // Generate linear data with noise
      const m = Math.random() * 0.8 + 0.1
      const b = Math.random() * 0.8 + 0.1

      const points = Array.from({ length: 50 }, () => {
        const x = Math.random()
        const noise = (Math.random() - 0.5) * 0.2
        return {
          x,
          y: Math.min(Math.max(m * x + b + noise, 0), 1), // Keep within [0, 1]
        }
      })

      setRegressionPoints(points)
      setRegressionLine({ m: 0, b: 0.5 }) // Initial guess
    } else if (activeTab === "neural") {
      // Generate two-class data
      const generateCluster = (centerX: number, centerY: number, count: number, classLabel: number) => {
        return Array.from({ length: count }, () => {
          const angle = Math.random() * Math.PI * 2
          const radius = Math.random() * 0.2
          return {
            x: Math.min(Math.max(centerX + Math.cos(angle) * radius, 0), 1),
            y: Math.min(Math.max(centerY + Math.sin(angle) * radius, 0), 1),
            class: classLabel,
          }
        })
      }

      const cluster1 = generateCluster(0.3, 0.3, 50, 0)
      const cluster2 = generateCluster(0.7, 0.7, 50, 1)

      setNeuralNetData({
        points: [...cluster1, ...cluster2],
        weights: [
          [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
          [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5],
        ],
        accuracy: 0,
      })
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-purple-400">Interactive Machine Learning</h3>
        <div className="flex space-x-2">
          <Button
            variant={isRunning ? "destructive" : "default"}
            onClick={() => setIsRunning(!isRunning)}
            className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-cyan-500 hover:bg-cyan-600"}
          >
            {isRunning ? "Stop" : "Run Algorithm"}
          </Button>
          <Button variant="outline" onClick={resetDemo} className="border-gray-600 text-gray-300 hover:bg-gray-700">
            Reset
          </Button>
        </div>
      </div>

      <Tabs defaultValue="clustering" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid grid-cols-3 bg-gray-800">
          <TabsTrigger value="clustering" className="data-[state=active]:bg-purple-500">
            K-Means Clustering
          </TabsTrigger>
          <TabsTrigger value="regression" className="data-[state=active]:bg-cyan-500">
            Linear Regression
          </TabsTrigger>
          <TabsTrigger value="neural" className="data-[state=active]:bg-purple-500">
            Neural Network
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clustering" className="mt-4">
          <p className="text-gray-300 mb-4">
            K-means clustering algorithm groups data points into K clusters by minimizing the distance between points
            and their assigned cluster centroids.
          </p>
        </TabsContent>
        <TabsContent value="regression" className="mt-4">
          <p className="text-gray-300 mb-4">
            Linear regression finds the best-fitting line through data points by minimizing the sum of squared errors
            between predicted and actual values.
          </p>
        </TabsContent>
        <TabsContent value="neural" className="mt-4">
          <p className="text-gray-300 mb-4">
            A simple neural network learns to classify data points into two categories by adjusting weights through
            backpropagation.
          </p>
        </TabsContent>
      </Tabs>

      <div className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-xl border border-gray-700 shadow-xl">
        <canvas ref={canvasRef} width={600} height={400} className="w-full h-[400px] rounded-lg" />
      </div>
    </div>
  )
}
