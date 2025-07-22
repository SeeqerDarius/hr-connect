'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';

const speakerBackgrounds = [
  '/images/IMG-20250610-WA0018.jpg',
  //'/images/speakers/Patricia-Ama-Kissi.jpg',
  //'/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
  //'/images/speakers/Oscar-Bimpong.jpg',
  //'/images/comander.jpg',
  //'/images/speakers/PATRICIA-OBO-NAI.jpg',
  //'/images/speakers/Rosie Ebe-Arthur.jpg',
  //'/images/speakers/Yvone-Wiredu.jpg',
];

interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  category?: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    bio: `Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana.
          Ing. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from KNUST, an Executive MBA in Project Management from University of Ghana Business School and has completed executive education programmes at the Kellogg School of Management USA, London Business School, and INSEAD in France.
          She has over two decades of experience in IT and Telecommunications, working as Technology Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business and Customer Operations of Telecel Ghana prior to becoming CEO.
          She is recognized for her leadership and has numerous awards to her credit. She is passionate about the future of the youth and women in the digital age and has been on several local and international platforms including the UN General Assembly.
          She serves on several boards, including KNUST Engineering Education Project, ABSA Bank Ghana, and the Global Young Academy Advisory Board, Germany.`,
    imageUrl: '/images/speakers/PATRICIA-OBO-NAI.jpg',
    category: 'Guest Speaker'
  },
  {
    id: 2,
    name: 'Oscar Bimpong',
    title: 'Founder, Train2inspire Consultancy',
    bio: `Oscar Bimpong is the Founder and CEO of Train2inspire Consultancy with operations in both the UK and Ghana. 
          He is a Mindset Transformation Consultant, Corporate Trainer, and Keynote Speaker with over 17 years of experience.
          He is the author of "Mindset Revolution: Re-engineering Your Mind from Prison to Purpose" and three other books focused on mindset development.
          Oscar is BBC-trained in radio operations and media production and has earned numerous awards. 
          He currently lectures at Arden University and leads mindset initiatives across Africa.`,
    imageUrl: '/images/speakers/Oscar-Bimpong.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 3,
    name: 'Kojo Amissah',
    title: 'Strategy & Performance Consultant - CITAM',
    bio: `Kojo Amissah is a Strategy and Performance Consultant at CITAM, where he leads high-impact training, consulting, and staffing services. He also serves as the lead instructor for the SHRM-CP and SHRM-SCP certification prep courses.
Kojo brings extensive consulting and training experience in areas such as strategic planning, leadership and change management, performance management, competency management, and compensation and benefits. He has worked across various sectors, including oil and gas, mining, manufacturing, finance, and the public sector, supporting a wide range of organizational development initiatives.
He holds a BS in Computer Science, an MBA in Entrepreneurship, and professional certifications including SHRM-SCP and SPHR.
Kojo simply loves all things HR.`,
    imageUrl: '/images/speakers/Mr-Kojo-Amissah.jpg',
    category: 'Panel Moderator'
  },
  {
    id: 4,
    name: 'Patricia Ama Kissi',
    title: 'CEO SEDAT Consult',
    bio: `Patricia Ama Kissi has over 15 years in artificial intelligence research with multiple publications. 
          She leads AI accessibility and ethics initiatives and is a regular speaker at international tech conferences.`,
    imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 5,
    name: 'ERIC KOJO VAN-ESS KURANCHIE',
    title: 'Strategic HR Leader & Group Head of HR, Bank of Africa Ghana',
    bio: `Eric Kojo is a strategic HR expert with over 15 years experience in Talent and Change Management. 
          He leads HR strategy at Bank of Africa Ghana and has worked with ProCredit SLC, NND Digital, 
          and Millennium Insurance.
          He holds an MSc in Development Management, an Executive MBA in HRM, and a BSc in Business Management. 
          He regularly speaks at corporate events such as Citi FM's Corporate Business Bootcamp.`,
    imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
    category: 'M.C'
  },
  {
    id: 6,
    name: 'Commander James Emmanuel Kwegyir Aggrey-Orleans',
    title: 'Trauma & Orthopaedic Surgeon',
    bio: `Commander James Emmanuel Kwegyir Aggrey-Orleans
          Ghanaian Navy
          Trauma & Orthopaedic Surgeon
          Commander James Emmanuel Kwegyir Aggrey-Orleans is a
          senior officer of the Ghana Navy and is organic to Ghana
          Armed Forces Medical Services where he serves as a
          Trauma and Orthopaedic surgeon, Medical Support planner
          and instructor.`,
    imageUrl: '/images/speakers/healthline.jpg',
    category: 'Panel Member'
  },
  {
    id: 7,
    name: 'Rosie Ebe-Arthur',
    title: 'HR Consultant & Board Director',
    bio: `Rosie Ebe-Arthur is a Chartered Fellow of the Chartered Institute of Personnel and Development (CIPD) UK and 
Board Director on a couple of Boards in Ghana. She brings with her a plethora of experience from the United 
Kingdom and Africa.`,
    imageUrl: '/images/speakers/Rosie Ebe-Arthur.jpg',
    category: 'Panel Member'
  },
  {
    id: 8,
    name: 'Paa Kwesi-Barnes',
    title: 'Moderator',
    bio: `???.`,
    imageUrl: '/images/speakers/Paa-Kwesi-Barnes-moderator.jpg',
    category: 'Panel Moderator'
  },
  {
    id: 9,
    name: 'Yvonne Wiredu-Akpabli',
    title: 'HR Consultant/ Corporate Trainer-SHRM',
    bio: `Yvonne is a highly trained HR professional with over 16 years of experience in the practice of managing a broad spectrum of human resources programs, services, and functions; She possesses a strong command on performance management, employment laws, recruitment & selection, benefit plans, training and development; and compliance issues.
She has significant experience managing various HR assignments for public sector organisations, NGOs, Telecommunication, financial, national, shipping, and multinational companies. 
Yvonne holds an MBA in Human Resource Management from the Ghana Institute of Management and Public Administration (GIMPA). She also has a BA in English and French from the University of Cape Coast. In 2017, she was certified as a global HR professional after passing her SPHRi from HRCI. HR Focus also adjudged her as one of the top 40 HR Practitioners in Ghana in the same year. She also holds an LLB from GIMPA and an LLM in Labour Law from the University of Ghana Law School. She is a member of SHRM, a global HR forum, ACHR Ghana and a Fellow at CIHRP Ghana. She is a facilitator of HR courses at the HR Certification Centre and the Chartered Institute of Human Resource Managers (CIHRM) Ghana. She was adjudged the HR Personality of the year by the HRCC in 2023.`,
    imageUrl: '/images/speakers/Yvone-Wiredu.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 10,
    name: 'Dr. Cheryl Arutt',
    title: 'clinical & forensic psychologist',
    bio: `Dr. Cheryl Arutt is a licensed clinical & forensic psychologist, TEDx speaker, media consultant and Certified EMDRIA Therapist & Consultant based in Los Angeles. A specialist in creative resilience & post-traumatic growth, Dr. Cheryl offers EMDR Intensives & Adjunct EMDR via telehealth. She graduated summa cum laude from UCLA and holds a Doctor of Psychology (PsyD) degree from CSPP-LA, where she was awarded Outstanding Clinical Dissertation. A passionate advocate for survivors of trauma, Dr. Cheryl has served on several Boards dedicated to helping survivors, and consults with clinicians and organizations about effectively treating complex and developmental trauma. Dr. Cheryl is Access Hollywood's go-to psychologist for trauma issues, a frequent psychological expert on networks including CNN, HLN and DiscoveryID, and speaks internationally about trauma, creativity and post-traumatic growth. For more information, please visit askdrcheryl.com and CreativeEMDR.com .`,
    imageUrl: '/images/speakers/Dr.-Cheryl-Arutt.jpg',
    category: 'Panel Member'
  },
  {
    id: 11,
    name: 'Mary Bennett',
    title: 'Learning and Organiztional Transition Manager, Pecan Energies',
    bio: `?????`,
    imageUrl: '/images/speakers/Mary-Bennett.jpg',
    category: 'Panel Moderator'
  },
  {
    id: 12,
    name: 'Isidore Kpotufe',
    title: 'Founder and CEO, RiviaCo (Rivia)',
    bio: `Isidore is a technology entrepreneur with a track record in building ventures across
          finance, transportation, and healthcare in Africa.
          He is one of the few technology founders in Africa to have exited their startup in a
          million-dollar deal through the sale of his startup, stabus, to Canada-based company
          Treepz.
 As the Founder and CEO of RiviaCo (Rivia), Isidore leads a healthcare venture that
 operates a network of “smart clinics” offering differentiated primary care services in
 Ghana. Rivia uses technology to personalise patient treatment and broaden access to
 quality healthcare services. Rivia currently operates 6 clinics in Ghana serving th
 Before his role at Rivia, Isidore served as the Chief Marketing Officer of Treepz, a
 Canadian-based mobility startup specialising in developing technology solutions for
 various use cases, including rentals, ticketing, payment, and fleet management. This
 position followed the sale of Isidore's company, Stabus, to Treepz in a million-dollar
 deal. Isidore also founded Westacpe, which provides a platform for consumers to
 compare financial services like insurance. Westcape’s assets were sold to a local
 microfinance institution in Ghana.
 Isidore's diverse background also includes a stint as the Director of Communications at
 IMANI Africa, one of Ghana's esteemed think tanks. He is a founding member of the
 Alliance for the Future of Healthcare in Africa (AFHA), which advocates for quality
 healthcare in Africa through resource mobilisation, stakeholder engagements and
 clinical research.
 As afirmbeliever in the catalytic power of education, Isidore runs book donations and
 scholarship to primary-JHS pupils, yearly on his birthday, which falls on the 4th
 Driven by a firm belief in the power of technology, Isidore is dedicated to scaling the
 impact of innovative business models that address Africa's most pressing challenges,
 while simultaneously advancing the frontiers of innovation through rigorous scientific
 research`,
    imageUrl: '/images/speakers/isidore-kpotufe.jpg',
    category: 'Panel Moderator'
  },
  {
    id: 13,
    name: 'Marc Voi Chiuli',
    title: 'Founder, People Edge Consulting',
    bio: `?????`,
    imageUrl: '/images/speakers/marc-voi-chiuli.jpg',
    category: 'Panel Member'
  },
  {
    id: 14,
    name: 'Dr. George Ayee',
    title: 'Organisation Change Enabling Expert',
    bio: `?????`,
    imageUrl: '/images/speakers/dr-george-ayee.jpg',
    category: 'Speed Coach'
  },
  {
    id: 15,
    name: 'Laury-Georges-Lane',
    title: 'Legal and Human Resources Executive',
    bio: `?????`,
    imageUrl: '/images/speakers/laury-georges-lane.png',
    category: 'Keynote Speaker'
  },
  {
    id: 16,
    name: 'Anita Wiafe',
    title: 'CEO, OML Africa',
    bio: `Anita Wiafe is a seasoned expert in strategic human resources management and organizational development, with over three decades of consulting experience in human capital management, organizational design, and corporate transformation. Her work spans national and international projects, including collaborations with several of the Big 5 companies, where she has served as both a functional and technical expert.
Anita has led the development of national learning and HR frameworks for African countries, designed performance management systems, implemented talent management strategies, and built HR data and analytics platforms. Her leadership in delivering national leadership training programs has had a lasting impact across sectors.
Certified by the International Labour Organisation (ILO), Anita specializes in SCORE training, business continuity, and SME productivity measurement. Her corporate consulting portfolio includes work in salary structure development, skills assessments, progression frameworks, and workforce alignment with strategic goals.
Her expertise in change management covers HR audits, mergers and acquisitions due diligence, restructuring, and HR systems implementation. With deep knowledge of over 20 African Labour Laws, and additional expertise in UK and European employment legislation, Anita is a trusted authority on employment terms, risk management, and industrial relations, including union negotiations and collective bargaining agreements.
Anita is also highly proficient in HR policy development, aligning and standardizing policies across regions in Africa, Europe, Asia, the UK, and the USA. Her skills include psychometric testing, assessment center design, personality profiling, and skills inventory creation.
Currently, she serves as the Executive Secretary of the eCommerce Association of Ghana (eCAG), where she champions women in eCommerce. A former board chair and board member of multiple organizations, Anita is deeply committed to social issues affecting women, children, and youth. She is also certified by the ILO in gender equality and workplace diversity and serves as an arbitrator and mediator for the National Labour Commission of Ghana.
Anita Wiafe’s work continues to shape the future of HR and organizational leadership across continents, industries, and communities.

`,
    imageUrl: '/images/speakers/anita-wiafe.jpg',
    category: 'Panel Member'
  },
  {
    id: 17,
    name: 'Deborah Asmah',
    title: 'Co-Founder, Npontu Technologies',
    bio: `?????`,
    imageUrl: '/images/speakers/debora-asmah.jpg',
    category: 'Panel Member'
  },
  {
    id: 19,
    name: 'Prof. E. Afful-Dadzie',
    title: 'Associate Professor, University of Ghana Business School',
    bio: `?????`,
    imageUrl: '/images/speakers/afful-dadzie.jpg',
    category: 'Panel Member'
  },
  {
    id: 20,
    name: 'Dr. Theo Tackie',
    title: 'Author/Transformational Speaker/Certified Life Empoerment Coach',
    bio: `?????`,
    imageUrl: '/images/speakers/theo-tackie.jpg',
    category: 'Panel Member'
  },
  {
    id: 21,
    name: 'Margaret Jackson',
    title: 'Managing Partner, Rainbow Consult',
    bio: `Margaret Jackson, FLPI is the Managing Partner of Rainbow 
Consult. She is a Fellow of the Learning and Performance 
Institute, UK.  A Member of  the Aspen Network of Development 
Entrepreneurs (ANDE), Society for Human Resource 
Management, USA and a member of Institute of Human 
Resource Management, Ghana. She is also a member of the core 
faculty of the West African Civil Society Institute. `,
    imageUrl: '/images/speakers/MJ-Headshot.png',
    category: 'Keynote Speaker'
  },
  {
    id: 22,
    name: 'Dr. Stella Agyenim-Boateng',
    title: 'Vice Chairman. Public Services Commission',
    bio: `Dr. (Mrs.) Irene Stella Agyenim-Boateng is a distinguished Ghanaian human resource management expert, transformational leader, and public sector executive with over three decades of experience spanning the education, telecommunications, insurance, consultancy, and energy sectors.
Renowned for her visionary leadership and people-centered approach, Dr. Agyenim-Boateng has held several high-impact roles across both public and private institutions, consistently driving organizational transformation, strategic growth, and operational excellence.
Key Roles & Achievements
•	Current Vice Chairman, Public Services Commission of Ghana (appointed October 2023)
•	Former Deputy Chief Executive (Services), Volta River Authority (VRA) – led HR, legal, real estate, corporate affairs, and more
•	HR Director at Vodafone Ghana, Ghana Telecom, and GLICO Group
•	Strategic Advisor to the CEO of VRA post-retirement, contributing to executive leadership and institutional development
Professional Expertise
Dr. Agyenim-Boateng is a C-suite HR executive with senior leadership and board-level experience across multinational corporations and public institutions. Her expertise includes:
•	Strategy formulation & execution
•	Labour-union management, employment law, and international labour standards
•	Active engagement with the International Labour Organization (ILO) and the Ghana Employers’ Association (GEA)
•	Recruitment, talent management, diversity & inclusion
•	Business partnering, development & relief management
•	Learning & development, stakeholder engagement, and performance management
•	Reward, compensation & recognition systems
•	Property & facilities management, fleet operations
•	Occupational health, safety & employee wellbeing
•	Event coordination, crisis communication, and organizational development
•	Security operations, school administration, negotiation, and policy implementation
Leadership Style
Dr. Agyenim-Boateng is celebrated for her affable, approachable, and people-centered leadership, paired with a structured, diligent, and results-oriented mindset. Her ability to navigate complex organizational landscapes with clarity and compassion has made her a trusted voice in HR transformation and public sector reform.`,
    imageUrl: '/images/speakers/stella-agyenim-boateng.jpg',
    category: 'Keynote Speaker'
  },
  {
    id: 23,
    name: 'Munnira Shiekh',
    title: 'CEO and Founder Zenfusion COnsultancy',
    bio: `Munnira Sheikh, CEO of Zenfusion Consultancy, is a business & strategy analyst carrying an extensive experience across different industries. Working in FMCG, manufacturing plants, trade and service sector, across marketing research, product development and sales and distribution domains, give her an edge in understanding various business areas.`,
    imageUrl: '/images/speakers/munnira-shiek.jpg',
    category: 'Speed Coach'
  },
  {
    id: 24,
    name: 'Yvonne Ohui MacCarthy',
    title: 'CEO, Institute of Customer Service Professionals',
    bio: `Meet Yvonne Ohui MacCarthy, CSP, a visionary leader and the 
driving force behind the Institute of Customer Service Professionals 
(ICSP), where she serves as the Founder and Head Consultant. With 
an unwavering commitment to service excellence, Yvonne is also 
the esteemed Chair of both the West African Association of.`,
    imageUrl: '/images/speakers/yvonne-ohui-mccarthy.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 25,
    name: 'Emmaline Datey',
    title: 'CEO, ICS Africa',
    bio: `Emmaline Datey is a Public Speaker, Brands Influencer, HR Strategist, Leadership and Personal Development Coach, German-Africa Startup Consultant, as well as an Events Consultant. As an HR strategist with up to 15 years’ of Human Resource general practice, she has had experience within several industries including Aviation, Oil and Gas, Academia, Media, Wellness, Fashion, Medical Laboratory, Supply Chain, and Manufacturing. 
She is the Founder and CEO of ICS Africa Limited (Impact Concepts and Solutions Africa) – a budding Pan African company that provides Management Consulting, Personal & Professional Development, Marketing and Communications, as well as Corporate Events Engineering and Management services. She is also the founder and lead blogger of a digital platform called The Fearless and Fabulous Network where she inspires women in leadership, faith, love and career, personal growth as well as promote exceptional women, globally. Additionally, she is the Director for West Africa Female Leaders and Entrepreneurs Network, an African community of female leaders in business.
Emmaline chartered as a Professional in HR (PHR) in 2014 with the Human Resource Certification Institute, USA and possesses a first-class degree from the Valley View University in Human Resource Management (BBA) and an Advanced International Human Resource Management Diploma in 2023. She also bagged a certification from John Maxwell Team as a certified speaker, trainer, and coach in Aug 2021. 
Emmaline has been honored as one of Ghana’s 100 Most Influential Women in 2017, one of the Top 100 speakers in Ghana, 2018, one of the 2020 50 Most Influential Young Ghanaians, a 2022 Ghana 25 under 25 Mentor Awards in HR and Business Consulting, a Visionary African Woman Award Recipient in 2023, and a 2023 Women of Color Creating Wealth International Awardee. She has been further listed among the ELOY Foundation & African Women CEO’s Network’s 50 Power People who embody resilience, leadership and advocate for women's empowerment and inclusion in Africa in 2024, a recipient of the 2024 International Africa Women Peace Awards (IAWPA) as well as one of the Young Global Leaders Network’s 40 most inspirational female leaders in Ghana 2024. 

`,
    imageUrl: '/images/speakers/emmaline-datey.jpg',
    category: 'Speed Coach'
  },
  {
    id: 26,
    name: 'Irene Asare',
    title: 'Proficient Consulting',
    bio: `?????`,
    imageUrl: '/images/speakers/irene-asare.jpg',
    category: 'Panel Member'
  },
  {
    id: 27,
    name: 'Delasi Dogbe',
    title: 'Life Coach - Mental Health and well being Advocate, Author',
    bio: `Delasie Dogbey is a dynamic Relationship Strategist, Life Coach, Business Development Coach, Author, Ghostwriter, and Project & Marketing Strategist. He holds a Master’s degree in Business Administration and has collaborated with some of Ghana’s most prominent brands, including Ghana Telecom, Vodafone, TV3 Network, SIC Insurance, UT Group, FirstBanc Financial Services, Allianz Insurance International, Africa SME Organization, and Enterprise Group.
A passionate advocate for personal and professional growth, Delasie has spearheaded numerous trainings and seminars on topics such as public speaking, authorpreneurship, confidence building, business networking, mindset transformation, purpose discovery, and emotional wellness. He is a nominee for the prestigious 40 Under 40 Awards for emerging leaders and currently serves as President of the Rotary Club of Accra-Legon District.
As a prolific writer, Delasie is the author of several inspiring books, including Allow God to Be God—Our Testimony, It Is Well, Not Easily Broken, and Depression: Don’t Suffer in Silence. His thought-provoking articles have appeared in the Business and Financial Times (B&FT) and Rotary District Magazine, and he has been featured on the cover of FGBMFI Voice Magazine. He also serves as an expert panelist on radio and television platforms.
Delasie is the founder and CEO of the Ladies War Room Organization, an initiative dedicated to empowering women to become the best version of themselves through support for maternal health, emotional wellness, and the cultivation of meaningful relationships. Through this platform, he has provided over 200 women and young girls with free counseling and mental health support.
Driven by a mission to inspire positive change, Delasie is widely recognized as a motivational speaker, idea generator, self-starter, and compassionate leader who believes in service that transforms lives.`,
    imageUrl: '/images/speakers/Delassie-Dogbe.jpg',
    category: 'Panel Member'
  },
  {
    id: 28,
    name: 'Patience Osekre',
    title: 'Managing Director, Supreme Healthcare Management Services',
    bio: ` 
Patience Osekre is a Consultant Psychotherapist and a Wellness Expert trained in the UK 
with a wealth of experience and expertise in providing Health and Well-being Services for 
Individuals, Groups and Organisations. She has worked for many years in Managerial position 
within the Public/ Statutory, Private and Voluntary Sector in the UK prior to relocating to 
Ghana.  
She is currently the Managing Director of Supreme Healthcare Management services   and 
EAP-Africa (Subsidiary) in Ghana, a pioneering initiative in Sub Saharan Africa which 
provides 24/7 Employee Assistance Program and Wellbeing Services /Consultancy for Banks, 
Oil Companies, the Mining Industry, Embassies, Schools, Clinics, hospitals, and other 
Corporate Institutions in various other sectors to enhance Employee wellbeing, performance, 
and productivity.  She leads a Multi-disciplinary/Multi-Lingual Team of Professionals in 
delivering a wide range of multifaceted Employee Well-being Services in Ghana and across 
the continent.  
Patience is currently engaged in initiatives, such as the EAP Africa Summit and ACE 
(Authentic Caring Employer) Awards, that assist corporate organisations in redefining 
Workplace Mental Health and Wellbeing as a Business imperative and strategic Priority. Her 
prime goal is to help organisations harness the Mental Capital of their workforce by developin

SHMS-LEADING EXPERT IN CORPORATE WELLNESS PROMOTION Page 1 
meaningful and sustained wellbeing policies and workplace interventions that support good 
mental health.  She is passionate about creating environments where employees can thrive both 
personally and professionally. Her mission is to integrate best mental health practices into 
organisational cultures, promoting overall well-being and productivity. 
She has been involved in a lot of Research in the UK which has helped to promote, safeguard 
the welfare needs and best Interest of Children and Adults Wellbeing.  Promoting   Innovative 
Well-being solutions to improve psychological safety, Mental Health literacy and a workplace 
culture that normalises Mental Health, have been a huge passion that fuels her zeal, 
commitment, and determination. She is currently writing a book Entitled “Emotional Literacy.” 
She is a registered member of BACP (British Association of Counsellors and Psychotherapist 
UK and a registered member of HCPC (Health &Care Professionals Council) UK.`,
    imageUrl: '/images/speakers/patience-osekre.jpg',
    category: 'Masterclass Trainer'
  },
   {
    id: 29,
    name: 'Dr. Francis Eduku',
    title: 'CEO,CIHRM',
    bio: `Dr. Francis Eduku is the Chief Executive Officer of the Chartered Institute of Human Resource Management, Ghana (CIHRM), and has more than two decades of experience in HR leadership and organizational effectiveness. He specializes in strategic human resource management, culture and transformation, and organizational resilience. He has worked extensively with multinational gold mining firms such as Gold Fields and Golden Star Resources and occupied various executive roles, including Vice President of Human Resources and Corporate Affairs, Vice President of Human Resources, and Acting Vice President of Sustainable Development. 
Dr. Eduku holds a PhD with Distinction in Human Resource Management. He also has an MBA with a specialty in Human Resource Management and an Executive Master’s Degree in Alternative Dispute Resolution (ADR). He is a Fellow of CIHRM, a Chartered HR Professional (CIPD, UK), and a Certified Balanced Scorecard Professional of the Balanced Scorecard Institute and George Washington University College of Professional Studies, USA. 
He is a regular speaker at high-profile HR conferences and currently champions effective human resource management practices and standards in Ghana through collaborations with international and local organizations and tertiary institutions.
Dr. Eduku is an alumnus of Saïd Business School, University of Oxford, UK, and a lecturer at the University of Ghana, Legon.
`,
    imageUrl: '/images/speakers/dr-eduku.jpg',
    category: 'Panelist and Speaker'
  },
  {
    id: 30,
    name: 'Georgia Manfreda Appiah',
    title: 'coming soon',
    bio: `Giorgia Manfreda Appiah is a dynamic leader with over a decade of experience in human resource management, company operations, and strategic leadership. She is the Managing Partner and Chief Operating Officer of Nuffield Clinic, a specialist healthcare facility in Accra, Ghana, where she has led the clinic’s transformation and expansion in orthopaedics, rheumatology, physiotherapy, and family medicine.
She holds a degree in Healthcare Management from the University of Minnesota and currently serves as the company lead for Nuffield Clinic’s participation in the Stanford Seed Transformation Program. Giorgia is known for her hands-on leadership style and commitment to building systems that empower teams and deliver quality care.
Beyond her work at Nuffield, Giorgia is deeply passionate about the Neoanim Foundation, an initiative dedicated to providing prosthetic limbs to children. Her mission is to reduce the long-term impact of disability on children affected by trauma or medical malpractice, helping them reclaim their potential and live fully.
Giorgia brings to every space a powerful blend of operational excellence, empathy-driven leadership, and a clear vision for inclusive and impactful healthcare systems.`,
    imageUrl: '/images/speakers/giorgia-manfreda-appiah.jpg',
    category: 'coming soon'
  },
  
  

];

