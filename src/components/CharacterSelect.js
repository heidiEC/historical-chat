import React from 'react';
import mlkImg from '../images/mlk.jpg';
import cortazarImg from '../images/cortazar.jpg';
import curieImg from '../images/curie.jpg';
import einsteinImg from '../images/einstein.jpg';
import marquezImg from '../images/marquez.jpg';
import teslaImg from '../images/tesla.jpg';
import dianaImg from '../images/diana.jpg';
import krishnamurtiImg from '../images/krishnamurti.jpg';
import jobsImg from '../images/jobs.jpg';
import angelouImg from '../images/angelou.jpg';
import hawkingImg from '../images/hawking.jpg';
import gandhiImg from '../images/gandhi.jpg';
import saganImg from '../images/sagan.jpg';
import franklinImg from '../images/franklin.jpg';
import davinciImg from '../images/davinci.jpg';
import bolanoImg from '../images/bolano.jpg';
import kahloImg from '../images/kahlo.jpg';
import beauvoirImg from '../images/beauvoir.jpg';
import { FaPalette, FaBook, FaAtom, FaLaptopCode, FaFeather, FaDove, FaUniversity, FaFlask, FaQuoteRight, FaRocket, FaHeart, FaLightbulb, FaPen, FaStar, FaScroll, FaPaintBrush } from 'react-icons/fa';

