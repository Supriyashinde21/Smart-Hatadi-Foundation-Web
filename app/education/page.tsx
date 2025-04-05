import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Trophy, Laptop, GraduationCap } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education Hub</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empowering rural students through educational resources, scholarships, digital literacy, and career
                  guidance.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#resources">
                  <Button className="px-8">Educational Resources</Button>
                </Link>
                <Link href="#scholarships">
                  <Button variant="outline" className="px-8">
                    Scholarships
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Rural education initiative"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="resources">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Educational Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive initiatives designed to support rural students at every stage of their educational
                journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <BookOpen className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Educational Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Free study materials, textbooks, and online resources for students from primary to higher education
                  levels.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/education/resources">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Trophy className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Quiz Competitions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Regular quiz competitions with scholarships and prizes to encourage learning and academic excellence.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/education/quiz-competitions">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Laptop className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Digital Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Training programs to help students and adults develop essential digital skills for the modern world.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/education/digital-literacy">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <GraduationCap className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Counseling and information on higher education options, career paths, and job preparation.</p>
              </CardContent>
              <CardFooter>
                <Link href="/education/career-guidance">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Quiz Competitions */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Village Quiz Competitions</h2>
              <p className="text-muted-foreground md:text-xl">
                Our flagship educational program brings the excitement of quiz competitions to rural schools and
                communities. These events not only test knowledge but also inspire a love for learning among students of
                all ages.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Program Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Age-appropriate questions covering various subjects</li>
                  <li>Multiple rounds with increasing difficulty</li>
                  <li>Scholarships and educational prizes for winners</li>
                  <li>Participation certificates for all contestants</li>
                  <li>Community involvement and audience participation</li>
                </ul>
              </div>
              <Link href="/education/quiz-competitions">
                <Button className="px-8">Upcoming Competitions</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Village quiz competition"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="scholarships">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Scholarship Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Financial support for deserving students to pursue their educational dreams.
              </p>
            </div>
          </div>
          <Tabs defaultValue="school" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="school">School Education</TabsTrigger>
              <TabsTrigger value="college">College Education</TabsTrigger>
              <TabsTrigger value="vocational">Vocational Training</TabsTrigger>
            </TabsList>
            <TabsContent value="school" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Primary Education Scholarship</CardTitle>
                    <CardDescription>For students in grades 1-5</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Financial assistance for school fees, books, and supplies for primary school students from
                      low-income families.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹5,000 per year</p>
                    <p className="text-sm text-muted-foreground">
                      Eligibility: Family income below ₹1,50,000 per annum
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Middle School Scholarship</CardTitle>
                    <CardDescription>For students in grades 6-8</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Support for middle school students showing academic promise, covering educational expenses and
                      providing mentorship.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹8,000 per year</p>
                    <p className="text-sm text-muted-foreground">Eligibility: Minimum 70% marks in previous class</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>High School Scholarship</CardTitle>
                    <CardDescription>For students in grades 9-12</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Comprehensive support for high school students, including tuition fees, books, and career guidance
                      counseling.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹12,000 per year</p>
                    <p className="text-sm text-muted-foreground">Eligibility: Minimum 75% marks in previous class</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="college" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Undergraduate Scholarship</CardTitle>
                    <CardDescription>For Bachelor's degree students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Financial assistance for students pursuing undergraduate degrees in any discipline at recognized
                      institutions.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹25,000 per year</p>
                    <p className="text-sm text-muted-foreground">Eligibility: Minimum 80% marks in 12th standard</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>STEM Education Scholarship</CardTitle>
                    <CardDescription>For Science, Technology, Engineering, Mathematics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Special scholarship for students pursuing degrees in STEM fields, with additional support for
                      female students.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹30,000 per year</p>
                    <p className="text-sm text-muted-foreground">Eligibility: Admission to recognized STEM program</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Rural Talent Scholarship</CardTitle>
                    <CardDescription>For exceptional rural students</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Full scholarship for exceptionally talented students from rural areas to pursue higher education
                      at premier institutions.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: Up to ₹50,000 per year</p>
                    <p className="text-sm text-muted-foreground">
                      Eligibility: Top 5% in 12th standard, rural residence
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="vocational" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Technical Skills Scholarship</CardTitle>
                    <CardDescription>For ITI and technical courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Support for students pursuing technical courses at Industrial Training Institutes (ITIs) and
                      similar institutions.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹15,000 per year</p>
                    <p className="text-sm text-muted-foreground">
                      Eligibility: Admission to recognized technical course
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Agricultural Training Scholarship</CardTitle>
                    <CardDescription>For agricultural courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Specialized support for students pursuing education in agriculture, horticulture, and related
                      fields.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹20,000 per year</p>
                    <p className="text-sm text-muted-foreground">Eligibility: Admission to agricultural program</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Digital Skills Scholarship</CardTitle>
                    <CardDescription>For computer and IT courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Financial assistance for students pursuing courses in computer applications, IT, and digital
                      technologies.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">Amount: ₹18,000 per year</p>
                    <p className="text-sm text-muted-foreground">Eligibility: Admission to recognized IT course</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <div className="flex justify-center mt-8">
            <Link href="/education/scholarships">
              <Button>View All Scholarships</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Literacy */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Digital literacy training"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Digital Literacy Program</h2>
              <p className="text-muted-foreground md:text-xl">
                In today's digital world, computer skills are essential for education and employment. Our Digital
                Literacy Program equips rural students and adults with the skills they need to navigate the digital
                landscape confidently.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Program Components:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Basic computer operations and internet navigation</li>
                  <li>Email, document creation, and digital communication</li>
                  <li>Online safety and cybersecurity awareness</li>
                  <li>Accessing government services online</li>
                  <li>Mobile banking and digital financial literacy</li>
                  <li>Introduction to coding and digital content creation</li>
                </ul>
              </div>
              <Link href="/education/digital-literacy">
                <Button className="px-8">Join Digital Literacy Program</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Guidance */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Career Guidance</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Helping students make informed decisions about their educational and career paths.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Career Counseling Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  One-on-one counseling sessions with experienced career advisors to help students identify their
                  strengths, interests, and suitable career options.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">For: Students in grades 9-12 and college</p>
                <p className="text-sm text-muted-foreground">Format: In-person and online sessions</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Book a Session
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Career Exploration Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Interactive workshops introducing students to various career fields, educational requirements, and job
                  prospects in different industries.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">For: Students in grades 8-12</p>
                <p className="text-sm text-muted-foreground">Format: Group workshops in schools</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Upcoming Workshops
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Higher Education Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Information and guidance on college admissions, entrance exams, scholarship opportunities, and
                  choosing the right educational institution.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">For: Students in grades 11-12</p>
                <p className="text-sm text-muted-foreground">Format: Seminars and individual guidance</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/education/career-guidance">
              <Button>Explore Career Resources</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Student Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the students whose lives have been transformed through our educational programs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Rahul's Story"
                alt="Student success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Rahul Patil, Wardha</CardTitle>
                <CardDescription>Scholarship Recipient</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "The scholarship from Smart Hatadi Foundation helped me continue my education after 10th grade. With
                  their support, I completed my diploma in mechanical engineering and now work at a manufacturing
                  company in Nagpur."
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Priya's Story"
                alt="Student success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Priya Deshmukh, Amravati</CardTitle>
                <CardDescription>Digital Literacy Program Participant</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Before joining the digital literacy program, I had never used a computer. Now, I can use various
                  applications, search for information online, and even help my parents access government services. I'm
                  pursuing a degree in computer applications."
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Amit's Story"
                alt="Student success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Amit Kale, Yavatmal</CardTitle>
                <CardDescription>Quiz Competition Winner</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Winning the village quiz competition boosted my confidence and motivated me to study harder. The
                  scholarship I received helped me prepare for competitive exams. I've now secured admission to a
                  government engineering college."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Access Educational Support</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us to learn more about our educational programs and how we can support your learning journey.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/education/apply">
                <Button className="px-8">Apply for Programs</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

