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
    bio: `Ing. Patricia Obo-Nai is an electrical engineer and the first Ghanaian CEO of Vodafone Ghana, now Telecel Ghana.
          Ing. Obo-Nai holds a BSc. in Electrical and Electronic Engineering from KNUST, an Executive MBA in Project Management from University of Ghana Business School and has completed executive education programmes at the Kellogg School of Management USA, London Business School, and INSEAD in France.
          She has over two decades of experience in IT and Telecommunications, working as Technology Director in both Millicom Ghana Limited (Tigo) and Telecel Ghana. She also led the Fixed Business and Customer Operations of Telecel Ghana prior to becoming CEO.
          She is recognized for her leadership and has numerous awards to her credit. She is passionate about the future of the youth and women in the digital age and has been on several local and international platforms including the UN General Assembly.
          She serves on several boards, including KNUST Engineering Education Project, ABSA Bank Ghana, and the Global Young Academy Advisory Board, Germany.`,

    imageUrl: '/images/speakers/PATRICIA-OBO-NAI.jpg',
    category: 'Leadership'
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
    category: 'Mindset'
  },
  {
    id: 3,
    name: 'Kojo Amissah',
    title: 'Strategy & Performance Consultant - CITAM',
    bio: `Kojo Amissah is a Consultant at CITAM leading training, consulting, and staffing. 
          He also teaches SHRM-CP and SHRM-SCP certification courses.
          He specializes in strategic planning, leadership, performance management, and HR development. 
          He holds a BS in Computer Science, an MBA in Entrepreneurship, and certifications including SHRM-SCP and SPHR.`,
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
    bio: `Eric Kojo is a strategic HR expert with over 15 years experience in Talent and Change Management. 
          He leads HR strategy at Bank of Africa Ghana and has worked with ProCredit SLC, NND Digital, 
          and Millennium Insurance.
          He holds an MSc in Development Management, an Executive MBA in HRM, and a BSc in Business Management. 
          He regularly speaks at corporate events such as Citi FM’s Corporate Business Bootcamp.`,
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
  // ... add the rest of your speakers
];
