import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import { BadgeCard } from '../Main-Component/Card';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));




export default function Slider({ title }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);


  const mock= {
    "image": "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    "title": "Verudela Beach",
    "country": "Croatia",
    "description": "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    "badges": [
      {
        "emoji": "☀️",
        "label": "Sunny weather"
      },
      {
        "emoji": "🦓",
        "label": "Onsite zoo"
      },
      {
        "emoji": "🌊",
        "label": "Sea"
      },
      {
        "emoji": "🌲",
        "label": "Nature"
      },
      {
        "emoji": "🤽",
        "label": "Water sports"
      }
    ]
  }
  

  return (
    <div style={{
      padding: '20px'
    }}>
      <h1 className="text-3xl font-bold "> {title} </h1>
      <Carousel
        slideSize="20%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        <Carousel.Slide >
          {/* <Card {...item} /> */}
          <BadgeCard image={mock.image} title={mock.title} badges={mock.badges} description={mock.description} country={mock.country}  />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}