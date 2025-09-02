"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Plane, Hotel, Gift, Coffee, ArrowRight, Check } from "lucide-react"

export function CreditCardAdvice() {
  const [selectedTab, setSelectedTab] = useState("overview")

  return (
    <div className="space-y-12">
      <section className="bg-neutral-50 p-8 rounded-xl">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-heading mb-4 tracking-tight">Travel Credit Card Strategies</h2>
            <p className="text-neutral-600 font-light mb-4">
              Maximize your travel experiences by leveraging the right credit cards. I provide personalized advice on
              selecting and using travel credit cards to earn points, miles, and benefits that can transform your travel
              experience.
            </p>
            <p className="text-neutral-600 font-light mb-6">
              Through strategic credit card usage, you can enjoy free flights, hotel stays, lounge access, and other
              premium travel perks that make your journeys more comfortable and affordable.
            </p>
          </div>
          <div className="md:w-1/2 relative h-[300px] w-full rounded-xl overflow-hidden">
            <Image src="/credit-card-travel.png" alt="Travel credit cards" fill className="object-cover" quality={90} />
          </div>
        </div>
      </section>

      <Tabs defaultValue="overview" value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
          <TabsTrigger value="overview" className="font-light tracking-wide">
            Overview
          </TabsTrigger>
          <TabsTrigger value="cards" className="font-light tracking-wide">
            Recommended Cards
          </TabsTrigger>
          <TabsTrigger value="strategies" className="font-light tracking-wide">
            Point Strategies
          </TabsTrigger>
          <TabsTrigger value="consultation" className="font-light tracking-wide">
            Consultation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <BenefitCard
              icon={<Plane className="h-8 w-8 text-primary" />}
              title="Free Flights"
              description="Learn how to earn and redeem points for free flights in economy, business, and first class."
            />
            <BenefitCard
              icon={<Hotel className="h-8 w-8 text-primary" />}
              title="Hotel Stays"
              description="Discover strategies to secure complimentary hotel stays and room upgrades at luxury properties."
            />
            <BenefitCard
              icon={<Gift className="h-8 w-8 text-primary" />}
              title="Travel Perks"
              description="Access airport lounges, receive travel insurance, and enjoy other premium travel benefits."
            />
            <BenefitCard
              icon={<Coffee className="h-8 w-8 text-primary" />}
              title="Dining Rewards"
              description="Maximize points on dining expenses both at home and while traveling abroad."
            />
            <BenefitCard
              icon={<CreditCard className="h-8 w-8 text-primary" />}
              title="No Foreign Fees"
              description="Save money with cards that don't charge foreign transaction fees for international purchases."
            />
            <BenefitCard
              icon={<Check className="h-8 w-8 text-primary" />}
              title="Personalized Strategy"
              description="Get a customized credit card strategy based on your travel goals and spending habits."
            />
          </div>

          <div className="bg-primary/5 p-8 rounded-xl">
            <h3 className="text-2xl font-heading mb-4 tracking-tight text-center">My Approach to Travel Rewards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading text-xl text-primary">1</span>
                </div>
                <h4 className="font-heading text-lg mb-2">Assess Your Travel Goals</h4>
                <p className="text-neutral-600 font-light">
                  I help you identify your travel aspirations to determine which rewards programs align with your
                  destinations and preferences.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading text-xl text-primary">2</span>
                </div>
                <h4 className="font-heading text-lg mb-2">Optimize Card Selection</h4>
                <p className="text-neutral-600 font-light">
                  Based on your spending patterns and travel goals, I recommend the ideal combination of credit cards to
                  maximize rewards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading text-xl text-primary">3</span>
                </div>
                <h4 className="font-heading text-lg mb-2">Strategic Redemption</h4>
                <p className="text-neutral-600 font-light">
                  I provide guidance on how to redeem your points and miles for maximum value, often achieving 2-5 cents
                  per point.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cards">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CreditCardCard
              name="Chase Sapphire Reserve"
              image="/cards/sapphire-reserve.png"
              points="3x on travel & dining"
              annualFee="$550"
              bestFor="Flexible travel rewards"
              keyBenefits={[
                "$300 annual travel credit",
                "Priority Pass lounge access",
                "1.5¢ per point value through Chase portal",
                "Excellent travel insurance",
              ]}
            />
            <CreditCardCard
              name="American Express Platinum"
              image="/cards/amex-platinum.png"
              points="5x on flights & hotels"
              annualFee="$695"
              bestFor="Premium travel benefits"
              keyBenefits={[
                "Centurion & Priority Pass lounge access",
                "$200 airline fee credit",
                "$200 hotel credit",
                "Global Entry/TSA PreCheck credit",
              ]}
            />
            <CreditCardCard
              name="Capital One Venture X"
              image="/cards/venture-x.png"
              points="10x on hotels & rental cars, 5x on flights"
              annualFee="$395"
              bestFor="Simplified premium rewards"
              keyBenefits={[
                "$300 annual travel credit",
                "10,000 anniversary bonus miles",
                "Priority Pass & Capital One lounge access",
                "Excellent travel insurance",
              ]}
            />
            <CreditCardCard
              name="Citi Premier"
              image="/cards/citi-premier.png"
              points="3x on restaurants, supermarkets, gas stations, air travel & hotels"
              annualFee="$95"
              bestFor="Everyday spending with travel rewards"
              keyBenefits={[
                "$100 annual hotel savings benefit",
                "No foreign transaction fees",
                "Transfer points to airline partners",
                "Affordable annual fee",
              ]}
            />
            <CreditCardCard
              name="Marriott Bonvoy Brilliant"
              image="/cards/bonvoy-brilliant.png"
              points="6x at Marriott hotels, 3x on dining & flights"
              annualFee="$650"
              bestFor="Marriott hotel stays"
              keyBenefits={[
                "$300 Marriott Bonvoy statement credit",
                "Free night award (up to 85,000 points)",
                "Automatic Platinum Elite status",
                "Priority Pass lounge access",
              ]}
            />
            <CreditCardCard
              name="United Explorer Card"
              image="/cards/united-explorer.png"
              points="2x on United purchases, dining & hotels"
              annualFee="$95 (waived first year)"
              bestFor="United Airlines flyers"
              keyBenefits={[
                "First checked bag free",
                "Two United Club passes annually",
                "Priority boarding",
                "Global Entry/TSA PreCheck credit",
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="strategies">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
              <h3 className="text-2xl font-heading mb-4 tracking-tight">Maximizing Sign-Up Bonuses</h3>
              <p className="text-neutral-600 font-light mb-4">
                One of the fastest ways to accumulate travel rewards is through strategic sign-up bonuses. Here's my
                approach:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Timing applications strategically</span> - I help you
                    plan when to apply for new cards to maximize bonuses while managing credit inquiries.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Meeting minimum spend requirements</span> - I provide
                    strategies for responsibly meeting minimum spending requirements to earn bonuses.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Targeting elevated offers</span> - I track
                    limited-time elevated bonus offers to help you apply when the value is highest.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
              <h3 className="text-2xl font-heading mb-4 tracking-tight">Category Spending Optimization</h3>
              <p className="text-neutral-600 font-light mb-4">
                Maximize your everyday spending by using the right card for each purchase category:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-heading text-lg mb-2">Dining</h4>
                  <p className="text-neutral-600 font-light mb-2">Best cards for restaurant spending:</p>
                  <ul className="space-y-1">
                    <li className="text-neutral-600 font-light text-sm">• Amex Gold Card (4x points)</li>
                    <li className="text-neutral-600 font-light text-sm">• Chase Sapphire Reserve (3x points)</li>
                    <li className="text-neutral-600 font-light text-sm">• Citi Premier (3x points)</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-heading text-lg mb-2">Travel</h4>
                  <p className="text-neutral-600 font-light mb-2">Best cards for travel purchases:</p>
                  <ul className="space-y-1">
                    <li className="text-neutral-600 font-light text-sm">• Amex Platinum (5x on flights)</li>
                    <li className="text-neutral-600 font-light text-sm">• Chase Sapphire Reserve (3x points)</li>
                    <li className="text-neutral-600 font-light text-sm">• Capital One Venture X (5x on flights)</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-heading text-lg mb-2">Groceries</h4>
                  <p className="text-neutral-600 font-light mb-2">Best cards for supermarket spending:</p>
                  <ul className="space-y-1">
                    <li className="text-neutral-600 font-light text-sm">• Amex Gold Card (4x points)</li>
                    <li className="text-neutral-600 font-light text-sm">• Citi Premier (3x points)</li>
                    <li className="text-neutral-600 font-light text-sm">• Amex Blue Cash Preferred (6% cash back)</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-heading text-lg mb-2">Everyday Spending</h4>
                  <p className="text-neutral-600 font-light mb-2">Best cards for non-bonus categories:</p>
                  <ul className="space-y-1">
                    <li className="text-neutral-600 font-light text-sm">• Capital One Venture (2x on everything)</li>
                    <li className="text-neutral-600 font-light text-sm">
                      • Amex Blue Business Plus (2x on first $50k)
                    </li>
                    <li className="text-neutral-600 font-light text-sm">
                      • Chase Freedom Unlimited (1.5x on everything)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
              <h3 className="text-2xl font-heading mb-4 tracking-tight">Advanced Redemption Techniques</h3>
              <p className="text-neutral-600 font-light mb-4">
                Getting the most value from your points requires strategic redemption. Here are some advanced
                techniques:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Transfer partner sweet spots</span> - I identify the
                    highest-value transfer partners for your specific travel goals.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Award chart optimization</span> - I help you navigate
                    complex airline and hotel award charts to find the best redemption rates.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Booking partner airlines</span> - I show you how to
                    use one airline's miles to book flights on partner airlines, often at better rates.
                  </p>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <p className="text-neutral-600 font-light">
                    <span className="font-normal text-neutral-800">Leveraging transfer bonuses</span> - I track
                    promotional transfer bonuses to help you get even more value from your points.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="consultation">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm text-center mb-8">
              <h3 className="text-2xl font-heading mb-4 tracking-tight">Personalized Credit Card Consultation</h3>
              <p className="text-neutral-600 font-light mb-6">
                Get a customized credit card strategy tailored to your specific travel goals, spending habits, and
                preferences. I'll help you navigate the complex world of travel rewards to maximize your benefits.
              </p>
              <div className="flex justify-center">
                <Button className="bg-primary hover:bg-primary-600 text-white font-light tracking-wide">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                <h4 className="font-heading text-xl mb-4 tracking-tight">What's Included</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p className="text-neutral-600 font-light">60-minute personalized consultation via video call</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p className="text-neutral-600 font-light">Analysis of your current credit cards and rewards</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p className="text-neutral-600 font-light">Customized card recommendation strategy</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p className="text-neutral-600 font-light">Spending optimization plan for maximum points</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p className="text-neutral-600 font-light">Redemption strategies for your travel goals</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <p className="text-neutral-600 font-light">Follow-up email with detailed recommendations</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                <h4 className="font-heading text-xl mb-4 tracking-tight">Client Success Stories</h4>
                <div className="space-y-4">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 font-light italic mb-2">
                      "Thanks to Pratik's credit card strategy, I earned enough points for a business class flight to
                      Japan that would have cost over $4,000!"
                    </p>
                    <p className="text-neutral-700 font-normal text-sm">— Michael T., New York</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 font-light italic mb-2">
                      "I was overwhelmed by all the credit card options, but Pratik simplified everything and created a
                      plan that earned me 300,000 points in just six months."
                    </p>
                    <p className="text-neutral-700 font-normal text-sm">— Sarah L., California</p>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 font-light italic mb-2">
                      "The hotel status benefits alone from Pratik's recommendations have saved me thousands on room
                      upgrades and free breakfasts."
                    </p>
                    <p className="text-neutral-700 font-normal text-sm">— David K., Texas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-neutral-100">
      <CardContent className="p-6">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">{icon}</div>
        <h3 className="text-xl font-heading text-center mb-2 tracking-tight">{title}</h3>
        <p className="text-neutral-600 text-center font-light">{description}</p>
      </CardContent>
    </Card>
  )
}

function CreditCardCard({
  name,
  image,
  points,
  annualFee,
  bestFor,
  keyBenefits,
}: {
  name: string
  image: string
  points: string
  annualFee: string
  bestFor: string
  keyBenefits: string[]
}) {
  return (
    <Card className="border-neutral-100 overflow-hidden">
      <div className="bg-neutral-900 p-6 flex justify-center">
        <div className="relative h-40 w-64">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-heading mb-2 tracking-tight">{name}</h3>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-wider font-light">Annual Fee</p>
            <p className="font-normal">{annualFee}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-neutral-500 uppercase tracking-wider font-light">Best For</p>
            <p className="font-normal">{bestFor}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-xs text-neutral-500 uppercase tracking-wider font-light">Earn Rate</p>
          <p className="font-light">{points}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500 uppercase tracking-wider font-light mb-2">Key Benefits</p>
          <ul className="space-y-1">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <p className="text-neutral-600 font-light text-sm">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
