import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    height: 100vh;
    background-color: var(--blue);
    text-align: center;


    img {
        width: 150px;
        margin: 10px 0 0 27px;
    }

    ul {
        li {
        padding:  60px 60px 0 60px;
        a {
            text-decoration: none;
            color: #fff;
            transition: filter 0.2s ;

            &:hover {
                filter: brightness(0.9);
            }
         }
        }
    }

    footer {
        margin-top: 740px;
        width: 200px;
        div {
            display: flex;
            justify-content: space-around;
            margin-left: 10px;
            a {
                color: #fff;
                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.8);
                }
            }
        }
    }
`;