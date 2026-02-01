"use client";

import React from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer/Footer";
import { RootState } from "@/lib/store";
import { translations } from "@/lib/translations";


type ServiceContent = {
  title: string;
  intro: string;
  sections?: { title: string; intro: string; list?: string[] }[];
  footerText: string;
};

export default function ServiceDynamicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const lang = useSelector((state: RootState) => state.global.language);
  const isRtl = lang === 'ar';

  
  const servicesDB: Record<string, { en: ServiceContent; ar: ServiceContent }> = {
    
    
    "legal-consultation-services": {
      en: translations.en.legalConsultation, 
      ar: translations.ar.legalConsultation,
    },

    
    "foreign-investment-services": {
      en: {
        title: "Foreign Investment Services",
        intro: "We guide international investors through the complex legal landscape, ensuring compliance with local regulations and maximizing investment potential.",
        footerText: "Start your international journey with us."
      },
      ar: {
        title: "خدمات الاستثمار الأجنبي",
        intro: "نحن نوجه المستثمرين الدوليين عبر المشهد القانوني المعقد، مما يضمن الامتثال للوائح المحلية وتعظيم إمكانات الاستثمار.",
        footerText: "ابدأ رحلتك الدولية معنا."
      }
    },

   
    "contracts": {
      en: {
        title: "Contracts Drafting & Review",
        intro: "Professional drafting and review of commercial, employment, and civil contracts to protect your interests and minimize risks.",
        footerText: "Secure your agreements today."
      },
      ar: {
        title: "صياغة ومراجعة العقود",
        intro: "صياغة ومراجعة مهنية للعقود التجارية والوظيفية والمدنية لحماية مصالحك وتقليل المخاطر.",
        footerText: "قم بتأمين اتفاقياتك اليوم."
      }
    },

    
    "notarization": {
      en: {
        title: "Notarization Services",
        intro: "Official authentication of documents, signatures, and affidavits required for legal and business transactions.",
        footerText: "Certified and trusted notarization."
      },
      ar: {
        title: "خدمات التوثيق",
        intro: "المصادقة الرسمية على المستندات والتوقيعات والإقرارات المطلوبة للمعاملات القانونية والتجارية.",
        footerText: "توثيق معتمد وموثوق."
      }
    },

    
    "insurance": {
      en: {
        title: "Insurance Law",
        intro: "Expert advice on insurance policies, claims disputes, and regulatory compliance for insurers and policyholders.",
        footerText: "Protect your assets."
      },
      ar: {
        title: "قانون التأمين",
        intro: "مشورة الخبراء بشأن بوالص التأمين ونزاعات المطالبات والامتثال التنظيمي لشركات التأمين وحاملي الوثائق.",
        footerText: "احمِ أصولك."
      }
    },

    
    "defense-in-all-cases": {
      en: {
        title: "Defense & Litigation",
        intro: "We represent clients in all types of litigation, including criminal defense, civil disputes, and administrative cases.",
        footerText: "We fight for your rights."
      },
      ar: {
        title: "الدفاع والتقاضي",
        intro: "نمثل العملاء في جميع أنواع الدعاوى القضائية، بما في ذلك الدفاع الجنائي والمنازعات المدنية والقضايا الإدارية.",
        footerText: "نحن نحارب من أجل حقوقك."
      }
    },

    
    "banks-and-financial-institutions": {
      en: {
        title: "Banking & Finance Law",
        intro: "Advising banks and financial institutions on regulations, loan agreements, and financial structuring.",
        footerText: "Secure financial legal support."
      },
      ar: {
        title: "قانون البنوك والتمويل",
        intro: "تقديم المشورة للبنوك والمؤسسات المالية بشأن اللوائح واتفاقيات القروض والهيكلة المالية.",
        footerText: "دعم قانوني مالي آمن."
      }
    },

    
    "corporate-governance-services": {
      en: {
        title: "Corporate Governance",
        intro: "Implementing frameworks to ensure your company is directed and controlled effectively, balancing the interests of stakeholders.",
        footerText: "Build a sustainable business."
      },
      ar: {
        title: "حوكمة الشركات",
        intro: "تطبيق أطر العمل لضمان توجيه شركتك والسيطرة عليها بفعالية، مع الموازنة بين مصالح أصحاب المصلحة.",
        footerText: "ابنِ عملاً مستداماً."
      }
    },

   
    "companies-liquidation": {
      en: {
        title: "Companies Liquidation",
        intro: "Assisting with the orderly winding up of business affairs, ensuring compliance with insolvency laws and creditor rights.",
        footerText: "Professional closure services."
      },
      ar: {
        title: "تصفية الشركات",
        intro: "المساعدة في التصفية المنظمة لشؤون الأعمال، وضمان الامتثال لقوانين الإعسار وحقوق الدائنين.",
        footerText: "خدمات إغلاق احترافية."
      }
    },

    
    "internal-regulations": {
      en: {
        title: "Internal Regulations Drafting",
        intro: "Drafting bylaws, policies, and procedures to govern internal operations and employee conduct.",
        footerText: "Organize your internal structure."
      },
      ar: {
        title: "صياغة اللوائح الداخلية",
        intro: "صياغة اللوائح والسياسات والإجراءات لتنظيم العمليات الداخلية وسلوك الموظفين.",
        footerText: "نظم هيكلك الداخلي."
      }
    },

    
    "services-for-companies": {
      en: {
        title: "Corporate Services",
        intro: "A full suite of legal services tailored for corporations, from day-to-day operations to major transactions.",
        footerText: "Your partner in business."
      },
      ar: {
        title: "خدمات الشركات",
        intro: "مجموعة كاملة من الخدمات القانونية المصممة للشركات، من العمليات اليومية إلى المعاملات الكبرى.",
        footerText: "شريكك في العمل."
      }
    },

    
    "arbitration": {
      en: {
        title: "Arbitration & Dispute Resolution",
        intro: "Representing clients in arbitration proceedings as an alternative to traditional litigation for faster dispute resolution.",
        footerText: "Resolve disputes efficiently."
      },
      ar: {
        title: "التحكيم وفض المنازعات",
        intro: "تمثيل العملاء في إجراءات التحكيم كبديل للتقاضي التقليدي لتسوية المنازعات بشكل أسرع.",
        footerText: "حل المنازعات بكفاءة."
      }
    },

   
    "intellectual-property": {
      en: {
        title: "Intellectual Property Protection",
        intro: "Protecting your trademarks, copyrights, and patents from infringement and managing IP portfolios.",
        footerText: "Protect your ideas."
      },
      ar: {
        title: "حماية الملكية الفكرية",
        intro: "حماية علاماتك التجارية وحقوق النشر وبراءات الاختراع من الانتهاك وإدارة محافظ الملكية الفكرية.",
        footerText: "احمِ أفكارك."
      }
    },

    
    "corporate-restructuring": {
      en: {
        title: "Corporate Restructuring",
        intro: "Advising on mergers, acquisitions, and reorganization to improve efficiency and adapt to market changes.",
        footerText: "Adapt and thrive."
      },
      ar: {
        title: "إعادة هيكلة الشركات",
        intro: "تقديم المشورة بشأن الاندماج والاستحواذ وإعادة التنظيم لتحسين الكفاءة والتكيف مع تغييرات السوق.",
        footerText: "تكيف وازدهر."
      }
    },

    
    "establishing-companies": {
      en: {
        title: "Company Formation",
        intro: "Assisting entrepreneurs with business registration, licensing, and choosing the right legal structure.",
        footerText: "Start your business today."
      },
      ar: {
        title: "تأسيس الشركات",
        intro: "مساعدة رواد الأعمال في تسجيل الأعمال والترخيص واختيار الهيكل القانوني المناسب.",
        footerText: "ابدأ عملك اليوم."
      }
    },

    
    "commercial-agencies": {
      en: {
        title: "Commercial Agencies",
        intro: "Drafting and registering commercial agency agreements and distributorships in compliance with local laws.",
        footerText: "Expand your reach."
      },
      ar: {
        title: "الوكالات التجارية",
        intro: "صياغة وتسجيل اتفاقيات الوكالات التجارية والتوزيع بما يتوافق مع القوانين المحلية.",
        footerText: "وسع نطاق وصولك."
      }
    },

    
    "vision-2030-support": {
      en: {
        title: "Vision 2030 Legal Support",
        intro: "Providing legal guidance to align your business strategies with the goals and incentives of Vision 2030.",
        footerText: "Align with the future."
      },
      ar: {
        title: "دعم رؤية 2030",
        intro: "تقديم التوجيه القانوني لمواءمة استراتيجيات عملك مع أهداف وحوافز رؤية 2030.",
        footerText: "توافق مع المستقبل."
      }
    },

    
    "estates": {
      en: {
        title: "Real Estate & Estates",
        intro: "Handling property transactions, inheritance issues, and estate planning to secure your legacy.",
        footerText: "Secure your legacy."
      },
      ar: {
        title: "العقارات والتركات",
        intro: "التعامل مع المعاملات العقارية وقضايا الميراث وتخطيط التركات لتأمين إرثك.",
        footerText: "أمّن إرثك."
      }
    }
  };

  
  const content = servicesDB[slug]?.[lang === 'ar' ? 'ar' : 'en'];

  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfbf9]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3b2416] mb-4">404</h1>
          <p className="text-lg text-gray-600">Service not found: {slug}</p>
          <Link href="/" className="text-[#d4af37] underline mt-4 block">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col font-sans text-[#3b2416] ${isRtl ? 'font-arabic' : ''}`}>
      
      <main className="flex-grow pt-32 pb-20 relative">
        
        {/* Backg Image */}
        <div 
          className="fixed inset-0 -z-5 pointer-events-none opacity-4 bg-white"
          style={{
             backgroundImage: "url('/images/back-service.png')", 
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "top center"
          }}
        />

        <div className="max-w-screen-2xl mx-auto px-6 lg:px-32 relative z-10">
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 mb-8 transition-opacity"
          >
            <span className={`text-2xl leading-none ${isRtl ? 'rotate-180' : ''}`}>‹</span> {isRtl ? 'عودة' : 'Back'}
          </Link>

          <h1 className="text-4xl lg:text-5xl font-semibold mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {content.title}
          </h1>

          <div className="max-w-4xl text-gray-600 leading-relaxed mb-12 text-justify text-sm lg:text-base">
            <p>{content.intro}</p>
          </div>

          {/* Render Sections if available */}
          {content.sections && (
            <div className="space-y-10 max-w-4xl">
                {content.sections.map((section, idx) => (
                    <div key={idx} className="animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
                        <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                        <div className={`border-gray-300 py-1 ${isRtl ? 'border-r pr-6 lg:pr-8' : 'border-l pl-6 lg:pl-8'}`}>
                            <div className="flex items-start gap-3 text-gray-600 leading-relaxed text-sm lg:text-base">
                                <span className="mt-2 w-2 h-2 bg-[#3b2416] shrink-0 rounded-[1px]"></span>
                                <p>{section.intro}</p>
                            </div>
                            
                            {section.list && section.list.length > 0 && (
                                <ul className={`list-disc mt-3 text-gray-500 space-y-1 marker:text-gray-400 text-sm lg:text-base ${isRtl ? 'pr-10' : 'pl-10'}`}>
                                    {section.list.map((li, i) => (
                                        <li key={i}>{li}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
          )}

          <div className="mt-12 max-w-4xl text-gray-500 text-xs lg:text-sm leading-relaxed border-t border-gray-200 pt-6">
            <p>{content.footerText}</p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}