import styled from 'styled-components';
import ImgBg from '../../Images/background.jpg';

export const HeroContainer = styled.div`
 background: linear-gradient(to right, rgba(7, 1, 0.7, 0.5), rgba(7, 1, 0.7, 0.7)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 480px) {
   body{
    background-image: url(${ImgBg});
   }
   }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  margin-left: 280px;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 0rem;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  font-weight: bold;

  @media screen and (min-width: 480px) {
    width: 100%;
    
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  justify-content: center;
  align-items: center; 

  @media screen and (min-width: 480px) {
    align-content:center;
    margin-left:-400px;
    margin-right:-100px;
    font-size:2.2rem;
   }
`;

export const HeroP = styled.p`
  font-size: clamp(0.5rem, 1.2vw, 1.2rem);
  margin-top: 1rem;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
    
    align-content:center;
    margin-left:-400px;
    margin-right:-100px;
    font-size:1.2rem;
   }
`;

export const HeroBtn = styled.button`
  font-size: 1.1rem;
  padding: 0.8rem 1rem;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background: #FF5200;
  border: 1px solid #FF5200 ;
  color: #fff;
  transition: 0.2s ease-out;
  margin-top: 1rem;

  &:hover {
    background: #FEE2B3;
    transition: 0.2s ease-out;
    border: 1px solid #FEE2B3 ;
    cursor: pointer;
    color: #000;
  }

  @media screen and (min-width: 480px) {
    align-content:center;
    font-size: 1.2rem;
    padding: 0.7rem .7rem;
    margin-left:-400px;
    margin-right:-100px;
   }

   `