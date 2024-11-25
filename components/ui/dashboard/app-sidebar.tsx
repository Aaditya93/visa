"use client"

import * as React from "react"
import { BsPassport } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { LiaCcVisa } from "react-icons/lia";
import {

  Command,

  LifeBuoy,

  Send,

} from "lucide-react"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Aaditya",
    email: "m@example.com",
    avatar: "/124599.png",
  },
  navMain: [
    {
      title: "Fliter",
      url: "#",
      icon: CiFilter,
      isActive: true,
      items: [
       
        {
          title: "Country",
          url: "#",
        },
      
          {
            title: "⁠Passport Number" ,
            url: "#",
          },
          {
            title: "Guest Name",
            url: "#",
          },
          {
            title: "Travel Date",
            url: "#",
          },
          {
            title: "Departure Date",
            url: "#",
          },
          {
            title: "Arrival Airport",
            url: "#",
          },
          {
            title: "Creator",
            url: "#",
          },
          {
            title: "Handled By",
            url: "#",
          },
          {
            title: "Created Date",
            url: "#",
          },
          {
            title: "Created Time",
            url: "#",
          },
          
       
      ],
    },
    {
      title: "Visa Status",
      url: "#",
      icon: LiaCcVisa,
      items: [
        {
          title: "Scuccess",
          url: "#",
        },
        {
          title: "Cancelled",
          url: "#",
        }
      ],
    }
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  Upload: [
    {
      name: "Upload Visa File",
      url: "/upload/file",
      icon: CiFileOn,
    },
    {
      name: "Upload Passport",
      url: "/upload/passport",
      icon: BsPassport,
    },
   
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image
                    src="/tours.png"
                    alt=""
                    className="rounded-xl"

                    width={50}
                    height={50} />  
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Victoria Tours</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.Upload} />

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
