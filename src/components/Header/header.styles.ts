import styled from 'styled-components'

export const Container = styled.div`
display:flex;
background:#000;
text-align:center;
align-items:center;
justify-content:center;
padding:1.5rem;
flex-wrap: wrap;
z-index:1000;
`

export const Logo = styled.div`
margin-left:2rem;
display:flex;
color:#fff;
`

export const Title = styled.h1`
text-transform:uppercase;
text-decoration:none;
font-size: 1.8rem;
color: #fff;
margin-left:2rem;
text-align:center;
font-weight: bold; 
   
@media(max-width:768px){
  font-size: 1.5rem;
  margin:0;
} 

@media(max-width:451px){
  font-size: 1.3rem;
  margin:0;
}
`

export const SubTitle = styled.p`
display:flex;
margin-left:2rem;
text-transform:uppercase;
text-decoration:none;
font-size: 1.3rem;
color: #fff;

@media(max-width:768px){
  font-size: 1.3rem;
  margin: .6rem 2rem;
} 

@media(max-width:451px){
  font-size: 1rem;
  margin: .6rem 2rem;
}
`
