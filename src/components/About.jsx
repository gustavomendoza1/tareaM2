import styled from 'styled-components';



const About = () => {

    const Title = styled.h1`
        text-align: center;
        font-size: 50px;
        color: #0FFF50;
    `;

    const Pic = styled.img`
        border-radius: 30px;
    `;


    return (
        <div>
            <Title>About</Title>
            <Pic src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-NieSuqrxhvIp5a618Zk7w39Q4pKXCl4Tj6fJdRWW9Y4JKa1jwQlGGNa6tiXLDtVcLA&usqp=CAU' alt='hola'/>
        </div>
    )
}

export default About;