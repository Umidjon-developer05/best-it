"use client";
import { useTheme } from "next-themes";
import React from "react";
import SVG from "./_components/SVG/svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Service = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div id="services">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <div class="title">
          <h2>Services</h2>
        </div>
        <div class="cards">
          <div class="card aos-init aos-animate" data-aos="flip-right">
            <SVG resolvedTheme={resolvedTheme} />
            <div class="card-inner">
              <div class="card-front">
                <h3>Web-sites</h3>
                <p>
                  Design of high-quality and modern landing pages and complex
                  web applications
                </p>
              </div>
              <div class="card-back">
                <p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Buyurtma berish</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[525px]">
                      <DialogHeader>
                        <DialogTitle>Website</DialogTitle>
                        <DialogDescription>
                          Design of high-quality and modern landing pages and
                          complex web applications
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 text-start">
                          <Label>Ismingizni kiriting</Label>
                          <Input placeholder="Ismingizni kiriting...." />
                        </div>
                        <div className="flex flex-col gap-2 text-start">
                          <Label>Telefon nomeringizni kiriting</Label>
                          <Input
                            placeholder="Telefon nomeringizni kiriting ...."
                            type="number"
                          />
                        </div>
                        <div className="flex flex-col gap-2 text-start">
                          <Label>Telefon nomeringizni kiriting</Label>
                          <Textarea placeholder="O'zingiz haqizda malumot kiriting..." />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Yuborish</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </p>
              </div>
            </div>
          </div>

          <div class="card aos-init aos-animate" data-aos="flip-right">
            <SVG resolvedTheme={resolvedTheme} />
            <div class="card-inner">
              <div class="card-front">
                <h3>UI&amp;UX Design</h3>
                <p>
                  The process of designing interfaces for digital products such
                  as websites, mobile applications, and software applications
                </p>
              </div>
              <div class="card-back">
                <p>Back Side</p>
              </div>
            </div>
          </div>
          <div class="card aos-init aos-animate" data-aos="flip-right">
            <SVG resolvedTheme={resolvedTheme} />
            <div class="card-inner">
              <div class="card-front">
                <h3>CRM systems</h3>
                <p>
                  Creating a fast and 100% convenient solution system for your
                  business
                </p>
              </div>
              <div class="card-back">
                <p>Back Side</p>
              </div>
            </div>
          </div>
          <div class="card aos-init" data-aos="flip-right">
            <SVG resolvedTheme={resolvedTheme} />
            <div class="card-inner">
              <div class="card-front">
                <h3>Content Maker</h3>
                <p>
                  quality and modern development of the mobile applications you
                  want and their technical support
                </p>
              </div>
              <div class="card-back">
                <p>Back Side</p>
              </div>
            </div>
          </div>
          <div class="card aos-init" data-aos="flip-right">
            <SVG resolvedTheme={resolvedTheme} />
            <div class="card-inner">
              <div class="card-front">
                <h3>Logo &amp; Brending</h3>
                <p>
                  creating a brand name or a shortened version of it, as well as
                  a unique graphic element or design
                </p>
              </div>
              <div class="card-back">
                <p>Back Side</p>
              </div>
            </div>
          </div>
          <div class="card aos-init" data-aos="flip-right">
            <SVG resolvedTheme={resolvedTheme} />
            <div class="card-inner">
              <div class="card-front">
                <h3>Mobilografiya</h3>
                <p>
                  Create a professional video according to your taste with the
                  help of top-class video makers in Uzbekistan
                </p>
              </div>
              <div class="card-back">
                <p>Back Side</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