const characters = [
  {
    id: 1,
    name: 'Frida Kahlo',
    title: 'Revolutionary Artist',
    image: kahloImg,
    works: [
      {
        title: 'The Two Fridas',
        type: 'Painting',
        link: 'https://www.moma.org/learn/moma_learning/frida-kahlo-the-two-fridas-las-dos-fridas-1939/',
        year: '1939',
        description: `A powerful double self-portrait created during Kahlo's divorce from Diego Rivera, depicting her Mexican and European identities.`,
        quote: `"I paint myself because I am often alone and I am the subject I know best." - Frida Kahlo`
      },
      {
        title: 'Self-Portrait with Thorn Necklace',
        type: 'Painting',
        link: 'https://www.harryransom.org/exhibitions/fridas-self-portrait',
        year: '1940',
        description: `One of Kahlo's most iconic self-portraits, featuring symbolic elements including a monkey, a black cat, and thorns.`,
        quote: `"I used to think I was the strangest person in the world but then I thought there are so many people in the world." - Frida Kahlo`
      },
      {
        title: 'The Broken Column',
        type: 'Painting',
        link: 'https://www.museofridakahlo.org.mx/en/the-collection/',
        year: '1944',
        description: `A striking representation of Kahlo's physical and emotional pain, depicting her spine as a shattered stone column.`,
        quote: `"At the end of the day, we can endure much more than we think we can." - Frida Kahlo`
      }
    ]
  },
  {
    id: 2,
    name: 'Julio Cortázar',
    title: 'Surrealist Author',
    image: cortazarImg,
    works: [
      {
        title: 'Hopscotch (Rayuela)',
        type: 'Novel',
        link: 'https://www.amazon.com/Hopscotch-Pantheon-Modern-Writers-Cortazar/dp/0394752848/',
        year: '1963',
        description: `A groundbreaking novel that can be read in multiple orders, following the story of an Argentine intellectual in Paris and his search for meaning.`,
        quote: `"Only by living absurdly is it possible to break out of this infinite absurdity." - Julio Cortázar`
      },
      {
        title: 'Blow-Up and Other Stories',
        type: 'Short Stories',
        link: 'https://www.amazon.com/Blow-Up-Stories-Julio-Cortazar/dp/0394728815/',
        year: '1967',
        description: `A collection of masterful short stories that blur the lines between reality and fantasy, including the famous story that inspired Antonioni's film.`,
        quote: `"In quoting others, we cite ourselves." - Julio Cortázar`
      },
      {
        title: 'Cronopios and Famas',
        type: 'Short Stories',
        link: 'https://www.amazon.com/Cronopios-Famas-Julio-Cortazar/dp/0811214028/',
        year: '1962',
        description: `A playful and surreal collection introducing Cortázar's whimsical creatures: the cronopios, famas, and esper.`,
        quote: `"These stories are like fantastic pockets of calm, scenes of suspension, glassy realms." - The New York Times`
      }
    ]
  },
  {
    id: 3,
    name: 'Steve Jobs',
    title: 'Tech Visionary',
    image: jobsImg,
    works: [
      {
        title: 'Stanford Commencement Address',
        type: 'Speech',
        link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
        year: '2005',
        description: 'A speech given by Steve Jobs at Stanford University in 2005. The speech is a reflection on his life and the lessons he learned from his experiences.',
        quote: '"Stay hungry, stay foolish." - Steve Jobs'
      },
      {
        title: 'iPhone Launch Keynote',
        type: 'Presentation',
        link: 'https://www.youtube.com/watch?v=x7qPAY9JqE4',
        year: '2007',
        description: 'A keynote presentation given by Steve Jobs at the Macworld Expo in January 2007. The presentation is a reflection on the iPhone and its impact on the world.',
        quote: '"One more thing..." - Steve Jobs'
      },
      {
        title: 'One Last Thing',
        type: 'Documentary',
        link: 'https://www.pbs.org/show/steve-jobs-one-last-thing/',
        year: '2011',
        description: 'A documentary about Steve Jobs and his final days at Apple. The documentary is a reflection on Jobs\'s life and his impact on the world.',
        quote: '"I am going to show you something that is going to change the world." - Steve Jobs',
      }
    ]
  },
  {
    id: 4,
    name: 'Simone de Beauvoir',
    title: 'Existentialist Philosopher',
    image: beauvoirImg,
    works: [
      {
        title: 'The Second Sex',
        type: 'Book',
        link: 'https://www.amazon.com/Second-Sex-Simone-Beauvoir/dp/030727778X/',
        year: '1949',
        description: `A groundbreaking analysis of women's oppression and a foundational text of contemporary feminism, exploring the social construction of gender.`,
        quote: `"One is not born, but rather becomes, a woman." - Simone de Beauvoir`
      },
      {
        title: 'The Ethics of Ambiguity',
        type: 'Book',
        link: 'https://www.amazon.com/Ethics-Ambiguity-Simone-Beauvoir/dp/1504054229/',
        year: '1947',
        description: `A philosophical work exploring human freedom and responsibility, bridging existentialism with practical moral questions.`,
        quote: `"Man is defined neither by his genes nor by his environment, but by how he surpasses them." - Simone de Beauvoir`
      },
      {
        title: 'Memoirs of a Dutiful Daughter',
        type: 'Autobiography',
        link: 'https://www.amazon.com/Memoirs-Dutiful-Daughter-Simone-Beauvoir/dp/0060825197/',
        year: '1958',
        description: `A coming-of-age memoir chronicling Beauvoir's early life and intellectual development in early 20th century France.`,
        quote: `"All the opportunities of life are diminished by the aura of nostalgia surrounding what is lost." - Simone de Beauvoir`
      }
    ]
  },
  {
    id: 5,
    name: 'Marie Curie',
    title: 'Pioneering Physicist',
    image: curieImg,
    works: [
      {
        title: 'Research on Radioactive Substances',
        type: 'Scientific Paper',
        link: 'https://www.nobelprize.org/prizes/physics/1903/marie-curie/lecture/',
        year: '1903',
        description: `The groundbreaking research that led to the discovery of radium and polonium, revolutionizing our understanding of radioactivity.`,
        quote: `"Nothing in life is to be feared, it is only to be understood." - Marie Curie`
      },
      {
        title: 'Pierre Curie',
        type: 'Biography',
        link: 'https://www.amazon.com/Pierre-Curie-Marie/dp/1376337398/',
        year: '1923',
        description: `A personal and scientific biography of her husband and research partner, offering insights into their pioneering work together.`,
        quote: `"In science, we must be interested in things, not in persons." - Marie Curie`
      },
      {
        title: 'Nobel Prize Lectures',
        type: 'Speeches',
        link: 'https://www.nobelprize.org/prizes/chemistry/1911/marie-curie/lecture/',
        year: '1911',
        description: `Historic lectures delivered upon receiving both the Physics and Chemistry Nobel Prizes, explaining her groundbreaking research.`,
        quote: `"In science, we must be interested in things, not in persons." - Marie Curie`
      }
    ]
  },
  {
    id: 6,
    name: 'Roberto Bolaño',
    title: 'Literary Revolutionary',
    image: bolanoImg,
    works: [
      {
        title: '2666',
        type: 'Novel',
        link: 'https://www.amazon.com/2666-Roberto-Bolano/dp/0312429215/',
        year: '2004',
        description: 'A novel that explores the themes of violence, death, and the search for meaning in the lives of individuals in a fictional Mexican town.',
        quote: '"2666 is a novel that explores the themes of violence, death, and the search for meaning in the lives of individuals in a fictional Mexican town." - The New York Times'
      },
      {
        title: 'The Savage Detectives',
        type: 'Novel',
        link: 'https://www.amazon.com/Savage-Detectives-Roberto-Bolano/dp/0312427484/',
        year: '1998',
        description: 'A novel that explores the themes of violence, death, and the search for meaning in the lives of individuals in a fictional Mexican town.',
        quote: '"The Savage Detectives is a novel that explores the themes of violence, death, and the search for meaning in the lives of individuals in a fictional Mexican town." - The New York Times'
      },
      {
        title: 'By Night in Chile',
        type: 'Novel',
        link: 'https://www.amazon.com/Night-Chile-Roberto-Bola%C3%B1o/dp/0811215474/',
        year: '2000',
        description: 'A novel that explores the themes of violence, death, and the search for meaning in the lives of individuals in a fictional Mexican town.',
        quote: '"By Night in Chile is a novel that explores the themes of violence, death, and the search for meaning in the lives of individuals in a fictional Mexican town." - The New York Times'
      }
    ]
  },
  {
    id: 7,
    name: 'Albert Einstein',
    title: 'Theoretical Physicist',
    image: einsteinImg,
    works: [
      {
        title: 'Relativity: The Special and General Theory',
        type: 'Book',
        link: 'https://www.amazon.com/Relativity-Special-General-Albert-Einstein/dp/1891396307/',
        year: '1916',
        description: `Einsteins own explanation of his revolutionary theory for general readers, making complex concepts accessible.`,
        quote: `"The important thing is not to stop questioning. Curiosity has its own reason for existence." - Albert Einstein`
      },
      {
        title: 'On the Electrodynamics of Moving Bodies',
        type: 'Scientific Paper',
        link: 'https://einsteinpapers.press.princeton.edu/vol2-trans/154',
        year: '1905',
        description: `The groundbreaking paper that introduced special relativity, changing our understanding of space and time.`,
        quote: `"The most beautiful thing we can experience is the mysterious." - Albert Einstein`
      },
      {
        title: 'Why War?',
        type: 'Letters',
        link: 'https://www.amazon.com/Why-War-Albert-Einstein/dp/B094NWKX7R/',
        year: '1933',
        description: `A profound exchange of letters between Einstein and Sigmund Freud about the nature of war and human conflict.`,
        quote: `"Peace cannot be kept by force; it can only be achieved by understanding." - Albert Einstein`
      }
    ]
  },
  {
    id: 8,
    name: 'Gabriel García Márquez',
    title: 'Master of Magical Realism',
    image: marquezImg,
    works: [
      {
        title: 'One Hundred Years of Solitude',
        type: 'Novel',
        link: 'https://www.amazon.com/Hundred-Solitude-Harper-Perennial-Classics/dp/0060883286/',
        year: '1967',
        description: `A masterpiece of magical realism following seven generations of the Buendía family in the mythical town of Macondo.`,
        quote: `"Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice." - Opening line`
      },
      {
        title: 'Love in the Time of Cholera',
        type: 'Novel',
        link: 'https://www.amazon.com/Love-Time-Cholera-Gabriel-Garcia/dp/0307389731/',
        year: '1985',
        description: `A beautiful story of love that spans half a century, exploring the nature of aging, passion, and lifelong devotion.`,
        quote: `"The only regret I will have in dying is if it is not for love." - Gabriel García Márquez`
      },
      {
        title: 'Nobel Prize Speech',
        type: 'Speech',
        link: 'https://www.nobelprize.org/prizes/literature/1982/marquez/lecture/',
        year: '1982',
        description: `His powerful Nobel acceptance speech, "The Solitude of Latin America," addressing the region's history and literary tradition.`,
        quote: `"Neither floods nor plagues, famines nor cataclysms, nor even the eternal wars of century upon century, have been able to subdue the persistent advantage of life over death." - Nobel Lecture`
      }
    ]
  },
  {
    id: 9,
    name: 'Nikola Tesla',
    title: 'Inventor & Engineer',
    image: teslaImg,
    works: [
      {
        title: 'My Inventions: The Autobiography',
        type: 'Autobiography',
        link: 'https://www.amazon.com/My-Inventions-Autobiography-Nikola-Tesla/dp/1603864687/',
        year: '1919',
        description: 'An autobiography that describes the inventions of Nikola Tesla and his contributions to the world of electricity.',
        quote: '"My Inventions is an autobiography that describes the inventions of Nikola Tesla and his contributions to the world of electricity." - Nikola Tesla'
      },
      {
        title: 'Colorado Springs Notes',
        type: 'Scientific Notes',
        link: 'https://www.amazon.com/Colorado-Springs-Notes-1899-1900-Nikola/dp/856180698X/',
        year: '1899-1900',
        description: 'A collection of scientific notes and experiments conducted by Nikola Tesla at his laboratory in Colorado Springs.',
        quote: '"The Colorado Springs Notes are a collection of scientific notes and experiments conducted by Nikola Tesla at his laboratory in Colorado Springs." - Nikola Tesla'
      },
      {
        title: 'Tesla Patents',
        type: 'Patent Collection',
        link: 'https://patents.google.com/?inventor=Nikola+Tesla',
        year: 'Various',
        description: 'A collection of patents and inventions related to Nikola Teslas work in electricity and wireless communication.',
        quote: '"The Tesla Patents are a collection of patents and inventions related to Nikola Teslas work in electricity and wireless communication." - Nikola Tesla'
      }
    ]
  },
  {
    id: 10,
    name: 'Princess Diana',
    title: 'Humanitarian',
    image: dianaImg,
    works: [
      {
        title: 'Panorama Interview',
        type: 'Interview',
        link: 'https://www.youtube.com/watch?v=T_v-C6jzPIs',
        year: '1995',
        description: `A landmark interview where Diana spoke candidly about her life in the royal family, her marriage, and her humanitarian work.`,
        quote: `"I'd like to be a queen in people's hearts." - Princess Diana`
      },
      {
        title: 'Landmines Speech',
        type: 'Speech',
        link: 'https://www.youtube.com/watch?v=3e4hqxpxvg4',
        year: '1997',
        description: `Powerful speech advocating for a worldwide ban on landmines, highlighting her commitment to humanitarian causes.`,
        quote: `"Everyone has the potential to give something back." - Princess Diana`
      },
      {
        title: 'AIDS Awareness Campaign',
        type: 'Documentary',
        link: 'https://www.youtube.com/watch?v=F5wFUG9MvVE',
        year: '1987',
        description: `Groundbreaking public appearance where Diana shook hands with AIDS patients without gloves, challenging stigma.`,
        quote: `"HIV does not make people dangerous to know. You can shake their hands and give them a hug. Heaven knows they need it." - Princess Diana`
      }
    ]
  },
  {
    id: 11,
    name: 'J. Krishnamurti',
    title: 'Philosophical Teacher',
    image: krishnamurtiImg,
    works: [
      {
        title: 'Freedom from the Known',
        type: 'Book',
        link: 'https://www.amazon.com/Freedom-Known-Jiddu-Krishnamurti/dp/0060648082/',
        year: '1969',
        description: `A fundamental exploration of human consciousness and the need to break free from psychological conditioning.`,
        quote: `"Truth is a pathless land." - J. Krishnamurti`
      },
      {
        title: 'The First and Last Freedom',
        type: 'Book',
        link: 'https://www.amazon.com/First-Last-Freedom-J-Krishnamurti/dp/0060648317/',
        year: '1954',
        description: `An examination of fundamental human issues including fear, relationships, and the nature of truth.`,
        quote: `"The moment you have in your heart this extraordinary thing called love and feel the depth, the delight, the ecstasy of it, you will discover that for you the world is transformed." - J. Krishnamurti`
      },
      {
        title: 'On Education',
        type: 'Lectures',
        link: 'https://www.amazon.com/Education-J-Krishnamurti/dp/0060648767/',
        year: '1974',
        description: `A collection of talks about the true purpose of education and the development of human consciousness.`,
        quote: `"The highest form of human intelligence is to observe yourself without judgment." - J. Krishnamurti`
      }
    ]
  },
  {
    id: 12,
    name: 'Martin Luther King Jr',
    title: 'Civil Rights Leader',
    image: mlkImg,
    works: [
      {
        title: 'I Have a Dream',
        type: 'Speech',
        link: 'https://www.youtube.com/watch?v=vP4iY1TtS3s',
        year: '1963',
        description: `Historic speech delivered during the March on Washington, articulating a vision of racial equality in America.`,
        quote: `"I have a dream that one day this nation will rise up and live out the true meaning of its creed." - Martin Luther King Jr.`
      },
      {
        title: 'Letter from Birmingham Jail',
        type: 'Essay',
        link: 'https://www.africa.upenn.edu/Articles_Gen/Letter_Birmingham.html',
        year: '1963',
        description: `Powerful defense of nonviolent resistance, written while imprisoned for participating in civil rights demonstrations.`,
        quote: `"Injustice anywhere is a threat to justice everywhere." - Martin Luther King Jr.`
      },
      {
        title: 'Beyond Vietnam',
        type: 'Speech',
        link: 'https://www.youtube.com/watch?v=3Qf6x9_MLD0',
        year: '1967',
        description: `Controversial speech connecting civil rights with opposition to the Vietnam War and economic injustice.`,
        quote: `"A nation that continues year after year to spend more money on military defense than on programs of social uplift is approaching spiritual death." - Martin Luther King Jr.`
      }
    ]
  },
  {
    id: 13,
    name: 'Maya Angelou',
    title: 'Poet & Civil Rights Activist',
    image: angelouImg,
    works: [
      {
        title: 'I Know Why the Caged Bird Sings',
        type: 'Autobiography',
        link: 'https://www.amazon.com/Know-Why-Caged-Bird-Sings/dp/0345514408/',
        year: '1969',
        description: `A powerful memoir of Angelou's early years, addressing racism, trauma, and the power of literature and self-discovery.`,
        quote: `"There is no greater agony than bearing an untold story inside you." - Maya Angelou`
      },
      {
        title: 'On the Pulse of Morning',
        type: 'Poem',
        link: 'https://www.youtube.com/watch?v=59xGmHzxtZ4',
        year: '1993',
        description: `Historic poem delivered at President Clinton's inauguration, celebrating diversity and human resilience.`,
        quote: `"History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again." - Maya Angelou`
      },
      {
        title: 'And Still I Rise',
        type: 'Poetry Collection',
        link: 'https://www.amazon.com/Still-Rise-Book-Poems/dp/0394502523/',
        year: '1978',
        description: `A collection of powerful poems about triumph over adversity, celebrating Black beauty and strength.`,
        quote: `"You may trod me in the very dirt, but still, like dust, I'll rise." - Maya Angelou`
      }
    ]
  },
  {
    id: 14,
    name: 'Stephen Hawking',
    title: 'Theoretical Physicist',
    image: hawkingImg,
    works: [
      {
        title: 'A Brief History of Time',
        type: 'Book',
        link: 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168/',
        year: '1988',
        description: `A landmark book making complex cosmological concepts accessible to general readers, exploring the nature of space and time.`,
        quote: `"Remember to look up at the stars and not down at your feet." - Stephen Hawking`
      },
      {
        title: 'The Universe in a Nutshell',
        type: 'Book',
        link: 'https://www.amazon.com/Universe-Nutshell-Stephen-William-Hawking/dp/055380202X/',
        year: '2001',
        description: `An illustrated guide to the universe, exploring quantum mechanics, string theory, and the history of the cosmos.`,
        quote: `"Intelligence is the ability to adapt to change." - Stephen Hawking`
      },
      {
        title: 'Black Holes and Baby Universes',
        type: 'Essays',
        link: 'https://www.amazon.com/Black-Holes-Baby-Universes-Essays/dp/0553374117/',
        year: '1993',
        description: `Collection of essays on black holes, quantum mechanics, and Hawking's personal life and struggles.`,
        quote: `"Life would be tragic if it weren't funny." - Stephen Hawking`
      }
    ]
  },
  {
    id: 15,
    name: 'Leonardo da Vinci',
    title: 'Renaissance Polymath',
    image: davinciImg,
    works: [
      {
        title: 'The Mona Lisa',
        type: 'Painting',
        link: 'https://www.louvre.fr/en/explore/the-palace/the-mona-lisa',
        year: '1503-1519',
        description: `Perhaps the most famous painting in the world, known for its enigmatic smile and revolutionary sfumato technique.`,
        quote: `"Simplicity is the ultimate sophistication." - Leonardo da Vinci`
      },
      {
        title: 'Codex Leicester',
        type: 'Scientific Notebooks',
        link: 'https://www.bl.uk/collection-items/leonardo-da-vinci-notebook',
        year: '1510',
        description: `Scientific writings and drawings covering topics from water flow to astronomy, showcasing da Vinci's curiosity about nature.`,
        quote: `"Learning never exhausts the mind." - Leonardo da Vinci`
      },
      {
        title: 'The Last Supper',
        type: 'Painting',
        link: 'https://cenacolovinciano.org/en/',
        year: '1495-1498',
        description: `Revolutionary mural depicting the dramatic moment when Jesus announces one of his disciples will betray him.`,
        quote: `"The noblest pleasure is the joy of understanding." - Leonardo da Vinci`
      }
    ]
  },
  {
    id: 16,
    name: 'Carl Sagan',
    title: 'Astronomer & Science Communicator',
    image: saganImg,
    works: [
      {
        title: 'Cosmos: A Personal Voyage',
        type: 'TV Series & Book',
        link: 'https://www.amazon.com/Cosmos-Carl-Sagan/dp/0345539435/',
        year: '1980',
        description: `Groundbreaking TV series and book making complex scientific concepts accessible while inspiring wonder about the universe.`,
        quote: `"We are made of star stuff." - Carl Sagan`
      },
      {
        title: 'Pale Blue Dot',
        type: 'Book',
        link: 'https://www.amazon.com/Pale-Blue-Dot-Vision-Future/dp/0345376595/',
        year: '1994',
        description: `Reflection on humankind's place in the cosmos, inspired by the famous Voyager 1 photograph of Earth.`,
        quote: `"Look again at that dot. That's here. That's home. That's us." - Carl Sagan`
      },
      {
        title: 'Contact',
        type: 'Novel',
        link: 'https://www.amazon.com/Contact-Carl-Sagan/dp/0671004107/',
        year: '1985',
        description: `Science fiction novel about humanity's first contact with extraterrestrial intelligence, exploring science, faith, and human nature.`,
        quote: `"For small creatures such as we, the vastness is bearable only through love." - Carl Sagan`
      }
    ]
  },
  {
    id: 17,
    name: 'Benjamin Franklin',
    title: 'Founding Father & Polymath',
    image: franklinImg,
    works: [
      {
        title: 'Poor Richard\'s Almanack',
        type: 'Publication',
        link: 'https://www.amazon.com/Poor-Richards-Almanack-Benjamin-Franklin/dp/1604592265',
        year: '1732-1758',
        description: `A yearly almanac containing weather forecasts, household hints, puzzles, and witty aphorisms.`,
        quote: `"Early to bed and early to rise makes a man healthy, wealthy, and wise." - Benjamin Franklin`
      },
      {
        title: 'The Autobiography of Benjamin Franklin',
        type: 'Autobiography',
        link: 'https://www.amazon.com/Autobiography-Benjamin-Franklin/dp/0486290735',
        year: '1771-1790',
        description: `Franklin's personal memoirs detailing his life, achievements, and philosophical views.`,
        quote: `"Either write something worth reading or do something worth writing." - Benjamin Franklin`
      },
      {
        title: 'Experiments and Observations on Electricity',
        type: 'Scientific Papers',
        link: 'https://www.amazon.com/Experiments-Observations-Electricity-Benjamin-Franklin/dp/1142419290',
        year: '1751',
        description: `Collection of letters describing his groundbreaking electrical experiments and theories.`,
        quote: `"An investment in knowledge pays the best interest." - Benjamin Franklin`
      }
    ]
  },
  {
    id: 18,
    name: 'Mahatma Gandhi',
    title: 'Freedom Fighter & Philosopher',
    image: gandhiImg,
    works: [
      {
        title: 'The Story of My Experiments with Truth',
        type: 'Autobiography',
        link: 'https://www.amazon.com/Story-My-Experiments-Truth-Autobiography/dp/0486245934',
        year: '1927',
        description: `Gandhi's autobiography detailing his spiritual journey and development of non-violent resistance.`,
        quote: `"My life is my message." - Mahatma Gandhi`
      },
      {
        title: 'Hind Swaraj',
        type: 'Book',
        link: 'https://www.amazon.com/Hind-Swaraj-Indian-Home-Rule/dp/8172290713',
        year: '1909',
        description: `Foundational text outlining Gandhi's vision for Indian independence and moral governance.`,
        quote: `"Be the change you wish to see in the world." - Mahatma Gandhi`
      },
      {
        title: 'Quit India Speech',
        type: 'Speech',
        link: 'https://www.mkgandhi.org/speeches/qui.htm',
        year: '1942',
        description: `Historic speech launching the Quit India Movement, demanding an end to British rule.`,
        quote: `"Do or die. We shall either free India or die in the attempt." - Mahatma Gandhi`
      }
    ]
  }
];

