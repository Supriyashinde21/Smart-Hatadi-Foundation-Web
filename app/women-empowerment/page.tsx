import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Scissors, BookOpen, Users, ShoppingBag } from "lucide-react"

export default function WomenEmpowermentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Women Empowerment</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Supporting rural women through skills training, entrepreneurship opportunities, and financial
                  independence.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#programs">
                  <Button className="px-8">Our Programs</Button>
                </Link>
                <Link href="#success-stories">
                  <Button variant="outline" className="px-8">
                    Success Stories
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Women empowerment initiative"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="programs">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive initiatives designed to empower rural women.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <Scissors className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Tailoring Business Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Training in tailoring skills, providing sewing machines, and connecting women to markets to establish
                  sustainable businesses.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/women-empowerment/tailoring">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BookOpen className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Vocational Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Diverse skill development programs including handicrafts, food processing, beauty services, and
                  digital skills.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/women-empowerment/vocational-training">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Self-Help Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Formation and support of women's self-help groups for savings, microfinance, and collective
                  entrepreneurship.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/women-empowerment/self-help-groups">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <ShoppingBag className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Market Linkages</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Connecting women entrepreneurs to markets through exhibitions, online platforms, and retail
                  partnerships.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/women-empowerment/market-linkages">
                  <Button variant="ghost" size="sm">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Tailoring Program */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tailoring Business Program</h2>
              <p className="text-muted-foreground md:text-xl">
                Our flagship program provides comprehensive support to women interested in establishing tailoring
                businesses. From basic stitching to advanced design, we equip women with the skills, tools, and market
                connections needed to build sustainable livelihoods.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Program Components:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>3-month intensive training in tailoring and garment making</li>
                  <li>Provision of sewing machines and basic equipment</li>
                  <li>Business skills training including pricing, marketing, and customer service</li>
                  <li>Market connections through exhibitions and retail partnerships</li>
                  <li>Ongoing mentorship and support</li>
                </ul>
              </div>
              <Link href="/women-empowerment/tailoring">
                <Button className="px-8">Apply for Program</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Women in tailoring workshop"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="success-stories">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Inspiring journeys of rural women who transformed their lives through our programs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Sunita's Story"
                alt="Success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Sunita Kale, Yavatmal</CardTitle>
                <CardDescription>Tailoring Business Owner</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Before joining the tailoring program, I was dependent on my husband's irregular income. After
                  completing the training and receiving a sewing machine, I started my own tailoring shop. Today, I earn
                  ₹8,000-10,000 per month and have employed two other women from my village."
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Laxmi's Story"
                alt="Success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Laxmi Jadhav, Amravati</CardTitle>
                <CardDescription>Self-Help Group Leader</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "Our self-help group started with 10 women saving ₹100 each month. With the foundation's support, we
                  received training in food processing and started a pickle-making business. Our products are now sold
                  in local markets and through online platforms, providing steady income for all members."
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/placeholder.svg?height=200&width=400&text=Rekha's Story"
                alt="Success story"
                width={400}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Rekha Patil, Wardha</CardTitle>
                <CardDescription>Digital Entrepreneur</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  "The digital skills training opened a new world for me. I learned how to use smartphones and social
                  media for business. Now I sell handmade crafts online and manage orders through WhatsApp. My income
                  has doubled, and I'm teaching other women in my village these skills."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Training Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover opportunities to learn new skills and start your entrepreneurial journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Advanced Tailoring Workshop</CardTitle>
                <CardDescription>October 15-30, 2023 | Nagpur District</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Two-week intensive training on advanced garment making, including design, pattern making, and
                  specialized stitching techniques.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Eligibility: Women with basic tailoring skills</p>
                <p className="text-sm text-muted-foreground">Seats: 20</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Digital Marketing for Women Entrepreneurs</CardTitle>
                <CardDescription>November 5-10, 2023 | Amravati District</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Six-day workshop on using social media, online marketplaces, and digital tools to promote and sell
                  products and services.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Eligibility: Women with existing businesses</p>
                <p className="text-sm text-muted-foreground">Seats: 15</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Self-Help Group Formation</CardTitle>
                <CardDescription>December 1-2, 2023 | Multiple Districts</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Two-day workshop on forming and managing self-help groups, including savings, microfinance, and
                  collective entrepreneurship.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Eligibility: All women</p>
                <p className="text-sm text-muted-foreground">Seats: Unlimited</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/women-empowerment/training-calendar">
              <Button>View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Resources for Women</h2>
              <p className="text-muted-foreground md:text-xl">
                Access a wealth of information and resources designed to support women in their entrepreneurial journey.
                From business guides to government schemes, we provide everything you need to succeed.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Available Resources:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Business startup guides</li>
                  <li>Financial literacy materials</li>
                  <li>Government schemes for women entrepreneurs</li>
                  <li>Marketing and sales strategies</li>
                  <li>Success stories and case studies</li>
                  <li>Networking opportunities</li>
                </ul>
              </div>
              <Link href="/women-empowerment/resources">
                <Button className="px-8">Explore Resources</Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Women accessing resources"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Women Empowerment Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards financial independence and personal growth.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/women-empowerment/apply">
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

