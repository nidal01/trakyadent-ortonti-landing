"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Layers,
  Brackets,
  Gem,
  Baby,
  Bone,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Users,
  ListOrdered,
} from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

const treatments = [
  {
    icon: Layers,
    label: "Şeffaf Plak Tedavisi",
    title: "Şeffaf Plak Tedavisi",
    shortDesc: "Görünmez, çıkarılabilir ve konforlu şeffaf plaklar ile dişlerinizi estetik şekilde hizalayın.",
    longDesc:
      "Şeffaf plak tedavisi, özel olarak üretilen şeffaf ve çıkarılabilir plaklar aracılığıyla dişlerin yavaşça doğru konuma yönlendirilmesini sağlar. 3D dijital planlama teknolojimiz sayesinde tedaviye başlamadan önce sonucu görebilirsiniz. Metal tel olmadan, sosyal hayatınızı olumsuz etkilemeden ortodonti tedavinizi tamamlayın.",
    benefits: [
      "Neredeyse görünmez – sosyal ve iş hayatında estetik kaygı yok",
      "Çıkarılabilir – yemek yerken ve diş fırçalarken konfor",
      "3D dijital planlama ile öngörülebilir sonuç",
      "Metal tel yok, batma ve yara riski minimumdur",
    ],
  },
  {
    icon: Brackets,
    label: "Metal Braket",
    title: "Metal Braket",
    shortDesc: "Kanıtlanmış etkinliğiyle her türlü çapraşıklık için güvenilir ortodontik çözüm.",
    longDesc:
      "Metal braket tedavisi, onlarca yıldır ortodontide en yaygın ve güvenilir yöntemlerden biri olarak uygulanmaktadır. İleri derecede çapraşıklıklarda, çene uyumsuzluklarında ve karmaşık vakalarda son derece başarılı sonuçlar verir. Uzman ortodonti ekibimiz, her hastaya özel bir tedavi planı oluşturur.",
    benefits: [
      "Her türlü çapraşıklıkta yüksek başarı oranı",
      "Çene uyumsuzlukları dahil karmaşık vakalar için ideal",
      "Kanıtlanmış yöntem, onlarca yıllık klinik deneyim",
      "Çocuk ve ergenlerde en yaygın uygulanan tedavi",
    ],
  },
  {
    icon: Gem,
    label: "Seramik (Estetik) Braket",
    title: "Seramik (Estetik) Braket",
    shortDesc: "Diş renginde seramik braketler ile güçlü tedavi ve daha estetik görünüm bir arada.",
    longDesc:
      "Seramik braketler, metal braketlerin etkinliğini diş rengine uyum sağlayan estetik görünümleriyle birleştirir. Hem gücünden ödün vermeden hem de daha az dikkat çekici bir ortodonti süreci geçirmek isteyenler için mükemmel bir seçenektir.",
    benefits: [
      "Metal braket gücünde, daha estetik görünüm",
      "Diş rengiyle uyumlu, daha az dikkat çeker",
      "Yetişkinler ve estetik kaygısı yüksek hastalar için ideal",
      "Karmaşık vakalarda da güvenle uygulanır",
    ],
  },
  {
    icon: Baby,
    label: "Çocuk Ortodontisi",
    title: "Çocuk Ortodontisi",
    shortDesc: "Erken müdahale ile çocuğunuzun çene ve diş gelişimini doğru yönde destekleyin.",
    longDesc:
      "Çocuklarda ortodontik sorunların erken yaşta tespit edilmesi, ilerleyen dönemde daha kapsamlı tedavilerin önüne geçebilir. Uzman ortodonti ekibimiz, çocuğunuzun büyüme ve gelişim sürecini dikkate alarak kişiye özel bir tedavi planı oluşturur. Hem diş hem de çene gelişimini destekleyerek sağlıklı bir ağız yapısının temelini atar.",
    benefits: [
      "Erken müdahale ile ileride büyük tedavilerin önlenmesi",
      "Çene ve diş gelişiminin doğru yönde desteklenmesi",
      "Çocuk dostu, konforu ön planda tutan tedavi süreci",
      "Hem fonksiyonel hem estetik uzun vadeli fayda",
    ],
  },
  {
    icon: Bone,
    label: "Çene Bozuklukları Tedavisi",
    title: "Çene Bozuklukları Tedavisi",
    shortDesc: "Üst ve alt çene uyumsuzluklarını ortodontik yöntemlerle düzelterek fonksiyonel ve estetik iyileşme sağlayın.",
    longDesc:
      "Çene bozuklukları; ısırma problemleri, çiğneme güçlüğü ve estetik kaygılar gibi birçok soruna yol açabilir. Ortodonti ve gerekli durumlarda ortognatik cerrahi ile birlikte planlanan tedaviler, hem fonksiyonel hem de estetik açıdan kalıcı çözümler sunar. Ekibimiz kapsamlı bir değerlendirme ile size en uygun yol haritasını çizer.",
    benefits: [
      "Üst-alt çene uyumsuzluklarının giderilmesi",
      "Isırma ve çiğneme fonksiyonunun iyileştirilmesi",
      "Ortodonti ve gerekirse cerrahi ile kapsamlı planlama",
      "Fonksiyonel ve estetik açıdan kalıcı sonuçlar",
    ],
  },
  {
    icon: HelpCircle,
    label: "Neden Şeffaf Plak?",
    title: "Neden Şeffaf Plak?",
    shortDesc: "Şeffaf plak tedavisinin metal tel ile karşılaştırmasını ve öne çıkan avantajlarını keşfedin.",
    longDesc:
      "Şeffaf plak tedavisi, günümüzde özellikle yetişkin hastalar arasında giderek artan bir tercih haline gelmiştir. Bunun başlıca nedeni; tedavi süresince neredeyse görünmez olması, çıkarılabilir yapısı ve dijital planlama sayesinde öngörülebilir sonuçlar vermesidir. Metal tel alternatifine kıyasla estetik kaygı yaratmadan günlük hayatınıza devam etmenizi sağlar.",
    benefits: [
      "Metal tel yok – ağızda batma ve yara oluşturma riski minimumdur",
      "Neredeyse görünmez – iş ve sosyal hayatı olumsuz etkilemez",
      "Çıkarılabilir – yemek, fırçalama ve özel anlarda konfor",
      "Dijital planlama sayesinde tedavi başlamadan sonuç simülasyonu görülebilir",
    ],
  },
  {
    icon: Users,
    label: "Şeffaf Plak Kimler İçin Uygundur?",
    title: "Şeffaf Plak Kimler İçin Uygundur?",
    shortDesc: "Şeffaf plak tedavisinden en iyi sonucu kimlerin alacağını öğrenin.",
    longDesc:
      "Şeffaf plak tedavisi; hafif ile orta düzey çapraşıklıklarda, diş aralıklarında ve bazı ısırma problemlerinde oldukça etkilidir. Özellikle estetik kaygısı yüksek yetişkinler, iş hayatında aktif bireyler ve gençler için ideal bir seçenektir. Tedaviyi başarılı kılacak en kritik faktör ise plaklara günde 20–22 saat uyum sağlayabilmektir.",
    benefits: [
      "Hafif ve orta düzey çapraşıklığı olan yetişkinler ve gençler",
      "Estetik kaygısı yüksek, metal görünümden kaçınan hastalar",
      "İş veya sosyal hayatı nedeniyle daha konforlu bir süreç arayanlar",
      "Plakları düzenli ve disiplinli şekilde kullanabilecek hastalar",
    ],
  },
  {
    icon: ListOrdered,
    label: "Şeffaf Plak Süreci",
    title: "Şeffaf Plak Süreci",
    shortDesc: "İlk muayeneden son kontrole kadar şeffaf plak tedavisinin adım adım nasıl ilerlediğini öğrenin.",
    longDesc:
      "Şeffaf plak tedavisi kapsamlı bir planlama süreciyle başlar. İlk muayenede ağız yapısı ve diş dizilimi dijital yöntemlerle analiz edilir; kişiye özel plak serisi 3D yazılımla tasarlanır. Her plak seti yaklaşık 1–2 haftada bir değiştirilir ve periyodik kontroller ile süreç yakından takip edilir.",
    benefits: [
      "1. Dijital muayene ve 3D diş analizi",
      "2. Kişiye özel plak serisinin tasarımı ve üretimi",
      "3. İlk plakların teslimi ve kullanım eğitimi",
      "4. Periyodik kontrol seansları ile sürecin takibi",
    ],
  },
]

