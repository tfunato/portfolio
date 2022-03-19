// Skills Icons
import htmlIcon from './images/html.svg'
import cssIcon from './images/css.svg'
import reactIcon from './images/react.svg'
import jsIcon from './images/javascript.svg'
import designIcon from './images/design.svg'
import codeIcon from './images/code.svg'

// Social Icon
import githubIcon from './images/github.svg'
import codepenIcon from './images/codepen.svg'
import dribbbleIcon from './images/dribbble.svg'
import instagramIcon from './images/instagram.svg'

type Header = {
  name: string
  headerTagline: string[]
  headerParagraph: string
}
const header: Header = {
  name: 'tfunato',
  headerTagline: ['Stay hungry, stay foolish'],
  headerParagraph: '舩戸　隆（ふなと　たかし）ホームページ',
}

type About = {
  aboutParaOne: string
  aboutParaTwo: string
  aboutParaThree: string
}

const about: About = {
  aboutParaOne:
    'Webソフトウェア開発を専門としています。サーバサイドエンジニア。キャリアのスタートは1998年。',
  aboutParaTwo:
    '受託開発での企業内Webアプリケーションの開発や、事業会社でのグループウェアの開発などを通して、要求定義、設計、コーディング、テストまで上流工程から下流工程までを幅広く経験しています。チームでの開発を主に行っており、役割は開発リーダ・アーキテクトとして従事する経験を多く積んでいます。' +
    'また、プロジェクトの予算取り、工数見積もり、請求書作成、営業資料作成、顧客折衝、保守、運用、顧客対応などを経験しいます。',
  aboutParaThree:
    '技術を学ぶだけではなく、それをどう生かすか？どう喜んでもらえるか？を考えるエンジニアが理想。',
}

type Project = {
  title: string
  para: string
  imageSrc: string
  url: string
}

const projects: Project[] = [
  {
    title: 'Project One', //Project Title - Add Your Project Title Here
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc:
      'https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
    //Project URL - Add Your Project Url Here
    url: 'http://chetanverma.com/',
  },
  {
    title: 'Project Two', //Project Title - Add Your Project Title Here
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc:
      'https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60',
    //Project URL - Add Your Project Url Here
    url: 'http://chetanverma.com/',
  },
  {
    title: 'Project Three', //Project Title - Add Your Project Title Here
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc:
      'https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
    //Project URL - Add Your Project Url Here
    url: 'http://chetanverma.com/',
  },
  {
    title: 'Project Four', //Project Title - Add Your Project Title Here
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc:
      'https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
    //Project URL - Add Your Project Url Here
    url: 'http://chetanverma.com/',
  },
  {
    title: 'Project Five', //Project Title - Add Your Project Title Here
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc:
      'https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60',
    //Project URL - Add Your Project Url Here
    url: 'http://chetanverma.com/',
  },
  {
    title: 'Project Six', //Project Title - Add Your Project Title Here
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc:
      'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60',
    //Project URL - Add Your Project Url Here
    url: 'http://chetanverma.com/',
  },
]

type Social = {
  img: any
  url: string
}

const socials: Social[] = [
  {
    img: githubIcon,
    url: 'https://github.com/tfunato',
  },
  {
    img: codepenIcon,
    url: 'https://www.codepen.com/',
  },
  {
    img: dribbbleIcon,
    url: 'https://dribbble.com/chetanverma',
  },
  {
    img: instagramIcon,
    url: 'https://www.instagram.com/',
  },
]

type Skill = {
  img: any
  para: string
}

const skills: Skill[] = [
  {
    img: htmlIcon,
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    img: cssIcon,
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    img: jsIcon,
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    img: reactIcon,
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    img: designIcon,
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    img: codeIcon,
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
]

type Contact = {
  contactSubHeading: string
  contactEmail: string
}

const contact: Contact = {
  contactSubHeading: "Let's create your next experience together",
  contactEmail: 'tfunato@gmail.com',
}

export { header, projects, about, socials, skills, contact }