export default function SpeakersPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Slider */}
      <section className="relative h-96 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {speakerBackgrounds.map((image, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-full w-full relative"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  priority={i === 0}
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Distinguished Speakers</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Industry leaders shaping the future of business and tech</p>
          </motion.div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Meet Our 2025 Speaker Lineup</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thought leaders, innovators, and industry pioneers sharing their expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-[3/4] w-full cursor-pointer">
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                      {speaker.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                    <p className="text-gray-200 text-sm">{speaker.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 line-clamp-3 mb-4">
                  {speaker.bio.startsWith('???') ? 'Bio coming soon...' : speaker.bio.slice(0, 150) + '...'}
                </p>
                {!speaker.bio.startsWith('???') && (
                  <Link href={`/speakers/${speaker.id}`} passHref>
                    <div className="text-[#0A1C63] font-medium hover:underline">View Full Profile</div>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Keynote Section */}
      <section className="bg-[#F9F9F9] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0A1C63]">Featured Keynote Speakers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our headline speakers bringing transformative insights</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl cursor-pointer"
              >
                <Image
                  src="/images/speakers/stella-agyenim-boateng.jpg"
                  alt="Dr. Stella Agyenim-Boateng Keynote"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dr. Stella Agyenim-Boateng</h3>
                    <p className="text-gray-200 mb-4">&quot;The Future of Digital Transformation in Africa&quot;</p>
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full">Opening Keynote</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl cursor-pointer"
              >
                <Image
                  src="/images/speakers/MJ-Headshot.png"
                  alt="Margaret Jackson Keynote"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Margaret Jackson</h3>
                    <p className="text-gray-200 mb-4">&quot;Leading With Grace as A Professional&quot;</p>
                    <span className="bg-[#FF8C00] text-white text-xs font-semibold px-3 py-1 rounded-full">Closing Keynote</span>
                  </div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1C63] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Join Us For This Transformative Experience</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Reserve your spot today to learn from these industry leaders and network with peers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/agenda" passHref> 
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border border-white transition-colors"
              >
                View Full Agenda
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}