function TreatmentContent({ treatment }: { treatment: typeof treatments[0] }) {
  return (
    <div className="p-4 sm:p-5 lg:p-10">
      <div className="mb-4 sm:mb-6">
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
          {treatment.longDesc}
        </p>
      </div>
      <div className="mb-5 rounded-xl bg-muted/50 p-3 sm:mb-8 sm:p-6">
        <h4 className="mb-2 font-serif text-sm font-bold text-foreground sm:mb-4 sm:text-lg">
          Tedavinin Avantajları
        </h4>
        <ul className="flex flex-col gap-2 sm:gap-3">
          {treatment.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 sm:gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(var(--accent))] sm:h-5 sm:w-5" />
              <span className="text-xs text-muted-foreground sm:text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
        <a
          href="https://wa.me/905417265212?text=Merhaba%2C%0AMaslak%20klini%C4%9Finizde%20ortodonti%20tedavisi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.%0AUygun%20saatler%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F%20REF%3A001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-4 py-2.5 text-xs font-bold text-[hsl(var(--accent-foreground))] shadow-md transition-all hover:scale-[1.02] hover:shadow-lg sm:px-6 sm:py-3.5 sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          Bu Tedavi Hakkında Bilgi Al
        </a>
        <a
          href="tel:02129126867"
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:px-6 sm:py-3.5 sm:text-sm"
        >
          0212 912 68 67 Hemen Ara
        </a>
      </div>
    </div>
  )
}

