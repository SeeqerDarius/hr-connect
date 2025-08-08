// speakers data

export interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  category?: string;
  company?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  session?: string;
  keyPoints?: string[];
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Patricia Obo-Nai',
    title: 'CEO of Telecel Ghana',
    linkedin: 'https://gh.linkedin.com/in/ing-patricia-obo-nai-7a4a9214',
    twitter: 'https://twitter.com/PatriciaOboNai', 
    website: '', 
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
    category: 'Guest Speaker'
  },
  {
    id: 2,
    name: 'Oscar Bimpong',
    title: 'Founder, Train2inspire Consultancy',
    linkedin: '',
    twitter: '',
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
    category: 'Masterclass Trainer'
  },
  {
    id: 3,
    name: 'Kojo Amissah',
    title: 'Strategy & Performance Consultant | Lead Instructor, CITAM',
    bio: `Kojo Amissah is a Strategy and Performance Consultant at CITAM, where he leads high-impact training, consulting, and staffing services. He also serves as the lead instructor for the SHRM-CP and SHRM-SCP certification prep courses.
        Kojo brings extensive consulting and training experience in areas such as strategic planning, leadership and change management, performance management, competency management, and compensation and benefits. He has worked across various sectors, including oil and gas, mining, manufacturing, finance, and the public sector, supporting a wide range of organizational development initiatives.
        He holds a BS in Computer Science, an MBA in Entrepreneurship, and professional certifications including SHRM-SCP and SPHR.
        Kojo simply loves all things HR.`,
    imageUrl: '/images/speakers/Mr-Kojo-Amissah.jpg',
    category: 'Panel Moderator'
  },
  {
    id: 4,
    name: 'Patricia Abena Kissi',
    title: 'CEO SEDAT Consult',
    bio: `Patricia is the Founder, Lead Consultant, and CEO of SEDAT Consult Ltd., a leading HR consulting firm based in Ghana. With over 18 years of experience in human resource consulting and practice, Patricia is known for delivering practical, results-driven solutions that empower organisations to align people strategies with workplace needs and business outcomes.

Patricia is a highly skilled strategist with deep expertise in strategic human resource management, talent acquisition and development, performance management, employee engagement, organisational restructuring and development, and change management. Her strength lies in transforming complex workforce challenges into clear, actionable strategies that align people with purpose, processes with performance, and talent with long-term value.

Patricia is an IFC-certified trainer with a passion for capacity building. She has successfully worked with organisations across diverse sectors—including banking, insurance, healthcare, manufacturing, technology, and hospitality—helping them navigate workforce dynamics, improve organisational performance, and drive sustainable growth. Her approach is people-centred, business-focused, and grounded in a deep understanding of Ghana's evolving workplace landscape.

Patricia holds a Master’s degree in Human Resource Development and a Bachelor’s degree in Educational Foundations from the University of Cape Coast. She also has an Executive Master’s in Organisational Development from AMPRO. At her core, Patricia is passionate about helping people and businesses thrive―empowering teams, leaders, and institutions to unlock their full potential.`,
    imageUrl: '/images/speakers/Patricia-Ama-Kissi.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 5,
    name: 'ERIC KOJO VAN-ESS KURANCHIE',
    title: 'Group Head, HR & Administration, Bank of Africa Ghana | Strategic HR Leader | Corporate MC & HR Educator',
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
    category: 'M.C'
  },
  {
    id: 6,
    name: 'Commander James Emmanuel Kwegyir Aggrey-Orleans',
    title: 'Trauma & Orthopaedic Surgeon | Ghana Navy | UN Peacekeeping Medical Expert',
    bio: `Commander Aggrey-Orleans is a senior officer in the Ghana Navy and a distinguished trauma and orthopaedic surgeon serving with the Ghana Armed Forces Medical Services. He is renowned for his expertise in battlefield trauma care, medical support planning, and surgical leadership at the 37 Military Hospital.
With over a decade of experience, he has led medical support for international tactical exercises such as MEDREX and FLINTLOCK and served in multiple United Nations peacekeeping missions across Libya, Côte d’Ivoire, South Sudan, and the Democratic Republic of Congo.
He holds advanced qualifications in trauma life support, public health, and higher education, and is a certified instructor in Tactical Combat Casualty Care (TCCC). Fluent in English and intermediate in French, Commander Aggrey-Orleans is a committed educator, planner, and mentor, passionate about systems thinking and medical resilience in austere environments.`,
    imageUrl: '/images/speakers/comander.jpg',
    category: 'Panel Member'
  },
  {
    id: 7,
    name: 'Rosie Ebe-Arthur',
    title: 'Board Director | Former Group Head of Human Capital, FirstBank Nigeria & Subsidiaries',
    bio: ` Rosie Ebe-Arthur is a Chartered Fellow of the CIPD (UK) and a distinguished HR leader with extensive experience across the UK and Africa. She has held senior HR roles at Ernst & Young, Ecobank, Standard Chartered Bank, and FirstBank Nigeria, where she led people strategy across multiple countries including the UK, France, and China.
Currently, Rosie serves several corporate boards and leads RE-HR, a consultancy focused on transforming workplace culture to drive strategic outcomes. Passionate about people development, she is pursuing ICF coaching certification and continues to work with individuals and organizations to enhance productivity and well-being.
Rosie is a sought-after speaker across Africa and is known for her commitment to leadership, wellness, and organizational excellence.`,
    imageUrl: '/images/speakers/Rosie Ebe-Arthur.jpg',
    category: 'Panel Member'
  },
  {
    id: 8,
    name: 'Paa Kwesi-Barnes',
    title: 'Tech Expert',
    linkedin: 'https://web.facebook.com/paakwesi.barnes',
    bio: `Paa Kwesi Barnes stands as a seasoned Digital Technology Expert, boasting over 15 years of immersive experience across diverse roles encompassing information technology strategy and consulting, sales, and business management. His extensive journey has equipped him with formidable skills and insights, particularly in domains like core banking transformation, digital engagement, credit origination and appraisal, customer experience solutions, human capital solutions, quality assurance, and software testing. With a track record spanning the Telecom, Banking, and other financial sectors, Paa Kwesi has been deeply involved in mentorship, coaching, and training initiatives, not only within finance but also extending his reach into the HR sector.

Throughout his career, Paa Kwesi has consistently assumed leadership positions, showcasing his unwavering dedication and expertise in the field. His profound industry knowledge, coupled with an unyielding commitment to excellence and client satisfaction, has consistently positioned him as a trusted ally in businesses' journey towards growth and success.

He is currently the Director for Business Development and Managing Consultant at Senrab ConsulTech Limited in Ghana. Paa Kwesi spearheads strategic initiatives and consultancy efforts, driving the company towards new heights of innovation and impact. Beyond his professional endeavours, Paa Kwesi finds fulfilment in his role as a devoted husband and father to three wonderful children.
.`,
    imageUrl: '/images/speakers/Paa-Kwesi-Barnes-moderator.jpg',
    category: 'Moderator'
  },
  {
    id: 9,
    name: 'Yvonne Wiredu-Akpabli',
    title: 'HR Legal Specialist | Strategic People Leader',
    linkedin: 'https://www.linkedin.com/in/mary-bennett-chartered-mcipd-73382656/',
    bio: `Yvonne is a highly trained HR professional with over 16years of experience in the practice of managing a broad spectrum of human resources programs, services, and functions; She possesses a strong command on performance management, employment laws, recruitment & selection, benefit plans, training and development; and compliance issues.
She has significant experience managing various HR assignments for public sector organisations, NGOs, Telecommunication, financial, national, shipping, and multinational companies. 
Yvonne holds an MBA in Human Resource Management from the Ghana Institute of Management and Public Administration (GIMPA). She also has a BA in English and French from the University of Cape Coast. In 2017, she was certified as a global HR professional after passing her SPHRi from HRCI. HR Focus also adjudged her as one of the top 40 HR Practitioners in Ghana in the same year. She also holds an LLB from GIMPA and an LLM in Labour Law from the University of Ghana Law School. She is a member of SHRM, a global HR forum, ACHR Ghana and a Fellow at CIHRP Ghana. She is a facilitator of HR courses at the HR Certification Centre and the Chartered Institute of Human Resource Managers (CIHRM) Ghana. She was adjudged the HR Personality of the year by the HRCC in 2023.
`,
    imageUrl: '/images/speakers/yvonne.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 10,
    name: 'Dr. Cheryl Arutt',
    title: 'Clinical & Forensic Psychologist | Trauma & Resilience Expert | TEDx Speaker | Certified EMDRIA Consultant',
    bio: `Dr. Cheryl Arutt is a licensed clinical & forensic psychologist, TEDx speaker, media consultant and Certified EMDRIA Therapist & Consultant based in Los Angeles. A specialist in creative resilience & post-traumatic growth, Dr. Cheryl offers EMDR Intensives & Adjunct EMDR via telehealth. She graduated summa cum laude from UCLA and holds a Doctor of Psychology (PsyD) degree from CSPP-LA, where she was awarded Outstanding Clinical Dissertation. A passionate advocate for survivors of trauma, Dr. Cheryl has served on several Boards dedicated to helping survivors, and consults with clinicians and organizations about effectively treating complex and developmental trauma. Dr. Cheryl is Access Hollywood’s go-to psychologist for trauma issues, a frequent psychological expert on networks including CNN, HLN and DiscoveryID, and speaks internationally about trauma, creativity and post-traumatic growth. For more information, please visit askdrcheryl.com and CreativeEMDR.com .`,
    imageUrl: '/images/speakers/Dr.-Cheryl-Arutt.jpg',
    category: 'Speed Coach'
  },
  {
    id: 11,
    name: 'Mary Bennett',
    title: 'Organizational Development | Learning Specialist',
    linkedin: 'https://www.linkedin.com/in/mary-bennett-chartered-mcipd-73382656/',
    bio: `Mary Bennett is a globally experienced professional specializing in Organizational Development, Learning & Development, and Human Resource Management. Her diverse certifications include being an IFC-LPI TPMA Certified Trainer, an ILM Certified Training & Development Professional, and a qualified Insights Discovery Practitioner. She is also an active member of the Chartered Institute of Personnel and Development (CIPD).
Mary’s cross-industry expertise spans Oil and Gas, Telecommunications, IT, Health, Education, and Government sectors, where she has consistently advised and influenced leadership from mid-level management to the boardroom. Her professional journey includes roles at notable organizations such as Tullow Oil, Ericsson AB, iBurst Africa, Finsbury Orthopedics, and Age Concern, among others.
With a passion for human-centered growth, Mary is committed to helping individuals and organizations unlock their full potential through transformational learning and strategic people development.
.`,
    imageUrl: '/images/speakers/Mary-Bennett.jpg',
    category: 'Moderator'
  },
  {
    id: 12,
    name: 'Isidore Kpotufe',
    title: 'Founder & CEO, RiviaCo | Technology Entrepreneur',
    bio: ` Isidore Kpotufe is a seasoned technology entrepreneur with a proven track record in building ventures across finance, transportation, and healthcare in Africa. He is one of the few African tech founders to have successfully exited a startup in a million-dollar deal, following the acquisition of his mobility company, Stabus, by Canada-based Treepz.
Currently, Isidore leads RiviaCo, a healthcare venture operating a network of smart clinics in Ghana that leverage technology to deliver personalized primary care. His previous roles include Chief Marketing Officer at Treepz and founder of Westcape, a financial services comparison platform.
Isidore is a founding member of the Alliance for the Future of Healthcare in Africa (AFHA) and a passionate advocate for innovation, education, and healthcare equity. His work is driven by a commitment to solving Africa’s most pressing challenges through scalable, tech-enabled solutions.
`,
    imageUrl: '/images/speakers/isidore-kpotufe.jpg',
    category: 'Panel Member'
  },
   {
    id: 13,
    name: 'Marc Voi Chiuli',
    title: 'Founder, People Edge Consulting',
    linkedin: 'https://www.linkedin.com/in/marc-voi-chiuli-msc-hrm-assoc-cipd-mihrm-37963110/',
    bio: `Marc founded People Edge Consulting, to provide HR services to the small/medium business 
community.  He has 25+ years of diverse human resources and management experience that 
spans start-ups and established organizations, providing leadership and guidance to managers 
and executives. He has led engagements in areas of HR Audits, HR Metrics, Competency 
Assessment, Organizational Culture Surveys, Job Evaluation, Performance Management 
Systems and HR Transformation for clients both in public and private sector. 
Prior to founding People Edge Consulting., Marc held human resources leadership positions at 
Mumias Sugar Company and  Kenya Tourism Board.  
Marc holds a Master of Science Degree in Human Resources from the University of Manchester 
(UK) and a Bachelor of Arts Degree from the University of Nairobi, and a Higher National 
Diploma in Human Resources Management from the College of Human Resources 
Management (K). He is a member of IHRM (K) and an Associate Member of CIPD (UK). He is also 
a Certified HR Practitioner. Marc loves travelling and has travelled to France, United Kingdom, 
Canada and Japan.`,
    imageUrl: '/images/speakers/marc-voi-chiuli.jpg',
    category: 'Panel Member'
  },
 
  {
    id: 14,
    name: 'Dr. George Ayee',
    title: 'Organizational Development & Change Management Expert | International Speaker',
    linkedin: 'https://www.linkedin.com/in/george-ayee/',
    bio: `Dr. George Ayee is a seasoned consultant in organizational development, change enablement, and business transformation. With a global footprint spanning Canada, the UK, USA, Australia, and multiple African countries, he has led strategic initiatives for institutions such as Price Waterhouse, Deloitte, the World Bank, and the African Wildlife Foundation.
George has held leadership roles in academia and corporate settings, including Deputy Vice Chancellor of Kampala International University and Director of Change Management at Husky Energy and the Calgary Board of Education. He currently provides strategic oversight in People Strategy and Partnerships at the City of Calgary, Alberta.
A certified coach and change management professional, George holds a Doctor of Business Administration from Australia, an MBA from London, and a BSc in International Business from the USA. He is a sought-after speaker on transformation, resilience, and leadership across continents.
`,
    imageUrl: '/images/speakers/dr-george-ayee.jpg',
    category: 'Speed Coach'
  },
  {
    id: 15,
    name: 'Laury-Georges-Lane',
    title: 'CEO, LGL Consulting & Executive Advisory Group | Global HR & Mediation Expert',
    linkedin: 'https://www.linkedin.com/in/laury-georges-lane-21998917/',
    bio: `Dr. Laury Georges-Lane is a seasoned HR executive, legal professional, and international mediator with over 27 years of experience across industries including energy, healthcare, government, and international trade. She leads LGL Consulting & Executive Advisory Group, LLC, and its international subsidiary, delivering strategic HR, leadership development, and mediation services globally.
She has served as an expert panelist on topics such as HR in the AI era, global executive services, and workforce development. Her civic contributions span public and private boards, and she has been honored for her impact on international awareness and community service.
Dr. Laury’s philanthropic work includes adopting a village in Senegal to champion education reform and gender equity. She also serves on the advisory board of the Heritage and Cultural Society of Africa Foundation (HACSA-USA), supporting STEM initiatives for girls and women.
She holds degrees from the University of Florida, Nova Southeastern University, and Harvard Extension School, and is a certified Florida Supreme Court Civil Mediator. Her work continues to shape inclusive, collaborative, and high-performing organizational cultures across continents.`,
    imageUrl: '/images/speakers/laury-georges-lane.png',
    category: 'Keynote Speaker'
  },
  {
    id: 16,
    name: 'Anita Wiafe',
    title: 'CEO OML Africa | Executive Secretary of the eCommerce Association of Ghana',
    linkedin: 'https://www.linkedin.com/in/anita-wiafe-94bb115/',
    instagram: 'https://www.instagram.com/anitawiafe_/',
    facebook: 'https://web.facebook.com/anita.wiafeasinor',

    bio: `Anita Wiafe is a seasoned expert in strategic human resources management and organizational development, with over three decades of consulting experience in human capital management, organizational design, and corporate transformation. Her work spans national and international projects, including collaborations with several of the Big 5 companies, where she has served as both a functional and technical expert.
Anita has led the development of national learning and HR frameworks for African countries, designed performance management systems, implemented talent management strategies, and built HR data and analytics platforms. Her leadership in delivering national leadership training programs has had a lasting impact across sectors.
Certified by the International Labour Organisation (ILO), Anita specializes in SCORE training, business continuity, and SME productivity measurement. Her corporate consulting portfolio includes work in salary structure development, skills assessments, progression frameworks, and workforce alignment with strategic goals.
Her expertise in change management covers HR audits, mergers and acquisitions due diligence, restructuring, and HR systems implementation. With deep knowledge of over 20 African Labour Laws, and additional expertise in UK and European employment legislation, Anita is a trusted authority on employment terms, risk management, and industrial relations, including union negotiations and collective bargaining agreements.
Anita is also highly proficient in HR policy development, aligning and standardizing policies across regions in Africa, Europe, Asia, the UK, and the USA. Her skills include psychometric testing, assessment center design, personality profiling, and skills inventory creation.
Currently, she serves as the Executive Secretary of the eCommerce Association of Ghana (eCAG), where she champions women in eCommerce. A former board chair and board member of multiple organizations, Anita is deeply committed to social issues affecting women, children, and youth. She is also certified by the ILO in gender equality and workplace diversity and serves as an arbitrator and mediator for the National Labour Commission of Ghana.
Anita Wiafe’s work continues to shape the future of HR and organizational leadership across continents, industries, and communities.`,
    imageUrl: '/images/speakers/anita-wiafe.jpg',
    category: 'Panel Member'
  },
  {
    id: 17,
    name: 'Deborah Asmah',
    title: 'Co-Founder & CEO, Npontu Technologies Ltd',
    linkedin: 'https://www.linkedin.com/in/deborah-asmah-cipm-8524585a/',
    bio: `Ms. Deborah Asmah is an expert in AI, digital governance, privacy, and compliance, 
whose contributions have significantly shaped Ghana's digital landscape. Her innovative 
approaches have enabled seamless access to digital tools, promoted financial inclusion, and 
driven digital transformation across multiple sectors. Deborah is the co-founder of Npontu 
Technologies Ltd, a technology company specializing in the use of Artificial Intelligence 
(AI) and software development to provide digital solutions and lead transformation 
initiatives. Under her leadership, Npontu Technologies has scaled from a startup to a thriving 
technology powerhouse serving over 20k clients across Ghana. In addition to its national 
footprint, she has driven market expansion into other geographic regions including Nigeria, 
Côte d'Ivoire and United Kingdom(UK). 
She holds a Master of Law from Queen Mary University of London. She is a licensed Certified 
Information Privacy Manager (CIPM) with the International Association of Privacy 
Professionals (IAPP) and a certified Data Protection Officer (DPO). She is an ardent advocate 
for Public Policy, with extensive research experience at the intersection of technology, AI, and 
compliance. Ms. Deborah Asmah’s work has directly led to MSME digitization 
transformation opportunities for over 23k+ businesses in Ghana, contributing to business 
growth, job creation and strong Partnerships with Organizations such as MTN Ghana, 
Association of Ghana Industries(AGI), Ghana Enterprise Agency (GEA), MasterCard 
foundation amongst others.  
Deborah Asmah believes that when AI and digital technologies are used responsibly, they can 
be powerful catalysts for social and economic progress. She is deeply committed to advancing 
women’s empowerment, fostering business growth and championing global ESG objectives. 
Deborah is a frequent speaker at leading conferences across Africa, where she shares her 
insights on the future of AI, privacy and compliance, and digital governance. She has recently 
spoken at: 
• Africa AI Stakeholder Meeting on Innovative Governance and Capacity Building, 2024, 
Kigali, Rwanda. 
• SheTrades Ghana Hub, Ghana Export Promotion Authority – 2024, Accra, Ghana. 
• Digital Governance for Social Inclusion and Sustainable Development, AfreGov, 2024, 
Kigali, Rwanda. 
• Navigating Digital Frontiers: Legal Considerations and Tech Innovations, ALT Network 
Summit, 2024, Kigali, Rwanda. 
• The Global Conference on Human Resources in Africa (GCHRA), 2024, Accra, Ghana.`,
    imageUrl: '/images/speakers/debora-asmah.jpg',
    category: 'Panel Member'
  },
  {
    id: 19,
    name: 'Prof. E. Afful-Dadzie',
    title: 'Associate Professor, University of Ghana Business School | Lead Data Scientist at MData Consult',
    linkedin: 'https://www.linkedin.com/in/eric-afful-dadzie-b8748338/',
    bio: `Prof. Eric Afful-Dadzie is a distinguished academic and consultant specializing in Decision Sciences, Business Intelligence, Analytics, and Information Systems. With a deep-seated passion for leveraging data-driven methodologies to solve complex organizational challenges, he has established himself as a leading authority in the application of artificial intelligence (AI), machine learning (ML), and data analytics to enhance decision-making processes across industries.
Prof. E. Afful-Dadzie was a Queen Elizabeth II fellow at McGill University, Canada and the 2016/2017 most promising researcher at University of Ghana Business School. With over 50 research articles in top tier journals such as Government Information Quarterly, International Journal of Information Management, Management Decision, Applied Energy, Applied artificial Intelligence, Quality & Quantity, Kybernetes, Multi-Criteria Decision Analysis among others, Prof. E. Afful-Dadzie continues to make significant contributions to the fields of Decision Sciences and Information Systems. He has supervised and mentored numerous postgraduate students in PhD and MPhil works. Some of his mentees have become lecturers in public universities in Ghana.
Beyond academia, Prof. Afful-Dadzie is a sought-after consultant, advising organizations on digital transformation, AI-driven decision support and business analytics strategies. He has trained or consulted for major brands including the Bank of Ghana (BoG), Tullow Oil, University of Ghana Medical Centre (UGMC), GLICOHealth, Marie Stopes International, ABSA Bank, the Jospong Group, CalBank, GRIDCO, BOST, Ghana Ports and Harbours Authority, Subah Info Solutions, HPW Fresh & Dry Ltd, Bunge Loders Croklaan Ltd, Accra Compost and Recycling Plant (ACARP), Kofi Annan International Peacekeeping Training Centre (KAIPTC), Precious Minerals Marketing Company (PMMC), GCNET among others. Prof. is the brain behind the sought after HR Analytics and Health Analytics Training programmes in Ghana. He was the leader behind the 2022 HR Outlook and Benchmarking Survey, a collaboration between KPMG, CIHRM and HR Network Africa.
Prof. Afful-Dadzie is a regular speaker at international conferences and industry summits, where he shares insights on the evolving landscape of AI in business strategy. His ability to translate complex analytical models into practical business solutions has made him a trusted advisor to executives and policymakers. With a career dedicated to advancing knowledge and practical applications in analytics and information systems, Prof. Eric Afful-Dadzie continues to shape the future of data-driven decision-making, empowering businesses and institutions to thrive in the digital age.
`,
    imageUrl: '/images/speakers/afful-dadzie.jpg',
    category: 'Panel Member'
  },
  {
    id: 20,
    name: 'Dr. Theo Tackie',
    linkedin: 'https://www.linkedin.com/in/theo-welbeck-tackie-dm-odc-409a84199/',
    title: 'Change Management Consultant | Growth Strategist',
    bio:`Change Expert/Senior Scrum Master with over 10+ years of top-notch knowledge and experience in facilitation and coaching Agile Team, Skilled in stimulating teams to meet deadlines on projects. Ready for a new scrum-oriented role with a progressive organization that will challenge my knowledge.`,
    imageUrl: '/images/speakers/theo-tackie.jpg',
    category: 'Panel Member'
  },
  {
    id: 21,
    name: 'Margaret Jackson',
    title: 'Managing Partner, Rainbow Consult | Board Chair, HR Network Africa',
    linkedin: 'https://www.linkedin.com/in/margaret-jackson/',
    instagram: 'https://www.instagram.com/margaret_jacksongh/',
    facebook: 'https://web.facebook.com/margaret.jackson.7946',
    bio: `Margaret Jackson is a seasoned Learning & Development (L&D) strategist, credentialed coach, and organizational transformation expert with over 30 years of experience. She is a Fellow of the Learning and Performance Institute (LPI), an Associate Certified Coach (ACC) with the International Coaching Federation (ICF), and a certified instructional designer and master trainer with the IFC.
Margaret has led impactful initiatives across Africa, including the UNDP Market Women Financial Literacy Project and the Access Bank Mini-MBA, empowering thousands of women entrepreneurs. Her work spans crisis response, post-Ebola recovery, and SME capacity building in collaboration with global institutions like the IFC and Millennium Development Authority.
She serves on advisory boards for LPI UK and ANDE West Africa, and chairs both HR Network Africa and Leaders Fort Institute. A passionate advocate for women’s development, Margaret is known for her rapid-response learning interventions, mentorship programs, and strategic coaching.
Outside of work, she enjoys gardening and swimming, drawing inspiration from her family. Margaret brings purpose, care, and excellence to every engagement, whether coaching a team, designing a program, or speaking on global platforms.`,
    imageUrl: '/images/speakers/MJ-Headshot.png',
    category: 'Keynote Speaker'
  },
  {
    id: 23,
    name: 'Munnira Shiekh',
    title: 'CEO and Founder Zenfusion COnsultancy',
    instagram: 'https://www.linkedin.com/in/revenuepartner/',
    bio: `Munnira Sheikh, CEO of Zenfusion Consultancy, is a business & strategy analyst carrying an extensive experience across different industries. Working in FMCG, manufacturing plants, trade and service sector, across marketing research, product development and sales and distribution domains, give her an edge in understanding various business areas.`,
    imageUrl: '/images/speakers/munnira-shiek.jpg',
    category: 'Speed Coach'
  },
  {
    id: 24,
    name: 'Yvonne Ohui MacCarthy',
    title: 'Vice Chairman, Public Services Commission | HR Transformation Expert',
    facebook: 'https://web.facebook.com/yvonneomaccarthy',
    linkedin: 'https://www.linkedin.com/in/yvonne-ohui-maccarthy-13aa2057/',
    twitter: 'https://twitter.com/YvonneMcCarthy',
    bio: `Yvonne is a leading customer service strategist with over 15 years of experience in transforming service cultures across Africa. She is the Chair of the West African Association of Customer Service Professionals (WAACSP), Board Member of Electrochem Ghana, and Advisory Board Member of Customer Experience Evolution Africa (CEEA). A certified Customer Service Professional (CSP) from the London Institute of Banking and Finance, Yvonne’s career spans banking, consulting, and education.
She is the creator of the Ghana Customer Service Index (GCSI) and has trained and consulted for top organizations including Access Bank, KPMG, Fidelity Bank, and UGMC. A Harvard Business School alumna and award-winning CX leader, Yvonne is passionate about elevating customer service standards and empowering professionals through education and advocacy.`,
    imageUrl: '/images/speakers/yvonne-ohui-mccarthy.jpg',
    category: 'Masterclass Trainer'
  },
  {
    id: 25,
    name: 'Emmaline Datey',
    title: 'Maxwell Leadership Certified Coach | HR Strategist | CEO, ICS Africa',
    linkedin: 'https://www.linkedin.com/in/emmaline-datey-69083547/',
    facebook: 'https://web.facebook.com/EmaDateyOfficial',
    instagram: 'https://www.instagram.com/emativator_gh/',
    twitter: 'https://x.com/emadatey',
    bio: `Emmaline Datey is a Public Speaker, Brands Influencer, HR Strategist, Leadership and Personal Development Coach, German-Africa Startup Consultant, as well as an Events Consultant. As an HR strategist with up to 15 years’ of Human Resource general practice, she has had experience within several industries including Aviation, Oil and Gas, Academia, Media, Wellness, Fashion, Medical Laboratory, Supply Chain, and Manufacturing. 
          She is the Founder and CEO of ICS Africa Limited (Impact Concepts and Solutions Africa) – a budding Pan African company that provides Management Consulting, Personal & Professional Development, Marketing and Communications, as well as Corporate Events Engineering and Management services. She is also the founder and lead blogger of a digital platform called The Fearless and Fabulous Network where she inspires women in leadership, faith, love and career, personal growth as well as promote exceptional women, globally. Additionally, she is the Director for West Africa Female Leaders and Entrepreneurs Network, an African community of female leaders in business.
          Emmaline chartered as a Professional in HR (PHR) in 2014 with the Human Resource Certification Institute, USA and possesses a first-class degree from the Valley View University in Human Resource Management (BBA) and an Advanced International Human Resource Management Diploma in 2023. She also bagged a certification from John Maxwell Team as a certified speaker, trainer, and coach in Aug 2021. 
          Emmaline has been honored as one of Ghana’s 100 Most Influential Women in 2017, one of the Top 100 speakers in Ghana, 2018, one of the 2020 50 Most Influential Young Ghanaians, a 2022 Ghana 25 under 25 Mentor Awards in HR and Business Consulting, a Visionary African Woman Award Recipient in 2023, and a 2023 Women of Color Creating Wealth International Awardee. She has been further listed among the ELOY Foundation & African Women CEO’s Network’s 50 Power People who embody resilience, leadership and advocate for women's empowerment and inclusion in Africa in 2024, a recipient of the 2024 International Africa Women Peace Awards (IAWPA) as well as one of the Young Global Leaders Network’s 40 most inspirational female leaders in Ghana 2024.`,
    imageUrl: '/images/speakers/emmaline-datey.jpg',
    category: 'Speed Coach'
  },
  {
    id: 27,
    name: 'Delasie Dogbey',
    title: 'Mental Health Advocate | Entrepreneur | Rotary Chapter President | Relationships Strategist',
    linkedin: 'https://www.linkedin.com/in/delasie-dogbey-69371651/',
    instagram: 'https://www.instagram.com/togbuigadelasie/',
    facebook: 'https://web.facebook.com/torgbi.dogbey',
    bio: `Delasie Daniel Dogbey is a dynamic Relationship Strategist, Life Coach, Business Development Coach, and Author with a Master’s degree in Business Administration. He has worked with leading Ghanaian brands such as Vodafone, TV3, SIC Insurance, and Enterprise Group, and has led impactful seminars on public speaking, emotional wellness, and business networking.
Currently serving as President of the Rotary Club of Accra-Legon, Delasie is also the founder and CEO of the Ladies War Room Organization, which empowers women through maternal health support and mental wellness initiatives. A nominee for the 40 Under 40 Awards, he has authored several inspirational books including books that address employee mental health and wellbeing in organizations and contributes regularly to media platforms as a panelist and columnist.
Delasie is widely recognized for his motivational leadership, commitment to service, and passion for helping individuals and organizations unlock their full potential.`,
    imageUrl: '/images/speakers/Delassie-Dogbe.jpg',
    category: 'Panel Member'
  },
  {
    id: 28,
    name: 'Patience Osekre',
    title: 'Managing Director, Supreme Healthcare Management Services | Licensed Psychotherapist',
    linkedin: 'https://www.linkedin.com/in/patience-osekre-b874888b/',
    facebook: '',
    instagram: 'https://www.instagram.com/patience.osekre.therapist/',
    twitter: '',
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
prime goal is to help organisations harness the Mental Capital of their workforce by developing   
                                                                                                 
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
    id: 22,
    name: 'Dr. Stella Agyenim-Boateng',
    title: 'Vice Chairman, Public Services Commission | HR Transformation Expert',
    instagram: 'https://www.instagram.com/drstellaab/',
    twitter: 'https://x.com/drstellaab',
    facebook: 'https://web.facebook.com/irenestella.agyenimboateng',
    linkedin: 'https://www.linkedin.com/in/dr-mrs-irene-stella-agyenim-boateng-dba-d-litt-hc-mabr-mba-hrm-19840018b/',
    bio: `Dr. Stella Agyenim-Boateng is a distinguished C-suite executive and transformational HR leader with extensive experience across the public and private sectors. She currently serves as Vice Chairman of the Public Services Commission (PSC) and has held senior roles including Deputy Chief Executive (Services) and Director of Human Resources at the Volta River Authority (VRA), as well as HR Director at Vodafone Ghana and Ghana Telecom.
Her career spans industries such as education, telecommunications, insurance, energy, and consultancy. Known for her people-centered leadership and strategic vision, Dr. Stella has led successful organizational transformations, structural realignments, and innovation programs that have repositioned institutions for performance and cultural agility.
She holds a Doctor of Business Administration from the Swiss Business School, an LLM in Labour Law, and multiple postgraduate qualifications in public administration, business research, and dispute resolution. She is a Fellow of CIHRMP, IoD Ghana, and CILG Ghana, and serves on several boards and committees.
Dr. Stella is also an author, mentor, and public speaker, passionate about career development, leadership, and supporting marginalized communities. Her book, 100 Career Nuggets – Keeping It Punchy, reflects her commitment to empowering professionals with practical insights for success.
`,
    imageUrl: '/images/speakers/stella-agyenim-boateng.jpg',
    category: 'Keynote Speaker'
  },
  {
    id: 29,
    name: 'Dr.Francis Eduku',
    title: 'Chief Executive Officer, Chartered Institute of Human Resource Management, Ghana (CIHRM)',
    linkedin: 'https://www.linkedin.com/in/feduku-b1b817b4/',
    twitter: '',
    bio: `Dr. Francis Eduku is the Chief Executive Officer of the Chartered Institute of Human Resource Management, Ghana (CIHRM), and has more than two decades of experience in HR leadership and organizational effectiveness. He specializes in strategic human resource management, culture and transformation, and organizational resilience. He has worked extensively with multinational gold mining firms such as Gold Fields and Golden Star Resources and occupied various executive roles, including Vice President of Human Resources and Corporate Affairs, Vice President of Human Resources, and Acting Vice President of Sustainable Development. 
          Dr. Eduku holds a PhD with Distinction in Human Resource Management. He also has an MBA with a specialty in Human Resource Management and an Executive Master’s Degree in Alternative Dispute Resolution (ADR). He is a Fellow of CIHRM, a Chartered HR Professional (CIPD, UK), and a Certified Balanced Scorecard Professional of the Balanced Scorecard Institute and George Washington University College of Professional Studies, USA. 
          He is a regular speaker at high-profile HR conferences and currently champions effective human resource management practices and standards in Ghana through collaborations with international and local organizations and tertiary institutions.
          Dr. Eduku is an alumnus of Saïd Business School, University of Oxford, UK, and a lecturer at the University of Ghana, Legon.`,
    imageUrl: '/images/speakers/francis-eduku.jpg',
    category: 'Panelist and Speaker'
  },

  {
    id: 30,
    name: 'Georgia Manfreda Appiah',
    title: 'Managing Partner and Cheif Operating officer, Nuffield Clinic',
    linkedin: 'https://www.linkedin.com/in/giorgia-manfreda-10465bb/',
    bio: `Giorgia Manfreda Appiah is a dynamic leader with over a decade of experience in human resource management, company operations, and strategic leadership. She is the Managing Partner and Chief Operating Officer of Nuffield Clinic, a specialist healthcare facility in Accra, Ghana, where she has led the clinic’s transformation and expansion in orthopaedics, rheumatology, physiotherapy, and family medicine.
She holds a degree in Healthcare Management from the University of Minnesota and currently serves as the company lead for Nuffield Clinic’s participation in the Stanford Seed Transformation Program. Giorgia is known for her hands-on leadership style and commitment to building systems that empower teams and deliver quality care.
Beyond her work at Nuffield, Giorgia is deeply passionate about the Neoanim Foundation, an initiative dedicated to providing prosthetic limbs to children. Her mission is to reduce the long-term impact of disability on children affected by trauma or medical malpractice, helping them reclaim their potential and live fully.
Giorgia brings to every space a powerful blend of operational excellence, empathy-driven leadership, and a clear vision for inclusive and impactful healthcare systems.`,
    imageUrl: '/images/speakers/giorgia-manfreda-appiah.jpg',
    category: 'Panel Member'
  },
 {
      id: 35,
      name: 'Arthi Rabikrisson',
      title: 'Founder and Managing Director of Prerna Advisory',
      bio: 'Arthi Rabikrisson is the Founder and Managing Director of Prerna Advisory, based in South Africa. The firm specializes in neuroscience-based coaching and assessment for individuals, teams, and corporates; strategic business consulting for SMEs; and capital introduction to alternative funding sources, primarily from UHNWIs, family offices, DFIs, and SWFs. Arthi is a multi-global award-winning coach and strategy consultant, recognized as Top Leadership Coach of the Year 2023 by the International Association of Top Professionals. Her firm has been awarded Best Corporate Coaching & Strategic Advisory Firm of The Year - South Africa in The International Elite Magazine Global 100 awards for multiple years, including 2025. She is also an Amazon best-selling author, podcaster, keynote speaker, and independent Non-executive director. Arthi holds accreditations and certifications from the highest coaching bodies globally, including the ICF and EMCC. She contributes to thought leadership as a member of the Forbes Coaches Council and the Harvard Business Review Advisory Council. ',
      imageUrl: '/images/speakers/HR-network.png',
      category: 'Panel Member',
    },

  {
    id: 31,
    name: 'Grace Krobo-Edusei',
    title: 'CEO, Grace Center For Growth and Excellence',
    bio: `Grace is a Pastor, Certified Trainer, Speaker, Executive Coach and Entrepreneur. She is 
licensed as an independent Executive Program Director with The John Maxwell Leadership  
Team; an elite World Leader in Leadership, Coaching and Training Development. She is also 
a Neuroencoding Specialist, a Licensed Brain Health Trainer and a certified Global Priority 
Solutions Specialist. 
Her core competencies are in Executive Leadership Coaching, Personal Growth and 
Leadership Development; adding value and transforming lives by helping people and 
organizations with practical tools to fulfil their purpose and realize their ultimate goals. 
Aside from being a keynote speaker she regularly facilitates Leaders’ Values Round Tables, 
Group Coaching, Workshops and Masterminds; all aimed and tailored to aid Team Building 
and the personal and Professional Growth of Individuals and Organizations. 
She is a married mother of three adult children. To give back to her community, she 
volunteers on the board of trustees of the Children’s Heart Foundation Ghana, a charity with 
the mandate to raise funds for open Heart Surgery for underprivileged Ghanaian children 
living with congenital heart disease. 
She loves reading, gardening and photography. 
Her Motto: It is not about what is in it for me but how I can add value.`,
    imageUrl: '/images/speakers/biophoto.jpg',
    category: 'Panel Manel'
  },
  {
    id: 32,
    name: 'Cynthia Mawulawoe Kodowu',
    title: 'Founder HR Network',  
    linkedin: 'https://www.linkedin.com/in/cynthiamawulawoekodowu/',
    facebook: 'https://web.facebook.com/mawulawoek',
    bio: `Cynthia is a results and people driven C-Suite Leader with a proven track record of driving organizational growth, optimizing operations, and delivering exceptional results. She is a strategic thinker with a passion for innovation and a commitment to excellence. Her 15+ year career has dedicated her attention to positively impacting medium businesses, HR professionals and departments. She is especially skilled in Strategic Leadership, Risk Management, Change Management, Financial Management, P & L Management, Business Development, Stakeholder Relations, Team Building, Banking Operations, People Strategy and its essential experiences in Training and Development, Recruitments and Selection, Employee Relations, Strategic Business Partnering. Industries that have felt her impact include Banking, Hospitality, Retail, Insurance and Marketing.

Cynthia has gained certification from some of the Globe’s leading educational institutions. Her degrees include MBA in Project Management, BA in Accountancy (GIMPA) and HND in Marketing. In addition to her degrees, she has also amassed a number of certificates, which include: Instructional Design Certificate from ATD-USA, Executive Masters from UCLA, Certified HR Business Partner and Human Resource Analyst (GAFM), CIPD Associate level 5 (CIPD UK), Associate member (CIHRMP), Certificate in Strategic Management, Advanced Certificate in HR (Pan African Institute), Certificate in Diversity, Equity and Inclusion and currently undertaking her MCIPD with CIPD -UK 2023/2024 cohort .

Her unwavering drive to excel and commendable interpersonal skills have enabled her to pursue and achieve many career highlights such as founding the HR Network Africa group of HR professionals.

Cynthia is the mind and driving force behind the HR Network Africa. HR Network Africa is an ever-growing community of 500+ HR Practitioners globally that offers training by some of the continent’s highest-ranking practitioners. The success of these programmes is to grow the individual, and this motivation also led to the creation of HR Campus Connect. Cynthia has managed to bring her vision of creating a resource for ambitious HR professionals to grow and network to life with the HR Network. 

Cynthia has been able to consistently raise and maintain high standards of work. In her past position as HR Director in one of the nation’s industry-leading companies, Cynthia proved to be a leader that guarantees outstanding results. This is proven by her track record with the benefits and compensation, employee engagement, Training and Development initiatives that she implemented across the Trasacco Group of companies. 

In 2021, she took on the challenge to make a significant shift from the HR practice to a higher role in executive management as Country Manager for BTL Marketing Company (BTL AFRICA) where she has took on the mandate to lead the strategic charge on revenue and profitability mobilization using her people strategy and strategic business management skills to increase organizational productivity. 

In 2025, she took another bold step in her career by taking on the role as Chief Operating Officer at Perbi Cubs Africa, a digital education company offering library services focused on literacy-promoting endeavour that desires to see an enlightened people of African descent who are a product of an enviable national culture of leisure reading.

Cynthia has an intrinsic urge to unearth the potential in people to develop organizations. This urge is apparent when she commits to coaching and mentoring the next generation of HR leaders. She is of the genuine belief that the current leaders in HR must invest in the next generation so that they may continue to improve HR functionality which will then maximise organization profitability.  

Cynthis is a member of several laudable networks including but not limited to the Executive Women Network, W50 Santander Executive Women’s Network, The Boardroom Africa, the Learning and Performance Institute, the Global Academy of Finance and Management, the Chartered Institute of Human Resource Management (CIHRM), the Professional Marketers Association of Ghana Students (PROMAGS) and SIRDIR.

Overall, Cynthia has proven herself to be of value to organizations she has worked through her will to improve, implementation of innovative solutions and interpersonal skills. She is a woman rising in the C-Suite level proving to women that the highest position in any organization is also available for women to venture into. Furthermore, she has proven an asset to business organizations through her leadership and visionary skills as well as to her fellow HR practitioners as she has displayed through the work of the HR Network and through her coaching and mentoring programs.
.`,
    imageUrl: '/images/speakers/cynthia.jpg',
    category: 'Convener'
  },
  
    {
      id: 34,
      name: 'Eunice Dede Tornyi',
      title: 'Award-Winning Media Professional | Diplomacy Expert | Host, African Women’s Voices Show',
      bio: `Eunice Dede Tornyi is a seasoned media personality with over 17 years of experience in TV presenting and production. She is the celebrated host of the African Women’s Voices Show and a respected diplomacy expert. As President of the International Relations & Diplomacy Network Ghana (IRDN Ghana), Eunice brings charisma, professionalism, and a deep understanding of public engagement to every stage she graces. Fluent in multiple languages and skilled in public relations, voice acting, and event hosting, she is a dynamic force in both media and international relations.`,
      imageUrl: '/images/speakers/co-mc.jpg',
      category: 'Co M.C'
    },
  

  
  // ... add the rest of your speakers
];
