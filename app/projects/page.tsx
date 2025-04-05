import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our initiatives making a difference in rural communities across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="women">Women Empowerment</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="social">Social Impact</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Project Cards */}
                <ProjectCard
                  title="Blood Donation Camp"
                  date="March 15, 2023"
                  location="Nagpur District"
                  description="Organized a blood donation camp in collaboration with local hospitals, collecting over 100 units of blood."
                  category="Social Impact"
                  slug="blood-donation-camp"
                />
                <ProjectCard
                  title="Village Quiz Competition"
                  date="January 20, 2023"
                  location="Wardha District"
                  description="Educational quiz competition for rural students with scholarships and prizes to encourage learning."
                  category="Education"
                  slug="quiz-competition"
                />
                <ProjectCard
                  title="Women's Tailoring Workshop"
                  date="February 10, 2023"
                  location="Amravati District"
                  description="Skills training program for rural women, providing tailoring equipment and business guidance."
                  category="Women Empowerment"
                  slug="tailoring-workshop"
                />
                <ProjectCard
                  title="Soil Testing Campaign"
                  date="April 5, 2023"
                  location="Yavatmal District"
                  description="Free soil testing for farmers to help them understand soil health and optimize crop selection and fertilizer use."
                  category="Agriculture"
                  slug="soil-testing"
                />
                <ProjectCard
                  title="Digital Literacy Program"
                  date="May 12, 2023"
                  location="Chandrapur District"
                  description="Training sessions for villagers on using smartphones, accessing government services online, and digital banking."
                  category="Education"
                  slug="digital-literacy"
                />
                <ProjectCard
                  title="Health Awareness Camp"
                  date="June 8, 2023"
                  location="Bhandara District"
                  description="Health checkups and awareness sessions on preventive healthcare, nutrition, and hygiene practices."
                  category="Social Impact"
                  slug="health-awareness"
                />
                <ProjectCard
                  title="Organic Farming Workshop"
                  date="July 15, 2023"
                  location="Gondia District"
                  description="Training farmers on organic farming techniques, composting, and natural pest control methods."
                  category="Agriculture"
                  slug="organic-farming"
                />
                <ProjectCard
                  title="Women's Self-Help Group Formation"
                  date="August 20, 2023"
                  location="Gadchiroli District"
                  description="Establishing self-help groups for women to promote savings, microfinance, and entrepreneurship."
                  category="Women Empowerment"
                  slug="self-help-group"
                />
                <ProjectCard
                  title="Career Guidance Workshop"
                  date="September 5, 2023"
                  location="Akola District"
                  description="Career counseling sessions for high school students, providing information on higher education and job opportunities."
                  category="Education"
                  slug="career-guidance"
                />
              </div>
            </TabsContent>
            <TabsContent value="agriculture" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Soil Testing Campaign"
                  date="April 5, 2023"
                  location="Yavatmal District"
                  description="Free soil testing for farmers to help them understand soil health and optimize crop selection and fertilizer use."
                  category="Agriculture"
                  slug="soil-testing"
                />
                <ProjectCard
                  title="Organic Farming Workshop"
                  date="July 15, 2023"
                  location="Gondia District"
                  description="Training farmers on organic farming techniques, composting, and natural pest control methods."
                  category="Agriculture"
                  slug="organic-farming"
                />
              </div>
            </TabsContent>
            <TabsContent value="women" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Women's Tailoring Workshop"
                  date="February 10, 2023"
                  location="Amravati District"
                  description="Skills training program for rural women, providing tailoring equipment and business guidance."
                  category="Women Empowerment"
                  slug="tailoring-workshop"
                />
                <ProjectCard
                  title="Women's Self-Help Group Formation"
                  date="August 20, 2023"
                  location="Gadchiroli District"
                  description="Establishing self-help groups for women to promote savings, microfinance, and entrepreneurship."
                  category="Women Empowerment"
                  slug="self-help-group"
                />
              </div>
            </TabsContent>
            <TabsContent value="education" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Village Quiz Competition"
                  date="January 20, 2023"
                  location="Wardha District"
                  description="Educational quiz competition for rural students with scholarships and prizes to encourage learning."
                  category="Education"
                  slug="quiz-competition"
                />
                <ProjectCard
                  title="Digital Literacy Program"
                  date="May 12, 2023"
                  location="Chandrapur District"
                  description="Training sessions for villagers on using smartphones, accessing government services online, and digital banking."
                  category="Education"
                  slug="digital-literacy"
                />
                <ProjectCard
                  title="Career Guidance Workshop"
                  date="September 5, 2023"
                  location="Akola District"
                  description="Career counseling sessions for high school students, providing information on higher education and job opportunities."
                  category="Education"
                  slug="career-guidance"
                />
              </div>
            </TabsContent>
            <TabsContent value="social" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Blood Donation Camp"
                  date="March 15, 2023"
                  location="Nagpur District"
                  description="Organized a blood donation camp in collaboration with local hospitals, collecting over 100 units of blood."
                  category="Social Impact"
                  slug="blood-donation-camp"
                />
                <ProjectCard
                  title="Health Awareness Camp"
                  date="June 8, 2023"
                  location="Bhandara District"
                  description="Health checkups and awareness sessions on preventive healthcare, nutrition, and hygiene practices."
                  category="Social Impact"
                  slug="health-awareness"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our planned initiatives for the coming months.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>October 2023</span>
                  <MapPin className="ml-4 mr-1 h-4 w-4" />
                  <span>Washim District</span>
                </div>
                <CardTitle>Farmer Market Connect Program</CardTitle>
                <CardDescription>Agriculture</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Creating direct connections between farmers and urban markets to eliminate middlemen and increase
                  farmer income.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>November 2023</span>
                  <MapPin className="ml-4 mr-1 h-4 w-4" />
                  <span>Buldhana District</span>
                </div>
                <CardTitle>Women's Digital Entrepreneurship</CardTitle>
                <CardDescription>Women Empowerment</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Training rural women to sell handmade products online through e-commerce platforms and social media.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>December 2023</span>
                  <MapPin className="ml-4 mr-1 h-4 w-4" />
                  <span>Multiple Districts</span>
                </div>
                <CardTitle>Rural Innovation Challenge</CardTitle>
                <CardDescription>Education</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Competition for rural students to develop innovative solutions for local problems, with mentorship and
                  funding for winners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Suggest a Project */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Suggest a Project</h2>
              <p className="text-muted-foreground md:text-xl">
                Have an idea for a project that could benefit your community? We welcome suggestions from villagers and
                community members. Your insights help us create more impactful initiatives.
              </p>
              <Link href="/contact">
                <Button className="px-8">Submit Your Idea</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Community brainstorming session"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The difference we've made through our projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mt-8">
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-center text-sm text-muted-foreground">Villages Reached</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-center text-sm text-muted-foreground">Farmers Supported</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-center text-sm text-muted-foreground">Women Empowered</div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-center text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ title, date, location, description, category, slug }) {
  return (
    <Card>
      <Image
        src={`/placeholder.svg?height=200&width=400&text=${title}`}
        alt={title}
        width={400}
        height={200}
        className="w-full object-cover h-48"
      />
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="mr-1 h-4 w-4" />
          <span>{date}</span>
          <MapPin className="ml-4 mr-1 h-4 w-4" />
          <span>{location}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/projects/${slug}`}>
          <Button variant="outline" size="sm">
            View Project
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