export function Treatments() {
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeTreatment = treatments[activeTab]

  return (
    <section id="tedaviler" className="bg-background py-16 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 lg:mb-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Ortodonti Tedavilerimiz
          </span>
          <h2 className="mb-4 font-serif text-3xl font-extrabold text-foreground lg:text-4xl">
            Kişiye Özel Ortodonti Tedavileri
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            Uzman ortodonti ekibimiz, diş ve çene yapınıza uygun kişiye özel tedavi planı oluşturur.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Mobile: Accordion */}
          <div className="flex flex-col gap-2 lg:hidden">
            {treatments.map((treatment, index) => {
              const isOpen = mobileOpen === index
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <button
                    onClick={() => setMobileOpen(isOpen ? null : index)}
                    className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors ${isOpen
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground"
                      }`}
                  >
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${isOpen ? "bg-primary-foreground/20" : "bg-primary/10"
                        }`}
                    >
                      <treatment.icon
                        className={`h-5 w-5 ${isOpen ? "text-primary-foreground" : "text-primary"
                          }`}
                      />
                    </div>
                    <span className="flex-1 text-sm font-bold">{treatment.title}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        } ${isOpen ? "text-primary-foreground" : "text-muted-foreground"}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      {isOpen && <TreatmentContent treatment={treatment} />}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Desktop: Side tabs + Content */}
          <div className="hidden gap-8 lg:grid lg:grid-cols-[280px_1fr]">
            {/* Tab buttons - Desktop sidebar */}
            <div className="flex flex-col gap-1.5">
              {treatments.map((treatment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${activeTab === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                    }`}
                >
                  <treatment.icon
                    className={`h-5 w-5 flex-shrink-0 ${activeTab === index ? "text-primary-foreground" : "text-primary"
                      }`}
                  />
                  <span className="text-sm font-semibold">{treatment.title}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="p-6 lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <activeTreatment.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-extrabold text-foreground lg:text-3xl">
                      {activeTreatment.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      Trakyadent Ortodonti
                    </p>
                  </div>
                </div>
                <TreatmentContent treatment={activeTreatment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
