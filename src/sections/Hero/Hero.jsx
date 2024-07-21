import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import instaIcon from '../../assets/insta-icon.png'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext';

const Hero = () => {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;


  return (
    <section id='hero'>
      <div className={styles.colorModeContainer }>
        <img height= '300' width='300' className={styles.hero} src={heroImg} alt="Profile Picture of Priyanka Arora"/>

        <img className={styles.colorMode}
              src={themeIcon}
              alt="Color mode icon"
              onClick={useTheme}/>

    <div className={styles.info}>
      <h1>
        Priyanka
        <br/>
        Arora
        </h1>
        <h2>Mern Developer</h2>
        <span>
          <a href="https://instagram.com/" target="_blank">
          <img src={instaIcon} alt="Instagram Icon"/>
          </a>
          <a href="https://github.com/" target="_blank">
          <img src={githubIcon} alt="Github Icon"/>
          </a>
          <a href="https://linkedin.com/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin Icon"/>
          </a>
        </span>

        <p>Hi Folks, 
          I am Priyanka Arora,
           MCA 2024 (NIT Jamshedpur).
            I have completed my Internship at intellect design arena,
             Chennai, TamilNadu </p>

        <a href={CV} download>
          <button className='hover'>
            Resume
          </button>
        </a>

    </div>

      </div>
    </section>
  )
}

export default Hero
