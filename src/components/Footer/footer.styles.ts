import styled from 'styled-components'

export const Container = styled.div`
margin-top:2rem;
background-color: #000;
padding:2rem 2rem;
justify-content:center;
align-items:center;

h1{
  font-size:1.5rem;
  text-align:center;
  color:#fff;
}
@media(max-width:768px){
  h1{
    font-size:1rem;
  }
 

@media(max-width:451px){
h1{
    font-size:1rem;
  } 
}
`
