import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Leaf, Cloud, BarChart, ShoppingBag } from "lucide-react"

export default function AgriculturePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Farmer Support Portal</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empowering farmers with technology-based solutions, market connections, and agricultural resources to
                  improve productivity and income.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#resources">
                  <Button className="px-8">Explore Resources</Button>
                </Link>
                <Link href="#marketplace">
                  <Button variant="outline" className="px-8">
                    Marketplace
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Farmer using technology"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="resources">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Agricultural Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive support for farmers at every stage of the agricultural cycle.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Soil Testing & Crop Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  AI-based soil analysis to determine soil health and recommend suitable crops and fertilizers for
                  optimal yield.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/agriculture/soil-testing">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Cloud className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Weather Alerts & Forecasts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Real-time weather updates and forecasts to help farmers plan their agricultural activities and protect
                  crops.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/agriculture/weather-alerts">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BarChart className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Government Schemes & Subsidies</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Information and application support for agricultural subsidies, loans, and government schemes for
                  farmers.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/agriculture/government-schemes">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <ShoppingBag className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Marketplace Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Platform for farmers to list their produce and connect directly with buyers, eliminating middlemen and
                  increasing profits.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/agriculture/marketplace">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Soil Testing Demo */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">AI-Based Soil Testing</h2>
              <p className="text-muted-foreground md:text-xl">
                Our soil testing service uses artificial intelligence to analyze soil samples and provide detailed
                reports on soil health, nutrient levels, and pH balance. Based on the results, we recommend suitable
                crops and fertilizers to maximize yield and minimize costs.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Benefits:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Optimize crop selection based on soil conditions</li>
                  <li>Reduce fertilizer costs by applying only what's needed</li>
                  <li>Improve soil health and sustainability</li>
                  <li>Increase crop yield and quality</li>
                  <li>Prevent soil degradation and erosion</li>
                </ul>
              </div>
              <Link href="/agriculture/soil-testing">
                <Button className="px-8">Get Soil Testing</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Soil testing process"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="marketplace">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Farmer Marketplace</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect directly with buyers and get better prices for your produce.
              </p>
            </div>
          </div>
          <Tabs defaultValue="vegetables" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
              <TabsTrigger value="fruits">Fruits</TabsTrigger>
              <TabsTrigger value="grains">Grains</TabsTrigger>
              <TabsTrigger value="other">Other Produce</TabsTrigger>
            </TabsList>
            <TabsContent value="vegetables" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Sample marketplace listings */}
                {["Tomatoes", "Potatoes", "Onions", "Cabbage", "Cauliflower", "Spinach"].map((item, i) => (
                  <Card key={i}>
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${item}`}
                      alt={item}
                      width={400}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                    <CardHeader className="pb-2">
                      <CardTitle>{item}</CardTitle>
                      <CardDescription>Fresh, Organic</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Farmer: Ramesh Patil</p>
                      <p>Location: Wardha District</p>
                      <p>Price: ₹20-30/kg</p>
                      <p>Available Quantity: 100kg</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        Contact Farmer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="fruits" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Sample marketplace listings */}
                {["Mangoes", "Bananas", "Oranges"].map((item, i) => (
                  <Card key={i}>
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${item}`}
                      alt={item}
                      width={400}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                    <CardHeader className="pb-2">
                      <CardTitle>{item}</CardTitle>
                      <CardDescription>Fresh, Organic</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Farmer: Suresh Deshmukh</p>
                      <p>Location: Nagpur District</p>
                      <p>Price: ₹40-60/kg</p>
                      <p>Available Quantity: 50kg</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        Contact Farmer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="grains" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Sample marketplace listings */}
                {["Rice", "Wheat", "Jowar"].map((item, i) => (
                  <Card key={i}>
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${item}`}
                      alt={item}
                      width={400}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                    <CardHeader className="pb-2">
                      <CardTitle>{item}</CardTitle>
                      <CardDescription>Organic</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Farmer: Ganesh Mane</p>
                      <p>Location: Amravati District</p>
                      <p>Price: ₹30-40/kg</p>
                      <p>Available Quantity: 200kg</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        Contact Farmer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="other" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Sample marketplace listings */}
                {["Honey", "Dairy Products", "Spices"].map((item, i) => (
                  <Card key={i}>
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${item}`}
                      alt={item}
                      width={400}
                      height={200}
                      className="w-full object-cover h-48"
                    />
                    <CardHeader className="pb-2">
                      <CardTitle>{item}</CardTitle>
                      <CardDescription>Organic, Natural</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Farmer: Laxmi Jadhav</p>
                      <p>Location: Yavatmal District</p>
                      <p>Price: Varies</p>
                      <p>Available Quantity: Limited</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        Contact Farmer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-center mt-8">
            <Link href="/agriculture/marketplace">
              <Button>List Your Produce</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Farmer Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How our agricultural support has transformed lives.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Farmer Story 1"
                alt="Farmer success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Ramesh Patil, Wardha</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  "After using the soil testing service, I switched to crops better suited for my soil. My yield
                  increased by 30% and I saved money on fertilizers. The marketplace connection helped me sell directly
                  to retailers at better prices."
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Farmer Story 2"
                alt="Farmer success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Sunita Kale, Yavatmal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  "The weather alerts saved my crops during unexpected rains. I was able to harvest early and avoid
                  losses. The government scheme information helped me apply for a subsidy I didn't know I was eligible
                  for."
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Farmer Story 3"
                alt="Farmer success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Ganesh Mane, Amravati</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  "I switched to organic farming after attending the workshop. Initially, it was challenging, but with
                  the continuous support and guidance, I now produce high-quality organic grains that fetch premium
                  prices in the market."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Agricultural Resources</h2>
              <p className="text-muted-foreground md:text-xl">
                Access a wealth of information on farming techniques, crop management, pest control, and more. Our
                resources are designed to help farmers adopt best practices and improve productivity.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Available Resources:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Crop cultivation guides</li>
                  <li>Pest and disease management</li>
                  <li>Water conservation techniques</li>
                  <li>Organic farming practices</li>
                  <li>Post-harvest management</li>
                  <li>Agricultural tools and equipment</li>
                </ul>
              </div>
              <Link href="/agriculture/resources">
                <Button className="px-8">Explore Resources</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Agricultural resources"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Agricultural Support?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact our agricultural experts for personalized guidance and support.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="px-8">Contact Us</Button>
              </Link>
              <Link href="/agriculture/request-visit">
                <Button variant="outline" className="px-8">
                  Request Field Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

