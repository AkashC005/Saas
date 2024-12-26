import Button from "@/components/Button"
import Image from "next/image"
import desingExample1Image from '@/assets/images/design-example-1.png'
import desingExample2Image from '@/assets/images/design-example-2.png'
export default function Hero() {
    return <section className="py-24 overflow-x-clip ">
        <div className="container relative">
            <div className="absolute -left-32 top-16 hidden lg:block">
                <Image src = {desingExample1Image} alt="design image"/>
            </div>
            <div className="absolute -right-64 -top-16 hidden lg:block">
                <Image src = {desingExample2Image} alt="design image 2"/>
            </div>

        

            <div className="flex justify-center">
            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold"> ✨  $7.5M in Seed Funding Secured</div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Effortless Design, Powerful Impact</h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Design tools should accelerate, not hinder. Layers blends cutting-edge features with an intuitive interface, making creativity seamless and faster than ever.</p>

            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input className = "bg-transparent px-4 md:flex-1 w-full"type="email" placeholder="Enter your email " />
                <Button variant="primary" type="submit" className="whitespace-nowrap ">Sign Up</Button>
            </form>
        </div>








    </section>
}
