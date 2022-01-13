import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto&display=swap');

*,*::before,*::after{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body{
    font-size:1rem;
    padding:1rem 0rem;
font-family: "Roboto";
overflow-x: hidden;

}


h1{
font-family: 'Oswald', sans-serif;

}
img{
    max-width:100%;
    display:block;
}
html{
    &::-webkit-scrollbar{
        width:.3rem;
        border-radius:3px;
    }
    &::-webkit-scrollbar-track{
        /* background-color:black; */
        
    }
    &::-webkit-scrollbar-thumb{
        background-color:#00a19d;
        
    }
}
a{
    text-decoration:none;
    color:black;
}


`;

export default GlobalStyles;
