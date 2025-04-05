import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-section bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 staggered-fade-in">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                  Empowering Rural Communities
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Smart Hatadi Foundation is dedicated to improving rural life, empowering farmers and women, promoting
                  education, and initiating social projects for the overall development of India.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="btn-primary px-8">Our Projects</Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="btn-outline px-8">
                    Donate Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center img-hover-zoom">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Rural development initiative"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
            <div className="space-y-2">
              <h2 className="section-title text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission Areas</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We focus on four key areas to create sustainable impact in rural communities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8 staggered-fade-in">
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <CardTitle>Agricultural Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Technology-based farming projects, soil testing, crop recommendations, and market connections.</p>
              </CardContent>
              <CardFooter>
                <Link href="/agriculture">
                  <Button variant="ghost" size="sm" className="btn-hover-effect">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <CardTitle>Women Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tailoring business support, skills training, and entrepreneurial guidance for rural women.</p>
              </CardContent>
              <CardFooter>
                <Link href="/women-empowerment">
                  <Button variant="ghost" size="sm" className="btn-hover-effect">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <CardTitle>Educational Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Quiz competitions, scholarships, digital literacy training, and career guidance for students.</p>
              </CardContent>
              <CardFooter>
                <Link href="/education">
                  <Button variant="ghost" size="sm" className="btn-hover-effect">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="feature-card">
              <CardHeader className="pb-2">
                <CardTitle>Social Impact Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Blood donation camps, health awareness programs, and community development initiatives.</p>
              </CardContent>
              <CardFooter>
                <Link href="/social-impact">
                  <Button variant="ghost" size="sm" className="btn-hover-effect">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
            <div className="space-y-2">
              <h2 className="section-title text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our recent initiatives making a difference in rural communities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 staggered-fade-in">
            <Card className="card-hover-effect">
              <div className="img-hover-zoom">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blood Donation Camp"
                  width={400}
                  height={200}
                  className="w-full object-cover h-48"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>March 15, 2023</span>
                  <MapPin className="ml-4 mr-1 h-4 w-4" />
                  <span>Nagpur District</span>
                </div>
                <CardTitle>Blood Donation Camp</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Organized a blood donation camp in collaboration with local hospitals, collecting over 100 units of
                  blood.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/projects/blood-donation-camp">
                  <Button variant="outline" size="sm" className="btn-hover-effect">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card-hover-effect">
              <div className="img-hover-zoom">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Village Quiz Competition"
                  width={400}
                  height={200}
                  className="w-full object-cover h-48"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>January 20, 2023</span>
                  <MapPin className="ml-4 mr-1 h-4 w-4" />
                  <span>Wardha District</span>
                </div>
                <CardTitle>Village Quiz Competition</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Educational quiz competition for rural students with scholarships and prizes to encourage learning.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/projects/quiz-competition">
                  <Button variant="outline" size="sm" className="btn-hover-effect">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card-hover-effect">
              <div className="img-hover-zoom">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Women's Tailoring Workshop"
                  width={400}
                  height={200}
                  className="w-full object-cover h-48"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>February 10, 2023</span>
                  <MapPin className="ml-4 mr-1 h-4 w-4" />
                  <span>Amravati District</span>
                </div>
                <CardTitle>Women's Tailoring Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Skills training program for rural women, providing tailoring equipment and business guidance.</p>
              </CardContent>
              <CardFooter>
                <Link href="/projects/tailoring-workshop">
                  <Button variant="outline" size="sm" className="btn-hover-effect">
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button variant="outline" className="btn-outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 staggered-fade-in">
            <div className="stat-card">
              <div className="stat-value">25+</div>
              <div className="stat-label">Villages Reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">1000+</div>
              <div className="stat-label">Farmers Supported</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Women Empowered</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 hero-section">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 animate-on-scroll">
              <div className="space-y-2">
                <h2 className="section-title text-3xl font-bold tracking-tighter sm:text-4xl">Get Involved</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join us in our mission to transform rural communities. There are many ways you can contribute to our
                  cause.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/volunteer">
                  <Button className="btn-primary px-8">Volunteer</Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="btn-outline px-8">
                    Donate
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col space-y-4 staggered-fade-in">
              <Card className="card-hover-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" />
                    Volunteer Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Share your skills and time to make a difference in rural communities. We have various volunteering
                    options based on your interests and expertise.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover-effect">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Join our upcoming events including health camps, educational workshops, and community development
                    initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

