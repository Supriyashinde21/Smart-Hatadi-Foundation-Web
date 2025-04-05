import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Smart Hatadi Foundation</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are a student-led organization dedicated to improving rural life, empowering farmers and women,
                  promoting education, and initiating social projects for the overall development of India.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Smart Hatadi Foundation team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To empower rural communities through sustainable development initiatives, focusing on agricultural
                  support, women empowerment, education, and social impact projects. We aim to create self-reliant
                  villages where every individual has access to opportunities for growth and development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A future where rural India is economically prosperous, socially empowered, and environmentally
                  sustainable. We envision communities where farmers use modern techniques, women are financially
                  independent, students have access to quality education, and villages have proper infrastructure and
                  services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                How a group of students came together to make a difference in rural communities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Foundation beginnings"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-muted-foreground">
                Smart Hatadi Foundation was founded in 2020 by a group of passionate students who wanted to make a
                meaningful impact in rural communities. During a visit to villages in Maharashtra, they witnessed the
                challenges faced by farmers, women, and students due to limited resources and opportunities.
              </p>
              <p className="text-muted-foreground">
                Inspired by the resilience of the villagers and motivated by a desire to create sustainable change, they
                established the foundation with a focus on low-budget, high-impact projects that leverage community
                engagement and modern technology.
              </p>
              <p className="text-muted-foreground">
                Starting with small initiatives like educational workshops and health awareness camps, the foundation
                has grown to implement comprehensive programs across multiple villages, touching thousands of lives and
                creating lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in sustainable development that empowers communities to become self-reliant.
              </p>
            </div>
          </div>
          <Tabs defaultValue="community" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="community">Community-Centered</TabsTrigger>
              <TabsTrigger value="technology">Technology-Driven</TabsTrigger>
              <TabsTrigger value="sustainable">Sustainable</TabsTrigger>
              <TabsTrigger value="collaborative">Collaborative</TabsTrigger>
            </TabsList>
            <TabsContent value="community" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-2">Community-Centered Approach</h3>
              <p>
                We involve local communities in every step of our projects, from planning to implementation. This
                ensures that our initiatives address real needs and create a sense of ownership among community members,
                leading to sustainable outcomes.
              </p>
            </TabsContent>
            <TabsContent value="technology" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-2">Technology-Driven Solutions</h3>
              <p>
                We leverage modern technology to solve rural challenges, from AI-based soil testing for farmers to
                digital literacy training for students. Our tech-focused approach helps bridge the urban-rural divide
                and brings innovative solutions to traditional problems.
              </p>
            </TabsContent>
            <TabsContent value="sustainable" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-2">Sustainable Development</h3>
              <p>
                Our projects are designed to create lasting impact rather than temporary relief. We focus on building
                skills, creating infrastructure, and establishing systems that continue to benefit communities long
                after our direct involvement ends.
              </p>
            </TabsContent>
            <TabsContent value="collaborative" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-medium mb-2">Collaborative Partnerships</h3>
              <p>
                We work with government agencies, educational institutions, private companies, and other NGOs to
                maximize our impact. These partnerships bring additional resources, expertise, and reach to our
                initiatives, allowing us to create more comprehensive solutions.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals driving our mission forward.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Team Member ${i}`}
                  alt={`Team Member ${i}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">Team Member {i}</CardTitle>
                  <CardDescription>Position/Role</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">
                    Brief description about the team member, their background, and their contribution to the foundation.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Mission</h2>
              <p className="text-muted-foreground md:text-xl">
                We're always looking for passionate individuals and organizations to join our mission of transforming
                rural communities. Whether you want to volunteer, donate, or partner with us, there are many ways to get
                involved.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/volunteer">
                  <Button className="px-8">Volunteer</Button>
                </Link>
                <Link href="/donate">
                  <Button variant="outline" className="px-8">
                    Donate
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Join our team"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

