"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,

  } from "@/components/ui/carousel"
import Image from "next/image"

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react"
import { EmblaPluginType } from 'embla-carousel'
type PropType = {
    plugins?: EmblaPluginType[]
  }
  import { type CarouselApi } from "@/components/ui/carousel"

export function ImageSlider () {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!api) {
          return
        }
     
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])
     
    return (
        <Carousel  className="pt-[56px]"  setApi={setApi}
        plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true
            }),
          ]}>
            <CarouselContent>
                <CarouselItem>
                    <Image src="/hoodie.webp" alt="TestImage" width={1040} height={446} className="w-full rounded-[16px] h-full aspect-video relative object-cover"/> 
                    <div className="absolute left-8 bottom-8 ">
                      <div className="font-normal text-lg text-black">Wildflower Hoodie</div>
                      <div className="font-bold text-4xl text-black">120’000₮</div>
                    </div>
                </CarouselItem>
                <CarouselItem className="rounded-xl">
                    <Image src="/hoodiee.jpeg" alt="TestImage" width={1040} height={446} className="w-full h-full rounded-[16px] aspect-video relative object-cover"/> 
                    <div className="absolute left-8 bottom-8 ">
                      <div className="font-normal text-lg text-black">Wildflower Hoodie</div>
                      <div className="font-bold text-4xl text-black">120’000₮</div>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}