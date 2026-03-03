"use client"

import React, { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const faqs = [
  {
    q: "Şeffaf plak tedavisinin en büyük avantajı nedir?",
    a: "En büyük avantajı neredeyse görünmez olmasıdır. Sosyal hayatınızda, iş görüşmelerinde ya da günlük iletişimde estetik kaygı yaşamazsınız. Üstelik çıkarılabilir olduğu için yemek yerken ve dişlerinizi fırçalarken konfor sağlar.",
  },
  {
    q: "Şeffaf plak kimler için ideal bir seçenektir?",
    a: "Özellikle yetişkin hastalar, iş hayatında aktif olanlar ve estetik kaygısı yüksek kişiler için mükemmel bir çözümdür. Hafif ve orta düzey çapraşıklıklarda oldukça başarılı sonuç verir. Metal görüntü istemeyen herkes için konforlu bir alternatiftir.",
  },
  {
    q: "Şeffaf plak tedavisi günlük hayatı zorlaştırır mı?",
    a: "Hayır, aksine hayatı kolaylaştırır. Sabit tel olmadığı için batma, yara yapma gibi sorunlar minimumdur. Özel davetlerde kısa süreli çıkarılabildiği için özgüven kaybı yaşanmaz.",
  },
  {
    q: "Şeffaf plak ile daha hızlı sonuç almak mümkün mü?",
    a: "Düzenli kullanımda birçok vakada klasik diş teline yakın, hatta bazı hafif vakalarda daha hızlı sonuç alınabilir. Dijital planlama sayesinde sürecin başında nasıl bir sonuç elde edileceği önceden görülebilir.",
  },
  {
    q: "Şeffaf plak tedavisi özgüveni artırır mı?",
    a: "Kesinlikle evet. Tedavi sürecinde bile dişleriniz estetik görünmeye devam eder. Gülüşünüzü saklamak zorunda kalmazsınız ve süreç boyunca sosyal konforunuz korunur.",
  },
  {
    q: "Diş teli tedavisi neden hâlâ en güçlü ortodontik yöntemdir?",
    a: "Çünkü en karmaşık vakalarda bile yüksek başarı oranına sahiptir. Çene uyumsuzlukları ve ileri düzey çapraşıklıklarda kontrol gücü çok yüksektir. Uzun yıllardır güvenle uygulanan kanıtlanmış bir yöntemdir.",
  },
  {
    q: "Diş teli kimler için daha uygundur?",
    a: "İleri derecede çapraşıklığı olanlar, çene problemleri bulunanlar ve kapsamlı ortodontik düzeltmeye ihtiyaç duyan hastalar için en etkili seçenektir. Çocuk ve ergenlerde oldukça yaygın uygulanır.",
  },
  {
    q: "Estetik diş teli seçenekleri var mı?",
    a: "Evet. Metal braketlerin yanı sıra seramik (diş renginde) braket seçenekleri de mevcuttur. Böylece hem güçlü bir tedavi süreci hem de daha estetik bir görünüm sağlanabilir.",
  },
  {
    q: "Diş teli uzun vadede ne kazandırır?",
    a: "Sadece düzgün bir gülüş değil, aynı zamanda daha sağlıklı bir ağız yapısı kazandırır. Çapraşık dişler daha zor temizlenir; ortodonti sonrası ağız hijyeni kolaylaşır ve diş eti problemleri azalır.",
  },
  {
    q: "Ortodonti tedavisi yatırım yapmaya değer mi?",
    a: "Kesinlikle evet. Çünkü elde edilen sonuç ömür boyu sizinle kalır. Hem estetik hem fonksiyonel bir iyileşme sağlar ve kişinin özgüvenini ciddi şekilde artırır.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="sss" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center lg:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Sık Sorulan Sorular
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Ortodonti Tedavileri Hakkında Merak Edilenler
          </h2>
          <p className="text-lg text-muted-foreground">
            Şeffaf plak, metal braket ve diğer ortodonti tedavileri hakkında en sık sorulan soruları
            sizin için yanıtladık.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          {/* FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-card transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-serif text-sm font-bold text-foreground sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:py-5 sm:text-base">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual side panel */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              {/* Image */}
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/ortodonti-faq.jpg"
                  alt="Ortodonti uzmanı"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </div>

              {/* CTA card */}
              <div className="rounded-2xl bg-primary p-6 text-center">
                <h3 className="mb-2 font-serif text-lg font-extrabold text-primary-foreground">
                  Başka Sorularınız Mı Var?
                </h3>
                <p className="mb-4 text-sm text-primary-foreground/80">
                  Ortodonti ekibimizle hemen iletişime geçin.
                </p>
                <a
                  href="https://wa.me/905417265212?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20ortodonti%20tedavisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp ile Sorun
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA after FAQ */}
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center lg:hidden">
          <h3 className="mb-3 font-serif text-2xl font-extrabold text-primary-foreground">
            Aklınıza Takılan Başka Sorular Mı Var?
          </h3>
          <p className="mb-6 text-primary-foreground/80">
            Ortodonti ekibimizle hemen iletişime geçin.
          </p>
          <a
            href="https://wa.me/905417265212?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20ortodonti%20tedavisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-8 py-4 text-base font-bold text-[hsl(var(--accent-foreground))] shadow-lg transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp ile Sorun
          </a>
        </div>
      </div>
    </section>
  )
}