// Complete field mapping
const getFieldIcon = (character) => {
  const fields = {
    'Frida Kahlo': <FaPalette />,
    'Julio Cortázar': <FaBook />,
    'Steve Jobs': <FaLaptopCode />,
    'Simone de Beauvoir': <FaFeather />,
    'Marie Curie': <FaAtom />,
    'Martin Luther King Jr': <FaDove />,
    'J. Krishnamurti': <FaUniversity />,
    'Albert Einstein': <FaAtom />,
    'Maya Angelou': <FaQuoteRight />,
    'Stephen Hawking': <FaRocket />,
    'Princess Diana': <FaHeart />,
    'Nikola Tesla': <FaLightbulb />,
    'Roberto Bolaño': <FaPen />,
    'Carl Sagan': <FaStar />,
    'Benjamin Franklin': <FaScroll />,
    'Leonardo da Vinci': <FaPaintBrush />,
    'Mahatma Gandhi': <FaDove />,
    'Gabriel García Márquez': <FaBook />
  };
  return fields[character.name];
};

function CharacterSelect({ onSelectCharacter, selectedCharacters = [], searchQuery = '' }) {
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    character.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="character-grid">
      {filteredCharacters.map((character) => (
        <div 
          key={character.id} 
          className={`character-card ${selectedCharacters.find(c => c.id === character.id) ? 'selected' : ''}`}
          onClick={() => onSelectCharacter(character)}
        >
          <div className="field-icon">
            {getFieldIcon(character)}
          </div>
          <img src={character.image} alt={character.name} />
          <div className="character-info">
            <h3>{character.name}</h3>
            <p>{character.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CharacterSelect;
