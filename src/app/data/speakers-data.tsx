// src/app/data/speakers-data.ts

export interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  category?: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    bio: `Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, 
        now Telecel Ghana.  
        Ing. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from Kwame Nkrumah 
        University of Science and Technology (KNUST), an Executive MBA in Project Management from 
        University of Ghana Business School and has completed executive education programmes at 
        the Kellogg School of Management USA, London Business School, and INSEAD in France.  
        She has over two decades of experience in IT and Telecommunications, working as Technology 
        Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business 
        and Customer Operations of Telecel Ghana prior to becoming CEO.  
        She's recognized for her leadership and has numerous awards to her credit. She is passionate 
        about the future of the youth and women in the digital age and has been on several local and 
        international platforms including the UN General Assembly panel sessions advocating for youth 
        and women.  
        A passionate advocate for STEM, she serves on several boards, including the KNUST Engineering 
        Education Project, ABSA Bank Ghana and the Global Young Academy Advisory Board, 
        Germany.  
        She is married with 3 children.`,

    imageUrl: '/images/speakers/PATRICIA-OBO-NAI.jpg',
    category: 'Leadership'
  },
  {
    id: 2,
    name: 'Oscar Bimpong',
    title: 'Founder, Train2inspire Consultancy',
    bio: `Oscar Bimpong, the Founder and CEO of Train2inspire Consultancy, a distinguished 
        business training and development firm with operations in both the UK and Ghana. Oscar is an 
        internationally recognised Mindset Transformation Consultant, Corporate Trainer, and 
        Keynote Speaker, with over 17 years of experience in coaching, training, and speaking 
        engagements across the globe. 
        He is the author of the internationally acclaimed book, “Mindset Revolution: Re-engineering 
        Your Mind from Prison to Purpose”. The book underscores a powerful message: the most 
        dangerous prison is not one with physical walls, but the prison of the mind. As Oscar powerfully 
        articulates, an imprisoned mind results in an imprisoned life. In addition to this seminal work, he 
        has authored three other books, all centred on empowering individuals and organisations to 
        realise their full potential through mindset transformation. 
        The central objective of his writings and training programs is to reshape negative thought 
        patterns into goal-oriented mindsets, enabling individuals to align their personal aspirations 
        with the vision, mission, and core values of their organisations. 
        Oscar is also BBC-trained in radio operations and media production, having contributed 
        extensively to community radio and educational initiatives in the UK. His commitment to 
        corporate mindset transformation and youth empowerment has earned him numerous 
        awards and recognitions in the UK and beyond. 
        Currently, he serves as an Associate Lecturer at Arden University, Nelson College, and the 
        Global Banking School in London, where he imparts his expertise to the next generation of 
        business professionals. His work also extends deeply into Africa, where he continues to lead 
        initiatives aimed at promoting mindset transformation across the continent.`,
    imageUrl: '/images/speakers/Oscar-Bimpong.jpg',
    category: 'Mindset'
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
    category: 'HR Strategy'
  },
  {
    id: 4,
    name: 'Patricia Ama Kissi',
    title: 'CEO SEDAT Consult',
    bio: `Patricia Ama Kissi has over 15 years in artificial intelligence research with multiple publications. 
          She leads AI accessibility and ethics initiatives and is a regular speaker at international tech conferences.`,
    imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
    category: 'Technology'
  },
  {
    id: 5,
    name: 'ERIC KOJO VAN-ESS KURANCHIE',
    title: 'AI Research Lead, TechFuture',
    bio: `Kojo is a Strategic Human Resources Management, Recruitment, Talent & Competency Management, Performance Management and Learning & Development expert. He has over 15 years’ experience and mastery in Change Management, Strategy & Policy Development, Coaching & Mentorship, Diversity Management and International Human Resources Management, Compensation & Benefits, Labour & Industrial Relations, and Succession Planning.
He currently is the Group Head, Human Resources and Administration at the Bank of Africa Ghana where he has been responsible for the entire strategic direction of the Bank’s human resources and physical assets and security. 
Kojo is responsible for the drafting and development of the Strategic HR and Administration plan, Capital and Operating Expenditure Budget for the Bank.
Prior to him joining Bank of Africa Ghana, he was the Head of Human Capital Resourcing and Talent Management at the defunct ProCredit SLC.
Kojo has assisted companies like NND Digital, JINS SLC, Bidvest Microfinance, South Akim Rural Bank, Silverbird Cinemas, Millenium Insurance and many more as an HR Consultant to develop Human Capital related policies, Customer Service Policies and Procedures and recruited members of staff for some of them.
He has also headed the Service Excellence and the Marketing and Corporate Communications departments of the Bank and at one time was the Bank’s Country Coordinator for Sustainable Management.
He is also Citi FM’s HR Resource person for their yearly Corporate Business Bootcamp and lectures on pertinent HR related issues.
Kojo compliments any team with excellent experience in Customer Service Management, Product Development, Research, Corporate Communication & Branding, Administrative Management, and many more which adds to his business acumen as an HR.
He is among the Bank’s C-Suite decision makers.
He holds an MSc certificate in Development Management from the Kwame Nkrumah University of Science and Technology (KNUST), and an Executive MBA certificate in Human Resources Management from the University of Ghana. He also has a BSc. Business Management and Administration (HRM OPTION) from the Central University and an HND Mechanical Engineering certificate from the Takoradi Polytechnic.
`,
    imageUrl: '/images/speakers/ERIC-KOJO-VAN-ESS-KURANCHIE-1.jpg',
    category: 'Technology'
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
    imageUrl: '/images/speakers/comander.jpg',
    category: 'Healthcare'
  },
  {
    id: 7,
    name: 'Rosie Ebe-Arthur',
    title: 'Chartered Fellow of the Chartered Institute of Personnel and Development (CIPD)',
    bio: ` Rosie 
Ebe-Arthur is a Chartered Fellow of the Chartered Institute of Personnel and Development (CIPD) UK and 
Board Director on a couple of Boards in Ghana.  She brings with her a plethora of experience from the United 
Kingdom and Africa.  Rosie joined Ernst & Young Ghana in 2003 on her return from the UK and moved to South 
Africa in 2006 to take up the role of Associate Director of People Services, Africa Projects with responsibility for 
HR across EY’s 19 countries in Sub Saharan Africa.  Ms. Ebe-Arthur then worked with Ecobank Transnational 
Incorporated as Group Human Resources Business Partner for Domestic Bank working across 33 countries.  Rosie 
moved to Standard Chartered Bank, Ghana and rose to Head of Human Resources, West Africa with 
responsibility for Nigeria, Ghana, Cote D’Ivoire, Cameroun, Gambia and Sierra Leone and was based out of 
Nigeria.  In 2018, Rosie joined First Bank Nigeria & Subsidiaries as Group Head, Human Capital Management & 
Development with accountability for setting the People Strategy across the Bank’s footprint in Africa, United 
Kingdom and the representative offices in France and China. Rosie left FirstBank at the end of 2021.
 • Having left corporate life at the end of 2021, Rosie continues to contribute to Africa, as Board Director on 
Scancom Plc. (MTN) FirstBank Ghana Ltd. and Petra Trust; and through speaking engagements across Africa.   
Rosie runs RE-HR, a forward-looking HR Consultancy with a focus on shifting culture to deliver organizational 
strategy and optimum productivity . Rosie is passionate about people development and to deepen this 
competency, she has embarked on the ICF coaching certification. This Results Coaching approach will ensure she 
continues to contribute to her community.   Rosie currently works with individuals as well as organizations e.g. 
Diageo.
 • Rosie walks at least 5km a day, spends time in the gym consistently, loves dancing, entertaining at home and 
gardening however, her best times are with her creative son and together, they challenge each other on their 
career journeys.`,
    imageUrl: '/images/speakers/Rosie Ebe-Arthur.jpg',
    category: 'Leadership'
  },
  {
    id: 8,
    name: 'Paa Kwesi-Barnes',
    title: 'Moderator',
    bio: `???.`,
    imageUrl: '/images/speakers/Paa-Kwesi-Barnes-moderator.jpg',
    category: 'PR'
  },
  {
    id: 9,
    name: 'Yvonne Wiredu-Akpabli',
    title: 'HR Consultant/ Coporate Trainer-SHRM',
    bio: `Yvonne is a highly trained HR professional with over 16years of experience in the practice of managing a broad spectrum of human resources programs, services, and functions; She possesses a strong command on performance management, employment laws, recruitment & selection, benefit plans, training and development; and compliance issues.
She has significant experience managing various HR assignments for public sector organisations, NGOs, Telecommunication, financial, national, shipping, and multinational companies. 
Yvonne holds an MBA in Human Resource Management from the Ghana Institute of Management and Public Administration (GIMPA). She also has a BA in English and French from the University of Cape Coast. In 2017, she was certified as a global HR professional after passing her SPHRi from HRCI. HR Focus also adjudged her as one of the top 40 HR Practitioners in Ghana in the same year. She also holds an LLB from GIMPA and an LLM in Labour Law from the University of Ghana Law School. She is a member of SHRM, a global HR forum, ACHR Ghana and a Fellow at CIHRP Ghana. She is a facilitator of HR courses at the HR Certification Centre and the Chartered Institute of Human Resource Managers (CIHRM) Ghana. She was adjudged the HR Personality of the year by the HRCC in 2023.
`,
    imageUrl: '/images/speakers/Yvone-Wiredu.jpg',
    category: 'PR'
  },
  {
    id: 10,
    name: 'Dr. Cheryl Arutt',
    title: 'Moderator',
    bio: `Dr. Cheryl Arutt is a licensed clinical & forensic psychologist, TEDx speaker, media consultant and Certified EMDRIA Therapist & Consultant based in Los Angeles. A specialist in creative resilience & post-traumatic growth, Dr. Cheryl offers EMDR Intensives & Adjunct EMDR via telehealth. She graduated summa cum laude from UCLA and holds a Doctor of Psychology (PsyD) degree from CSPP-LA, where she was awarded Outstanding Clinical Dissertation. A passionate advocate for survivors of trauma, Dr. Cheryl has served on several Boards dedicated to helping survivors, and consults with clinicians and organizations about effectively treating complex and developmental trauma. Dr. Cheryl is Access Hollywood’s go-to psychologist for trauma issues, a frequent psychological expert on networks including CNN, HLN and DiscoveryID, and speaks internationally about trauma, creativity and post-traumatic growth.  For more information, please visit askdrcheryl.com and CreativeEMDR.com .`,
    imageUrl: '/images/speakers/Dr.-Cheryl-Arutt.jpg',
    category: 'PR'
  },
  // ... add the rest of your speakers
];
