import styled from 'styled-components'

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin-top:2rem; 

h1{
  font-size:3rem;
  color:#333;
  text-align:center;
  margin:1rem 1rem;
  font-weight:bold;
  border-bottom: .2rem solid rgba(0,0,0,0.3);
}

h2{
  margin-top:1rem;
  max-width:500px;
  font-size:2.5rem;
  color:#333;
  font-weight:bold;
  margin:1rem 1rem;
}
ul{
  margin-top:1rem;
  margin:0 2rem;
  max-width:700px;
  list-style:none; 
  line-height:2rem;
}

ul li{
  font-size:1.3rem;
}

h3{
margin-top:1rem;
margin:2rem;
max-width:700px;
font-size:1.5rem;
}

p{
margin:0 2rem;
margin-top:1rem;
font-size:1.3rem;
max-width:700px;
font-weight:400;
line-break:break-all;
}

@media(max-width:768px){
    h1{
      font-size:1.5rem;
      width:80%;
      margin:0 1rem;
    }
    p{
      font-size:1rem;
      width:80%;
      margin:1rem 1rem;
    }
    h2{
      font-size:1.2rem;
      width:80%;
      margin:0 1rem;
    }
    h3{
      font-size:1rem;
      width:80%;
      margin:1rem 1rem;
    }

    ul{
      width:80%;
      list-style:none;
      margin:0 1rem; 
    }
   ul li {
    font-size:1rem;
   }
} 

@media(max-width:451px){
  h1{
      font-size:1.5rem;
      width:80%;
      
    }
    p{
      font-size:1rem;
      width:80%;
    }
    h2{
      font-size:1rem;
      width:80%;
    }

    h3{
      width:80%;
      font-size:1rem;
    }

    ul{
      width:80%;
      list-style:none; 
    }
   ul li {
    font-size:1rem;
   }
}
`
