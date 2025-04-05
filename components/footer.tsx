import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Smart Hatadi Foundation</h3>
            <p className="text-sm text-muted-foreground">
              Empowering rural communities through sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="icon" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-foreground">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-foreground">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Our Work</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agriculture" className="text-muted-foreground hover:text-foreground">
                  Farmer Support
                </Link>
              </li>
              <li>
                <Link href="/women-empowerment" className="text-muted-foreground hover:text-foreground">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-foreground">
                  Education Hub
                </Link>
              </li>
              <li>
                <Link href="/social-impact" className="text-muted-foreground hover:text-foreground">
                  Social Impact
                </Link>
              </li>
              <li>
                <Link href="/report-issues" className="text-muted-foreground hover:text-foreground">
                  Report Issues
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 mt-0.5" />
                <span className="text-muted-foreground">Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span className="text-muted-foreground">info@smarthatadi.org</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-lg font-medium">Subscribe to Our Newsletter</h3>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">Stay updated with our latest projects and initiatives.</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Smart Hatadi Foundation. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

