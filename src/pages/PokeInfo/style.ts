import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        display: flex;
        width: 50%;
        height: 40%;
        //background-color: #fff;
        //border: 1px solid var(--blue);
        //border-radius: 1em;

        aside {
            display: flex;
            flex-direction: column;
            background: var(--red);
            width: 40%;
            height: 100%;
            border-radius: 1em 0 0 1em;
            border-right: 2px solid var(--blue);
            justify-content: space-evenly;
            align-items: center;
            box-shadow: 3px 5px 6px #1c1c1c;
            

            h1 {
                text-transform: capitalize;
                color: #fff;
                text-shadow: -1px 1px 1px #000,
                            1px 1px 1px  #000,
                            1px -1px 1px  #000,
                            -1px -1px 1px  #000;
            }

            img {
                margin-top: 10px;
                width: 150px;
                height: 150px;
                background:  #fff /*#7282fc*/;
                border-radius: 50%;
                border: 2px solid var(--blue);
            }
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #fff;
            width: 50%;
            border-radius: 0 1em 1em 0;
            box-shadow: 3px 5px 6px #1c1c1c;

            section {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: center;
                background: var(--blue);

                h2 {
                    text-align: center;
                    color: #fff;
                    margin-bottom: 5px;
                    text-decoration: underline;
                }

                h3 {
                    text-align: center;
                    
                    color: #fff;
                }
            }

            p {
                font-size: 24px;
                font-weight: 500;
            }

            main {
                h1 {
                    text-align: center;
                    margin-top: 10px;
                }

                h2 {
                    display: inline;
                    margin-left: 10px;
                    text-align: center;
                }
            }
        }
    }
`;
