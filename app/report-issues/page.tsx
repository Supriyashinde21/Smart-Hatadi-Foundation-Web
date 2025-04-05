import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, AlertTriangle, Building, Phone } from "lucide-react"

export default function ReportIssuesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Report Village Issues</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A platform for villagers to report local problems directly to authorities and track their resolution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#report-form">
                  <Button className="px-8">Report an Issue</Button>
                </Link>
                <Link href="#track-issues">
                  <Button variant="outline" className="px-8">Track Existing Issues</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="Village issue reporting" 
                width={600} 
                height={400} 
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A simple process to report issues and get them resolved by the relevant authorities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <CardTitle>Submit Your Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fill out the issue reporting form with details about the problem, location, and supporting evidence like photos.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <CardTitle>Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our team verifies the issue and identifies the appropriate government department or authority responsible for resolution.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <CardTitle>Submission to Authorities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We forward the report to the relevant authorities through official channels and follow up regularly on progress.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <CardTitle>Track Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>You can track the status of your reported issue through our platform and receive updates on resolution progress.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Issues We Can Help With</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We facilitate reporting and resolution of various village-level problems.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Infrastructure Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Road damage and potholes</li>
                  <li>Bridge repairs and safety concerns</li>
                  <li>Drainage and sewage problems</li>
                  <li>Street lighting issues</li>
                  <li>Public building maintenance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Water and Sanitation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Water supply disruptions</li>
                  <li>Water quality concerns</li>
                  <li>Public tap maintenance</li>
                  <li>Hand pump repairs</li>
                  <li>Public toilet facilities</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Public Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Power supply issues</li>
                  <li>Waste collection and management</li>
                  <li>Public transport problems</li>
                  <li>School and healthcare facility issues</li>
                  <li>Ration shop irregularities</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Agriculture Related
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Irrigation canal maintenance</li>
                  <li>Agricultural subsidy distribution</li>
                  <li>Seed and fertilizer quality issues</li>
                  <li>Crop insurance claims</li>
                  <li>Market access problems</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Administrative Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Document processing delays</li>
                  <li>Corruption and bribery</li>
                  <li>Land record discrepancies</li>
                  <li>Pension and benefit distribution</li>
                  <li>Gram Panchayat functioning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" />
                  Other Concerns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Environmental issues</li>
                  <li>Public safety concerns</li>
                  <li>Stray animal management</li>
                  <li>Community disputes</li>
                  <li>Any other village-level problems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="report-form">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Report an Issue</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to report a problem in your village.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Your Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="village" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Village/Town
                  </label>
                  <Input id="village" placeholder="Enter your village or town name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="district" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    District
                  </label>
                  <Input id="district" placeholder="Enter your district" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="issue-type" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Issue Category
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select issue category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="infrastructure">Infrastructure Issues</SelectItem>
                    <SelectItem value="water">Water and Sanitation</SelectItem>
                    <SelectItem value="services">Public Services</SelectItem>
                    <SelectItem value="agriculture">Agriculture Related</SelectItem>
                    <SelectItem value="administrative">Administrative Issues</SelectItem>
                    <SelectItem value="other">Other Concerns</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="issue-title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Issue Title
                </label>
                <Input id="issue-title" placeholder="Enter a brief title for the issue" />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Detailed Description
                </label>
                <Textarea id="description" placeholder="Describe the issue in detail" className="min-h-[150px]" />
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Specific Location
                </label>
                <Input id="location" placeholder="Enter the specific location of the issue" />
              </div>
              <div className="space-y-2">
                <label htmlFor="photo" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Upload Photos (Optional)
                </label>
                <Input id="photo" type="file" multiple accept="image/*" />
                <p className="text-xs text-muted-foreground">Upload photos of the issue to help authorities understand the problem better.</p>
              </div>
              <Button type="submit" className="w-full">Submit Report</Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you confirm that the information provided is accurate to the best of your knowledge.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Track Issues */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" id="track-issues">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Track Your Reported Issues</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enter your report ID to check the status of your reported issue.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg mt-8">
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="report-id" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Report ID
                </label>
                <Input id="report-id" placeholder="Enter your report ID" />
              </div>
              <Button type="submit" className="w-full">Track Issue</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Issues that were successfully resolved through our platform.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <Image 
                src="/placeholder.svg?height=200&width=400&text=Road Repair" 
                alt="Road repair success story" 
                width={400} 
                height={200} 
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Road Repair in Wardha Village</CardTitle>
                <CardDescription>Infrastructure Issue</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A damaged road that had been causing accidents and transportation difficulties was repaired within 3 weeks of reporting through our platform.</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Report ID: WRD2023001</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <Building className="mr-2 h-4 w-4" />
                  <span>Authority: Public Works Department</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Status: Resolved</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <Image 
                src="/placeholder.svg?height=200&width=400&text=Water Supply" 
                alt="Water supply success story" 
                width={400} 
                height={200} 
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Water Supply Restoration in Amravati</CardTitle>
                <CardDescription>Water and Sanitation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A village that had been facing water supply disruptions for months got the issue resolved after it was reported and escalated to the Water Resources Department.</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Report ID: AMR2023015</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <Building className="mr-2 h-4 w-4" />
                  <span>Authority: Water Resources Department</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Status: Resolved</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <Image 
                src="/placeholder.svg?height=200&width=400&text=Electricity" 
                alt="Electricity success story" 
                width={400} 
                height={200} 
                className="w-full object-cover h-48"
              />
              <CardHeader className="pb-2">
                <CardTitle>Power Supply Improvement in Yavatmal</CardTitle>
                <CardDescription>Public Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Frequent power outages affecting agricultural operations were addressed after the issue was reported. New transformers were installed to improve reliability.</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Report ID: YVT2023008</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <Building className="mr-2 h-4 w-4" />
                  <span>Authority: Electricity Department</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 mr-2 bg-green-500 rounded-full"></span>
                  <span>Status: Resolved</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Contacts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Government Department Contacts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Direct contact information for various government departments.
              </p>
            </div>
          </div>
          <Tabs defaultValue="infrastructure" className="mt-8">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="water">Water</TabsTrigger>
              <TabsTrigger value="electricity">Electricity</TabsTrigger>
              <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="infrastructure" className="mt-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Public Works Department</CardTitle>
                    <CardDescription>Roads, Bridges, Government Buildings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mt-2 text-sm">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>Toll-Free: 1800-XXX-XXXX</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>Email: pwd@maharashtra.gov.in</p>
                      <p className="mt-1">Website: pwd.maharashtra.gov.in</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Rural Development Department</CardTitle>
                    <CardDescription>Village Infrastructure, MGNREGA</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mt-2 text-sm">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>Toll-Free: 1800-XXX-XXXX</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>Email: rdd@maharashtra.gov.in</p>
                      <p className="mt-1">Website: rdd.maharashtra.gov.in</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Gram Panchayat Office</CardTitle>
                    <CardDescription>Village-level Administration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mt-2 text-sm">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>Contact your local Gram Panchayat</span>
                    </div>
                    <div className="mt-2 text-sm">
                      <p>Sarpanch and Gram Sevak are the primary contacts</p>
                      <p className="mt-1">Visit your village Panchayat office</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">Find Your Panchayat</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            {/* Other tab contents would be similar */}
          </Tabs>
          <div className="flex justify-center mt-8">
            <Link href="/report-issues/government-contacts">
              <Button>View All Government Contacts</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our issue reporting system.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>How long does it take for an issue to be resolved?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Resolution time varies depending on the nature and complexity of the issue. Simple problems might be resolved within a week, while more complex issues could take several weeks or months. We provide regular updates on the status of your reported issue.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Is there any fee for reporting an issue?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>No, our issue reporting service is completely free. As a non-profit organization, we aim to facilitate better governance and improve rural living conditions without any charges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Can I report an issue anonymously?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>While we encourage providing contact details for follow-up, you can choose to report issues anonymously. However, please note that anonymous reports may be harder to verify and follow up on, potentially affecting the resolution process.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>What happens after I submit a report?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>After submission, our team verifies the issue, assigns it a unique ID, and forwards it to the relevant government department. You'll receive updates via SMS or email (if provided) about the status of your report. You can also track the status using your report ID.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Can I report multiple issues in one form?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We recommend submitting separate reports for different issues to ensure each problem receives proper attention and is directed to the appropriate department. This also makes it easier to track the status of each issue individually.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text\

