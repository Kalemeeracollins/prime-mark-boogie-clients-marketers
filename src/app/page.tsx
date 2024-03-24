'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
 return (
   <div className="flex flex-col min-h-[90dvh]">
     <main className="flex-1">
       <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
         <div className="container grid items-center gap-6 px-4 md:px-6">
           <div className="space-y-2 text-center">
             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl ">
               Your Clients. Your Marketers. Managed.
             </h1>
             <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               The platform for seamless collaboration. Connect your clients with the best marketers. Let your team
               focus on delivering results.
             </p>
           </div>
           <div className="mx-auto max-w-sm space-y-2">
             <form className="flex space-x-2">
               <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
               <Button type="submit">Sign Up</Button>
             </form>
             <p className="text-xs text-gray-500 dark:text-gray-400">
               Sign up to get notified when we launch.
               <Link className="underline underline-offset-2" href="#">
                 Terms & Conditions
               </Link>
             </p>
           </div>
         </div>
       </section>
       <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-gradient-to-br from-yellow-300 to-pink-500">
         <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
           <div className="space-y-3">
             <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
               Experience the workflow the best frontend teams love.
             </h2>
             <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.
             </p>
           </div>
           <div className="mx-auto w-full max-w-sm space-y-2">
             <form className="flex space-x-2">
               <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
               <Button type="submit">Sign Up</Button>
             </form>
             <p className="text-xs text-gray-500 dark:text-gray-400">
               Sign up to get notified when we launch.
               <Link className="underline underline-offset-2" href="#">
                 Terms & Conditions
               </Link>
             </p>
           </div>
         </div>
       </section>
     </main>
     <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
       <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Prime Mark Boogie . All rights reserved.</p>
       <nav className="sm:ml-auto flex gap-4 sm:gap-6">
         <Link className="text-xs hover:underline underline-offset-4" href="#">
           Terms of Service
         </Link>
         <Link className="text-xs hover:underline underline-offset-4" href="#">
           Privacy
         </Link>
       </nav>
       <p className="text-xs hover:underline underline-offset-4">@ck_collins</p>
     </footer>
   </div>
 )
}

