import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    /* display: flex;
    flex-direction: column;
 */
    header {
        margin-top: 20px;
        height: 30px;
        display: flex;  
        justify-content: center;

        form {
            display: flex;
            justify-content: space-around;
            background-color: #fff;
            width: 30%;
            border-radius: 4px;
            border: 2px solid var(--blue);
            transition: color 0.2s;

            button {
                background: none;
                border: none;
                transition: color 0.2s;

                svg {
                    margin-top: 2px;
                }
                
                &:hover{
                    color: var(--blue);
                    filter: brightness(0.1);
                }
            }

            input {
                font-size: 1rem;
                font-weight: 500;
                width: 80%;
                height: 100%;
                border: none;
                outline: none;
                text-align: center;
                padding: 0 1rem 0 4rem;
                transition: color 0.2s;

                &::placeholder{
                    color: #000;
                }
            }
        }    
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
        
        div {
            display: flex;
            //text-align: center;
            justify-content: space-between;
            width: 50%;
            background-color: #fff;
            border: 2px solid var(--blue);
            border-radius: 4px;
            margin-bottom: 10px;
            padding: 10px;

            img {
                width: 30px;
            }

            a {
                text-decoration: none;
                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.9);
                }

                h1 {
                    color: var(--blue);
                    //text-transform: capitalize;
                    /* text-shadow: -1px 1px 1px var(--yellow),
                            1px 1px 1px var(--yellow),
                            1px -1px 1px var(--yellow),
                            -1px -1px 1px var(--yellow); */
                }
            }
        }
    }
`;